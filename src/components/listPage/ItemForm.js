import React from 'react';

export default class ItemForm extends React.Component {
	constructor(props) {
		super(props);
		this.state={item: this.props.item};
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	componentWillReceiveProps(nextProps) {
		this.setState({item: nextProps.item});
	}
	handleInputChange(e) {
		let changedItem = {
				id: this.state.item.id,
				title: e.target.value 
		};
		this.props.onInputChange(changedItem);
	}
	render() {
		let {item} = this.state;
		return (
			<div >
				<h2>Add Item</h2>
				<input type="text" value={item.text} onChange={this.handleInputChange} />
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
	handleNewItem: React.PropTypes.func.isRequired
};