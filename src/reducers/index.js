import { combineReducers } from 'redux';
import items from '../reducers/itemReducers.js';

const rootReducer = combineReducers( {
	items
});

export default rootReducer;