import React from 'react';
import Item from './Item.js';

export default class List extends React.Component {
	render() {
		let { items } = this.props;
		let listOfItems = items.map((item, index) =>
				<li key={index}>
					<Item 
						item={item} // {id: num, title: 'string'}
						handleDelete={this.props.handleDelete}
						handleItemEdit={this.props.handleItemEdit} />
				</li>
		);
		return (
			<div style={{borderTop: '4px solid cyan'}}>
				<h3>This is my List</h3>
				<ul>
				{items.length > 0
					? listOfItems
					: 'There are no items at this time'
				}
				</ul>
			</div>
		);
	}
}

List.propTypes = {
	items: React.PropTypes.array.isRequired,
	handleDelete: React.PropTypes.func.isRequired,
	handleItemEdit: React.PropTypes.func.isRequired
};