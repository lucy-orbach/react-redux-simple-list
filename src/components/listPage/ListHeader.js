import React from 'react';

export default class ListHeader extends React.Component {
	render() {
		return (
			<div style={{display: 'flex', justifyContent: 'space-between'}}>
				<h4>This is my ListHeader</h4>
				<button>new</button>
			</div>
		);
	}
}