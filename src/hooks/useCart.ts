import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";



export default function useCart() {
	const context = useContext(CartContext);
	return context;
}
