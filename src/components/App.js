import React from 'react';
import ListPage from './listPage/ListPage.js';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<h2>Simple List App</h2>
				<ListPage />
			</div>
		);
	}
}

