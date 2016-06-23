import * as types from '../actions/actionTypes.js';

export default function itemReducer(state = [], action) {
	switch (action.type) {
		case types.LOAD_ITEMS_SUCCESS:
			return action.items;
		case types.ADD_ITEM_SUCCESS:
			return [ ...state,
				Object.assign({}, action.item )
			];
		case types.UPDATE_ITEM_SUCCESS:
			return [ // spread operator creates a brand new array..
				...state.filter(item => item.id !== action.item.id), //passes all other items
				Object.assign({}, action.item) //clones and adds it
			];
		case types.DELETE_ITEM_SUCCESS:
			return state.filter(item =>
					item.id !== action.itemId
			);
		default:
			return state;
	}
}
