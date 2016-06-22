import React from 'react';
import * as styles from '../../css/listpage/listHeader.css';

const ListHeader = (props) => {
	return (
		<div className={styles.listHeader}>
			<h4 className={styles.title}>Fantastic Things to do in NYC </h4>
			<button
				className={styles.btnAdd}
				onClick={props.handleClickNew}>
				new
			</button>
		</div>
	);
};

ListHeader.propTypes = {
	handleClickNew: React.PropTypes.func.isRequired
};

export default ListHeader;