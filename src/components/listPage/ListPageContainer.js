import React from 'react';
import  { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListHeader from './ListHeader.js';
import List from './List.js';
import ModalContainer from '../common/ModalContainer.js';
import ItemForm from './ItemForm.js';
import * as itemActions from '../../actions/itemActions.js';
import * as styles from '../../css/listpage/listpage.css';

class ListPage extends React.Component {
	constructor(props) {
		super(props);
		let lastItem = this.props.items[this.props.items.length - 1];
		this.state = {
			showModal: false,
			errors: {}	
		};
		this.state.activeItem = { //template for editing or new item
			id: '', 
			title: '',
			description: '' 
		};
		this.handleChange=this.handleChange.bind(this);
		this.handleClickEdit = this.handleClickEdit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleSaveItem=this.handleSaveItem.bind(this);
		this.handleToggleModal = this.handleToggleModal.bind(this);
		this.resetActiveItem = this.resetActiveItem.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		// let lastItem = nextProps.items[nextProps.items.length - 1];
		// this.setState({
		// 	editing: false,
		// 	activeItem: {
		// 		id: lastItem ? lastItem.id + 1 : 1, 
		// 		title: '',
		// 		description: '' }
		// });
	}
	handleChange(e) {
		e.preventDefault();
		let activeItem = Object.assign({}, this.state.activeItem, {[e.target.name]: e.target.value });
		this.setState({ activeItem });
	}
	handleClickEdit(item) {
		this.setState({ activeItem: item });
		this.handleToggleModal();	
	}
	handleDelete(itemId) {
		this.props.actions.deleteItem(itemId);
	}
	handleSaveItem(e) {
		e.preventDefault();
		this.props.actions.saveItem(this.state.activeItem);
		this.handleToggleModal();
	}
	handleToggleModal() {
		this.setState({showModal: !this.state.showModal});
	}
	resetActiveItem() {
		this.setState({
			activeItem: {id: '', title: '', description: ''},
			errors: {},
			showModal: false
		});
	}
	render() {
		let { items, media } = this.props;
		return (
			<div className={styles.listPage}>
				{this.state.showModal
					?	<ModalContainer>
							<ItemForm
								errors={this.state.errors}
								item={this.state.activeItem} 
								onChange={this.handleChange}
								handleSaveItem={this.handleSaveItem}
								handleCloseModal={this.resetActiveItem} />
						</ModalContainer>
					: null
				}
				<section className={styles.itemsSection}>
					<ListHeader handleClickNew={this.handleToggleModal} />
					<List
						items={items}
						media={media}
						handleDelete={this.handleDelete}
						handleEditItem={this.handleClickEdit} />
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
