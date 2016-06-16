import React from 'react';

export default class ItemForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleTextareaChange = this.handleTextareaChange.bind(this);
	}
	handleInputChange(e) {
		let changedItem = {
				id: this.props.item.id,
				title: e.target.value,
				description: this.props.item.description 
		};
		this.props.onInputChange(changedItem);
	}
	handleTextareaChange(e) {
		let changedItem = {
				id: this.props.item.id,
				title: this.props.item.title,
				description: e.target.value 
		};
		this.props.onInputChange(changedItem);
	}
	render() {
		let {item} = this.props;
		return (
			<div style={{width: '350px', height: '200px', padding: '20px', backgroundColor: '#fff'}}>
				<button onClick={this.props.handleCloseModal}>x</button>
				<h2>{this.props.editing ? 'Edit Item' : 'Add New Item'}</h2>
				<input type="text" value={item.title} placeholder="Enter Item's Title" onChange={this.handleInputChange} />
				<textarea type="text" value={item.description} placeholder="Brief Description:" onChange={this.handleTextareaChange} />
				<input type="submit" value={this.props.editing ? 'Save Changes' : 'Add Item'} onClick={this.props.editing ? this.props.handleSaveChanges : this.props.handleNewItem} />
			</div>
		);
	}
}

ItemForm.propTypes = {
	editing: React.PropTypes.bool.isRequired,
	item: React.PropTypes.object.isRequired, 
	onInputChange: React.PropTypes.func.isRequired,
	handleSaveChanges: React.PropTypes.func.isRequired,
	handleNewItem: React.PropTypes.func.isRequired,
	handleCloseModal: React.PropTypes.func.isRequired
};