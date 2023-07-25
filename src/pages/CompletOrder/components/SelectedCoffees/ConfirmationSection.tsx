import Button from "../../../../components/Button";
import { RegularText } from "../../../../components/Typograpy";
import useCart from "../../../../hooks/useCart";
import { FormatMoney } from "../../../../utils/formatMoney";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5;


export default function ConfirmationSection() {
	const { cartItensTotal, cartQuantity } = useCart();
	const cartTotal = DELIVERY_PRICE + cartItensTotal;
	const formattedItenTotal = FormatMoney(cartItensTotal);
	const formattedCartTotal = FormatMoney(cartTotal);
	const formattedDeliveryPrice = FormatMoney(DELIVERY_PRICE);

	return (
		<ConfirmationSectionContainer>
			<div>
				<RegularText size="s" >
					Total de itens
				</RegularText>
				<RegularText >
					{formattedItenTotal}
				</RegularText>
			</div>
			<div>
				<RegularText size="s" >
					Entrega
				</RegularText>
				<RegularText >
					{formattedDeliveryPrice}
				</RegularText>
			</div>
			<div>
				<RegularText size="l" weight={700} color="subtitle">
					Total
				</RegularText>
				<RegularText size="l" weight={700} color="subtitle">
					{formattedCartTotal}
				</RegularText>
			</div>

			<Button text={"Confirmar pedido"} disabled={cartQuantity <= 0 } type="submit"/>
		</ConfirmationSectionContainer>
	);
}
