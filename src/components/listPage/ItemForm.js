import React from 'react';
import * as styles from '../../css/listpage/itemForm.css';

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
			<div className={styles.itemForm}>
				<button className={styles.btnClose} onClick={this.props.handleCloseModal}>x</button>
				<div className={styles.container}>
					<h2 className={styles.formTitle}>{this.props.editing ? 'Edit Item' : 'Add New Item'}</h2>
				<div className={styles.form}>
					<input
						type="text"
						value={item.title}
						placeholder="Enter Item's Title"
						className={styles.inputText}
						onChange={this.handleInputChange} />
					<textarea
						value={item.description}
						placeholder="Brief Description..."
						className={styles.textarea}
						maxLength="100"
						onChange={this.handleTextareaChange} />
					<input
						type="submit"
						value={this.props.editing ? 'Save Changes' : 'Add Item'}
						className={styles.btnSubmit}
						onClick={this.props.editing
							? this.props.handleSaveChanges
							: this.props.handleNewItem} />
				</div>
				</div>
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