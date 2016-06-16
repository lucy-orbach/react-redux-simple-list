import React from 'react';

export default class ItemForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleInputChange(e) {
		let changedItem = {
				id: this.props.item.id,
				title: e.target.value 
		};
		this.props.onInputChange(changedItem);
	}
	render() {
		let {item} = this.props;
		return (
			<div style={{width: '350px', height: '200px', padding: '20px', backgroundColor: '#fff'}}>
				<button onClick={this.props.handleCloseModal}>x</button>
				<h2>{this.props.editing ? 'Edit Item' : 'Add New Item'}</h2>
				<input type="text" value={item.title} onChange={this.handleInputChange} />
				<input type="submit" value={this.props.editing ? 'Save Item' : 'Add Item'} onClick={this.props.editing ? this.props.handleSaveChanges : this.props.handleNewItem} />
			</div>
		);
	}
}

ItemForm.propTypes = {
	editing: React.PropTypes.bool.isRequired,
	item: React.PropTypes.object.isRequired, // {id: null,text: ''}||{id: 3, text: 'hi'}
	onInputChange: React.PropTypes.func.isRequired,
	handleSaveChanges: React.PropTypes.func.isRequired,
	handleNewItem: React.PropTypes.func.isRequired,
	handleCloseModal: React.PropTypes.func.isRequired
};