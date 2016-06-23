import { createStore, applyMiddleware } from 'redux';
//import items from '../reducers/itemReducers.js';
import rootReducer from '../reducers/index.js';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(thunk, reduxImmutableStateInvariant())
	);
}