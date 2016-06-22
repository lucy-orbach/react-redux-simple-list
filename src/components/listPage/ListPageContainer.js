import React from 'react';
import  { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
		this.handleChange=this.handleChange.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleEditItem = this.handleEditItem.bind(this);
		this.handleNewItem = this.handleNewItem.bind(this);
		this.handleSaveChanges = this.handleSaveChanges.bind(this);
		this.handleToggleModal = this.handleToggleModal.bind(this);
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
	handleChange(e) {
		e.preventDefault();
		let title = e.target.value;
		let keyName = e.target.name;
		let activeItem = Object.assign({}, this.state.activeItem, {[e.target.name]: e.target.value});
		this.setState({activeItem});
	}
	handleDelete(id) {
		this.props.actions.deleteItem(id);
	}
	handleEditItem(item) {
		console.log('edit');
		this.setState({
			editing: true,
			activeItem: item });
		this.handleToggleModal();	
	}
	handleNewItem() {	
		this.props.actions.addItem(this.state.activeItem);
		this.handleToggleModal();
	}
	handleSaveChanges() {
		this.props.actions.editItem(this.state.activeItem);
		this.handleToggleModal();
	}
	handleToggleModal() {
		this.setState({showModal: !this.state.showModal});
	}
	render() {
		let { items, media } = this.props;
		return (
			<div className={styles.listPage}>
				{this.state.showModal
					?	<ModalContainer>
							<ItemForm
								editing={this.state.editing}
								item={this.state.activeItem} 
								onChange={this.handleChange}
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
						media={media}
						handleDelete={this.handleDelete}
						handleEditItem={this.handleEditItem} />
				</section>
			</div>
		);
	}
}

ListPage.propTypes = {
	actions: React.PropTypes.object.isRequired,
	items: React.PropTypes.array.isRequired,
	media: React.PropTypes.object.isRequired
};
// Redux connect...
function mapStateToProps(state, ownProps) {
	return {
		items: state.items
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(itemActions, dispatch)
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
