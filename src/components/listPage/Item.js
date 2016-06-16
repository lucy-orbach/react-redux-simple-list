import React from 'react';
import * as styles from '../../css/listpage/item.css';

export default class Item extends React.Component {
	render() {
		let { item } = this.props;
		return (
			<div className={styles.item}>
				<div className={styles.itemHeader}>
					<h5 className={styles.title}>{item.title}</h5>
					<button key={0} className={styles.btnEdit}onClick={() => this.props.handleItemEdit(item)}>Edit</button>
					<button key={1} className={styles.btnDelete} onClick={() => this.props.handleDelete(item.id)}>Delete</button>
				</div>
				{!this.props.media.mobile
					? <p className={styles.paragraph}>{item.description ? item.description : 'This item has no description'}</p>
					: null
				}
			</div>
		);
	}
}

Item.propTypes = {
	item: React.PropTypes.object.isRequired,
	media: React.PropTypes.object.isRequired,
	handleDelete: React.PropTypes.func.isRequired,
	handleItemEdit: React.PropTypes.func.isRequired
};