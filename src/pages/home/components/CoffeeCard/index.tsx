import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import QuantityInput from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typograpy";
import useCart from "../../../../hooks/useCart";
import { FormatMoney } from "../../../../utils/formatMoney";
import { AddCartWrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./styles";

export interface Coffee {
	id: number,
	tags: string[],
	name: string,
	description: string,
	photo: string,
	price: number
}

interface CoffeeCardProps {
	coffee: Coffee
}

export default function CoffeeCard({ coffee } : CoffeeCardProps) {
	const [quantity, setQuantity] = useState(1);

	function handleIncrease() {
		setQuantity(state => state + 1);
	}

	function handleDecrease() {
		setQuantity(state => state - 1);
	}

	const {addCoffeeToCart} = useCart();

	function handleAddToCart() {
		const coffeeToAdd = {
			...coffee,
			quantity,
		};

		addCoffeeToCart(coffeeToAdd);
	}


	const formattedPrice = FormatMoney(coffee.price);

	return (
		<CoffeeCardContainer>
			<img src={`/coffees/${coffee.photo}`} alt="" />

			<Tags>
				{
					coffee.tags.map((tag) => (
						<span key={`${coffee.id}-${tag}`}>{tag}</span>
					))
				}
			</Tags>

			<Name>
				{coffee.name}
			</Name>
			<Description>{coffee.description}</Description>

			<CardFooter>
				<div>
					<RegularText size="s">R$</RegularText>
					<TitleText size="m" color="text" as="strong">{formattedPrice}</TitleText>
				</div>

				<AddCartWrapper>
					<QuantityInput
						onIncrease={handleIncrease}
						onDecrease={handleDecrease}
						quantity={quantity}
					/>
					<button onClick={handleAddToCart}>
						<ShoppingCart size={22} weight="fill" />
					</button>
				</AddCartWrapper>
			</CardFooter>
		</CoffeeCardContainer>
	);
}
