import React from 'react';
import ListPage from './listPage/ListPage.js';
import * as styles from '../css/app.css';

export default class App extends React.Component {
	render() {
		return (
			<div className={styles.appMain}>
				<h2 className={styles.appTitle}>Simple List App</h2>
				<ListPage />
			</div>
		);
	}
}

