import * as types from './actionTypes.js';

export function addItem(item) {
	return {
		type: types.ADD_ITEM,
		item
	};
}

export function editItem(item) {
	return {
		type: types.EDIT_ITEM,
		item
	};
}

export function deleteItem(itemId) {
	return {
		type: types.DELETE_ITEM,
		itemId
	};
}