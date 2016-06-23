import React from 'react';
import { Motion, spring, presets } from 'react-motion';
import * as styles from '../../css/listpage/itemForm.css';

const ItemForm = (props) => {
	return (
		<Motion
			defaultStyle={{maxh: 0}}
			style={{maxh: spring(500, presets.gentle)}} >
			{({maxh}) =>
			<div className={styles.itemForm} style={{maxHeight: `${maxh}px`}}>
				<button
					className={styles.btnClose}
					onClick={props.handleCloseModal}>
					x
				</button>
				<div className={styles.container}>
					<h2 className={styles.formTitle}>
						{ props.item.id !== '' ? 'Edit Item' : 'Add New Item' }
					</h2>
				<div className={styles.form}>
					<input
						type="text"
						name="title"
						value={props.item.title}
						placeholder="Enter Item's Title"
						className={styles.inputText}
						onChange={props.onChange} />
					<textarea
						name="description"
						value={props.item.description}
						placeholder="Brief Description..."
						className={styles.textarea}
						maxLength="100"
						onChange={props.onChange} />
					<input
						type="submit"
						value={props.item.id ? 'Save Changes' : 'Add Item'}
						className={styles.btnSubmit}
						onClick={props.handleSaveItem} />
				</div>
				</div>
			</div>}
		</Motion>
	);
};

ItemForm.propTypes = {
	item: React.PropTypes.object.isRequired, 
	onChange: React.PropTypes.func.isRequired,
	handleSaveItem: React.PropTypes.func.isRequired,
	handleCloseModal: React.PropTypes.func.isRequired
};

export default ItemForm;
