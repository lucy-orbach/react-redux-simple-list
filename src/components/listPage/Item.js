import React from 'react';

export default class Item extends React.Component {
	render() {
		let { item } = this.props;
		return (
			<div style={{backgroundColor: '#f3f3f3', margin: '20px'}}>
				<h5>{item.title} {item.id}</h5>
				<button key={0} onClick={() => this.props.handleItemEdit(item)}>Edit</button>
				<button key={1} onClick={() => this.props.handleDelete(item.id)}>Delete</button>
			</div>
		);
	}
}

Item.propTypes = {
	item: React.PropTypes.object.isRequired,
	handleDelete: React.PropTypes.func.isRequired,
	handleItemEdit: React.PropTypes.func.isRequired
};