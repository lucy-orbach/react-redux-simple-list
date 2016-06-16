import React from 'react';
import * as styles from '../../css/listpage/listHeader.css';

export default class ListHeader extends React.Component {
	render() {
		return (
			<div className={styles.listHeader}>
				<h4 className={styles.title}>This is my ListHeader</h4>
				<button className={styles.btnAdd} onClick={this.props.handleClickNew}>new</button>
			</div>
		);
	}
}

ListHeader.propTypes = {
	handleClickNew: React.PropTypes.func.isRequired
};