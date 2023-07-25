import { createContext, ReactNode, useEffect, useState } from "react";
import { Coffee } from "../pages/home/components/CoffeeCard";
import { produce } from "immer";

export interface CartItem extends Coffee {
	quantity: number;
}

interface CartContextType {
	cartItens: CartItem[];
	cartQuantity: number;
	addCoffeeToCart: (coffee: CartItem) => void;
	changeCartItemQuantity: (
		cartItemId: number,
		type: "increase" | "decrease"
	) => void;
	removeCartItem: (cartItemId: number) => void;
	cartItensTotal: number;
	cleanCart: () => void;
}

interface CartContextProviderProps {
	children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

const COFFEE_ITENS_STORAGE_KEY = "coffee:delivery:cartItens";

export function CartContextProvider({ children }: CartContextProviderProps) {
	const [cartItens, setCartItens] = useState<CartItem[]>(() => {
		const storedCartItens = localStorage.getItem(COFFEE_ITENS_STORAGE_KEY);
		if (storedCartItens) {
			return JSON.parse(storedCartItens);
		} else {
			return [];
		}
	});

	const cartQuantity = cartItens.length;
	const cartItensTotal = cartItens.reduce((total, cartItem,) => {
		return total + cartItem.price * cartItem.quantity;
	}, 0);

	function addCoffeeToCart(coffee: CartItem) {
		const coffeeAlreadyExistsInCart = cartItens.findIndex(
			(cartItem) => cartItem.id == coffee.id
		);

		const newCart = produce(cartItens, (draft) => {
			if (coffeeAlreadyExistsInCart < 0) {
				draft.push(coffee);
			} else {
				draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
			}
		});

		setCartItens(newCart);
	}

	function changeCartItemQuantity(
		cartItemId: number,
		type: "increase" | "decrease"
	) {
		const newCart = produce(cartItens, (draft) => {
			const coffeeExistsInCart = cartItens.findIndex(
				(cartItem) => cartItem.id == cartItemId
			);

			if (coffeeExistsInCart) {
				const item = draft[coffeeExistsInCart];

				draft[coffeeExistsInCart].quantity =
					type == "increase" ? item.quantity + 1 : item.quantity - 1;
			}
		});

		setCartItens(newCart);
	}

	function removeCartItem(cartItemId: number) {
		const newCart = produce(cartItens, (draft) => {
			const coffeeExistsInCart = cartItens.findIndex(
				(cartItem) => cartItem.id == cartItemId
			);

			if(coffeeExistsInCart) {
				draft.splice(coffeeExistsInCart, 1);
			}
		});

		setCartItens(newCart);
	}

	function cleanCart() {
		setCartItens([]);
	}

	useEffect(() => {
		localStorage.setItem(COFFEE_ITENS_STORAGE_KEY, JSON.stringify(cartItens));
	}, [cartItens]);

	return (
		<CartContext.Provider
			value={{
				cartItens,
				cartQuantity,
				addCoffeeToCart,
				changeCartItemQuantity,
				removeCartItem,
				cartItensTotal,
				cleanCart
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
