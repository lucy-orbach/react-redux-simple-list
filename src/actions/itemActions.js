export function addItem(item) {
	return {
		type: 'ADD_ITEM',
		item
	};
}

export function editItem(item) {
	return {
		type: 'EDIT_ITEM',
		item
	};
}

export function deleteItem(itemId) {
	return {
		type: 'DELETE_ITEM',
		itemId
	};
}