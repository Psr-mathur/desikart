export const InitialCartState = {
	itemsIds: [],
	itemsQuantities: [],
	itemsPrices: [],
};

function doesExist(arr, x) {
	return arr.includes(x);
}

function findIndex(arr, x) {
	return arr.indexOf(x);
}

export const cartReducer = (state, action) => {
	let newItemsIds = [...state.itemsIds];
	let newItemsQuantities = [...state.itemsQuantities];
	let newItemsPrices = [...state.itemsPrices];
	switch (action.type) {
		case "ADD_TO_CART": {
			// console.log("here");
			const id = action.payload["id"];
			const qn = action.payload["qn"];
			const price = action.payload["price"];
			newItemsIds = [...state.itemsIds, id];
			newItemsQuantities = [...state.itemsQuantities, qn];
			newItemsPrices = [...state.itemsPrices, price];
			return {
				...state,
				itemsIds: newItemsIds,
				itemsQuantities: newItemsQuantities,
				itemsPrices: newItemsPrices,
			};
		}
		case "INCR_QUANTITY": {
			const id = action.payload["id"];
			const index = findIndex(newItemsIds, id);
			if (index !== -1) {
				newItemsQuantities[index]++;
			}
			return { ...state, itemsQuantities: newItemsQuantities };
		}
		case "DECR_QUANTITY": {
			const id = action.payload["id"];
			const index = findIndex(newItemsIds, id);
			if (index !== -1) {
				newItemsQuantities[index]--;
				if (newItemsQuantities[index] == 0) {
					newItemsIds.splice(index, 1);
					newItemsQuantities.splice(index, 1);
					newItemsPrices.splice(index, 1);
				}
			}
			return {
				...state,
				itemsIds: newItemsIds,
				itemsQuantities: newItemsQuantities,
				itemsPrices: newItemsPrices,
			};
		}
		default:
			return state;
	}
};
