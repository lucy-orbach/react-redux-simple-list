import React from 'react';
import { Motion, spring, presets } from 'react-motion';
import Item from './Item.js';
import * as styles from '../../css/listpage/list.css';

export default class List extends React.Component {
	render() {
		let { items } = this.props;
		let listOfItems = items.map((item, index) =>
			<Motion key={index} defaultStyle={{maxh: 0}} style={{maxh: spring(200, presets.gentle)}}>
			{({maxh}) =>
				<li className={styles.listItem} style={{maxHeight: `${maxh}px`, overflow: 'hidden'}}>
					<Item
						media={this.props.media}
						item={item} 
						handleDelete={this.props.handleDelete}
						handleItemEdit={this.props.handleItemEdit} />
				</li>}
			</Motion>
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
	media: React.PropTypes.object.isRequired,
	handleDelete: React.PropTypes.func.isRequired,
	handleItemEdit: React.PropTypes.func.isRequired
};