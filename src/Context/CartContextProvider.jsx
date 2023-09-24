import { createContext, useReducer } from "react";
import { InitialCartState, cartReducer } from "./CartReducer";

// context provider
export const CartContext = createContext({
	itemsIds: [],
	itemsQuantities: [],
	itemsPrices: [],
	addItemToCart: () => {},
	removeItemFromCart: () => {},
	incrementQn: () => {},
	decrementQn: () => {},
});

const CartContextProvider = ({ children }) => {
	const [cartState, dispatchCartState] = useReducer(
		cartReducer,
		InitialCartState
	);

	const handleIncrQn = (itemid) => {
		dispatchCartState({
			type: "INCR_QUANTITY",
			payload: {
				id: itemid,
			},
		});
	};

	const handleDecrQn = (itemid) => {
		dispatchCartState({
			type: "DECR_QUANTITY",
			payload: {
				id: itemid,
			},
		});
	};

	const handleATC = (itemid, quan, price) => {
		dispatchCartState({
			type: "ADD_TO_CART",
			payload: {
				id: itemid,
				qn: quan,
				price: price,
			},
		});
	};
	console.log(cartState);

	return (
		<CartContext.Provider
			value={{
				itemsIds: cartState.itemsIds,
				itemsQuantities: cartState.itemsQuantities,
				itemsPrices: cartState.itemsPrices,
				addItemToCart: handleATC,
				incrementQn: handleIncrQn,
				decrementQn: handleDecrQn,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;
