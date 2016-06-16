import React from 'react';
import Item from './Item.js';
import * as styles from '../../css/listpage/list.css';

export default class List extends React.Component {
	render() {
		let { items } = this.props;
		let listOfItems = items.map((item, index) =>
				<li key={index} className={styles.listItem}>
					<Item 
						item={item} // {id: num, title: 'string'}
						handleDelete={this.props.handleDelete}
						handleItemEdit={this.props.handleItemEdit} />
				</li>
		);
		return (
			<ul className={styles.list}>
				{items.length > 0
					? listOfItems
					: 'There are no items at this time'
				}
			</ul>
		);
	}
}

List.propTypes = {
	items: React.PropTypes.array.isRequired,
	handleDelete: React.PropTypes.func.isRequired,
	handleItemEdit: React.PropTypes.func.isRequired
};