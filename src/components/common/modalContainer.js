import React from 'react';

export default class ModalContainer extends React.Component {
	render() {
		return (
			<div style={{
				position: 'absolute',
				top: '0px',
				left: '0px',
				zIndex: '1000',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100vw',
				height: '100vh',
				backgroundColor: 'rgba(0,0,0,0.5)' }}>
				{this.props.children}
			</div>
		);
	}
}

ModalContainer.propTypes = {
	children: React.PropTypes.object.isRequired
};

