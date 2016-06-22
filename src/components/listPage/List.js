import React from 'react';
import { Motion, spring, presets } from 'react-motion';
import Item from './Item.js';
import * as styles from '../../css/listpage/list.css';

const List = (props) => {
	const listOfItems = props.items.map((item, index) =>
		<Motion
			key={index}
			defaultStyle={{maxh: 0}}
			style={{maxh: spring(200, presets.gentle)}}>
			{({maxh}) =>
				<li 
					className={styles.listItem}
					style={{maxHeight: `${maxh}px`, overflow: 'hidden'}} >
					<Item
						media={props.media}
						item={item} 
						handleDelete={props.handleDelete}
						handleEditItem={props.handleEditItem} />
				</li> }
		</Motion>
	);
	return (
		<ul className={styles.list}>
			{props.items.length > 0
				? listOfItems
				: 'There are no items at this time'
			}
		</ul>
	);
};

List.propTypes = {
	items: React.PropTypes.array.isRequired,
	media: React.PropTypes.object.isRequired,
	handleDelete: React.PropTypes.func.isRequired,
	handleEditItem: React.PropTypes.func.isRequired
};

export default List;
