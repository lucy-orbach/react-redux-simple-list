import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import App from './components/App.js';
// import routes from './routes';
// import HomePage from './components/home/HomePage';
const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
