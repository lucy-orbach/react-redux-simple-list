import React from 'react';
import * as styles from '../../css/common/modalContainer.css';


export default class ModalContainer extends React.Component {
	render() {
		return (
			<div className={styles.modalContainer}>
				{this.props.children}
			</div>
		);
	}
}

ModalContainer.propTypes = {
	children: React.PropTypes.object.isRequired
};

