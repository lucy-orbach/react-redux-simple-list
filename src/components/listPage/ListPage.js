import React from 'react';
import  { connect } from 'react-redux';
import * as itemActions from '../../actions/itemActions.js';
import ListHeader from './ListHeader.js';
import List from './List.js';
import ModalContainer from '../common/ModalContainer.js';
import ItemForm from './ItemForm.js';
import * as styles from '../../css/listpage/listpage.css';

class ListPage extends React.Component {
	constructor(props) {
		super(props);
		let lastItem = this.props.items[this.props.items.length - 1];
		this.state = {
			showModal: false,
			editing: false	
		};
		this.state.activeItem = {
			id: this.props.items.length > 0 ? lastItem.id + 1 : 1, 
			title: '',
			description: '' 
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleNewItem = this.handleNewItem.bind(this);
		this.handleSaveChanges = this.handleSaveChanges.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleItemEdit = this.handleItemEdit.bind(this);
		this.handleToggleModal = this.handleToggleModal.bind(this);
		// this.resetInput = this.resetInput.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		let lastItem = nextProps.items[nextProps.items.length - 1];
		this.setState({
			editing: false,
			activeItem: {
				id: lastItem ? lastItem.id + 1 : 1, 
				title: '',
				description: '' }
		});
	}
	handleInputChange(activeItem) { //(e.target.value, this.props.item.id);
		this.setState({activeItem});
	}
	handleNewItem() {	
		this.props.dispatch(itemActions.addItem(this.state.activeItem));
		this.handleToggleModal();
	}
	handleSaveChanges() {
		this.props.dispatch(itemActions.editItem(this.state.activeItem));
		this.handleToggleModal();
	}
	handleDelete(id) {
		this.props.dispatch(itemActions.deleteItem(id));
	}
	handleItemEdit(activeItem) {
		this.setState({
			editing: true,
			activeItem });
		this.handleToggleModal();	
	}
	handleToggleModal() {
		this.setState({showModal: !this.state.showModal});
	}
	render() {
		let { items } = this.props;
		let { showModal } = this.state;
		return (
			<div className={styles.listPage}>
				{showModal
					?	<ModalContainer>
							<ItemForm
								editing={this.state.editing}
								item={this.state.activeItem} 
								onInputChange={this.handleInputChange}
								handleSaveChanges={this.handleSaveChanges}
								handleNewItem={this.handleNewItem}
								handleCloseModal={this.handleToggleModal} />
						</ModalContainer>
					: null
				}
				<section className={styles.itemsSection}>
					<ListHeader handleClickNew={this.handleToggleModal} />
					<List
						items={items}
						media={this.props.media}
						handleDelete={this.handleDelete}
						handleItemEdit={this.handleItemEdit} />
				</section>
			</div>
		);
	}
}

ListPage.propTypes = {
	items: React.PropTypes.array.isRequired,
	dispatch: React.PropTypes.func.isRequired,
	media: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		items: state.items
	};
}

export default connect(mapStateToProps)(ListPage);