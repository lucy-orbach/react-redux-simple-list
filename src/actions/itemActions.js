import * as types from './actionTypes.js';
import mockApi from '../api/mockApi.js'; // or ref to api

export function loadItemsSuccess(items) {
	return {
		type: types.LOAD_ITEMS_SUCCESS,
		items
	};
}

export function addItemSuccess(item) {
	return {
		type: types.ADD_ITEM_SUCCESS,
		item
	};
}

export function updateItemSuccess(item) {
	return {
		type: types.UPDATE_ITEM_SUCCESS,
		item
	};
}

export function deleteItemSuccess(itemId) {
	return {
		type: types.DELETE_ITEM_SUCCESS,
		itemId
	};
}

/* thunks boilerplate:
export function myThunk() {
	return (dispatch) => {};
}
*/
export function loadItems() {
	return dispatch => {
		return mockApi.getAllItems() // instead of fetch or ajax call
			.then(items => {
			dispatch(loadItemsSuccess(items));
		}).catch(error => {
			throw(error);
		});
	};
}
export function saveItem(item) {
	return dispatch => {
		return mockApi.saveItem(item)
			.then(savedItem => { item.id
				? dispatch(updateItemSuccess(item))
				: dispatch(addItemSuccess(item));
		}).catch(error => {
				throw(error);
		});
	};
}
export function deleteItem(itemId) {
	return dispatch => {
		return mockApi.deleteItem(itemId)
			.then(() => {
				dispatch(deleteItemSuccess(itemId));
			}).catch(error => {
				throw(error);
			});
	};
}