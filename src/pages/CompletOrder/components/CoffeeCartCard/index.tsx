import { Trash } from "phosphor-react";
import QuantityInput from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typograpy";
import { CartItem } from "../../../../contexts/CartContext";
import useCart from "../../../../hooks/useCart";
import { FormatMoney } from "../../../../utils/formatMoney";
import { ActionContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";

interface CoffeeCartCardProps {
	coffee: CartItem
}

export default function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
	const {changeCartItemQuantity, removeCartItem} = useCart();

	function handleIncrease() {
		changeCartItemQuantity(coffee.id, "increase");
	}

	function handleDecrease() {
		changeCartItemQuantity(coffee.id, "decrease");
	}

	function handleRemove() {
		removeCartItem(coffee.id);
	}

	const coffeTotal = coffee.price * coffee.quantity;
	const formattedPrice = FormatMoney(coffeTotal);

	return (
		<CoffeeCartCardContainer>
			<div>
				<img src={`/coffees/${coffee.photo}`} alt="" />
				<div>
					<RegularText color="subtitle" >{coffee.name}</RegularText>
					<ActionContainer>
						<QuantityInput
							size="small"
							quantity={coffee.quantity}
							onIncrease={handleIncrease}
							onDecrease={handleDecrease}
						/>
						<RemoveButton type="button" onClick={handleRemove}>
							<Trash size={16} />
							REMOVER
						</RemoveButton>
					</ActionContainer>
				</div>
			</div>

			<p>{formattedPrice}</p>
		</CoffeeCartCardContainer>
	);
}
