import * as types from '../actions/actionTypes.js';

export default function itemReducer(state = [], action) {
	switch (action.type) {
		case types.ADD_ITEM:
			return [ ...state,
				Object.assign({}, action.item )
			];
		case types.EDIT_ITEM:
			return state.map(item =>
				item.id === action.item.id //find item with same id
				?	Object.assign({}, item, action.item) //clone and change it
				: item //if item is not same -> return it
			);
		case types.DELETE_ITEM:
			return state.filter(item =>
					item.id !== action.itemId
			);
		default:
			return state;
	}
}
