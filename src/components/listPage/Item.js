import React from 'react';
import * as styles from '../../css/listpage/item.css';

const Item = (props) => {
	return (
		<div className={styles.item}>
			<div className={styles.itemHeader}>
				<h5 className={styles.title}>{props.item.title}</h5>
				<button
					key={0}
					className={styles.btnEdit}
					onClick={() => props.handleEditItem(props.item)}>
					Edit
				</button>
				<button
					key={1}
					className={styles.btnDelete}
					onClick={() => props.handleDelete(props.item.id)}>
					Delete
				</button>
			</div>
			{!props.media.mobile
				? <p className={styles.paragraph}>
					{props.item.description
						? props.item.description
						: 'This item has no description'}
					</p>
				: null
			}
		</div>
	);
};

Item.propTypes = {
	item: React.PropTypes.object.isRequired,
	media: React.PropTypes.object.isRequired,
	handleDelete: React.PropTypes.func.isRequired,
	handleEditItem: React.PropTypes.func.isRequired
};

export default Item;