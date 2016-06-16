import { createStore, applyMiddleware } from 'redux';
//import items from '../reducers/itemReducers.js';
import rootReducer from '../reducers/index.js';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(reduxImmutableStateInvariant())
	);
}