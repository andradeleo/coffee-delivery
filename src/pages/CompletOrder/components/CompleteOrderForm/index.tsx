import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";
import { TitleText } from "../../../../components/Typograpy";
import SectionTitle from "../SectionTitle";
import AdressForm from "./AdressForm";
import PaymentMethodOptions from "./PaymentMethodOptions";
import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";


export default function CompleteOrderForm() {
	const { colors } = useTheme();

	return (
		<CompleteOrderFormContainer>
			<TitleText size="xs" color="subtitle">
				Complete o seu pedido
			</TitleText>

			<FormSectionContainer >
				<SectionTitle
					title="Endereço de entrega"
					subtitle="Informe o endereço onde deseja receber o seu pedido"
					icon={<MapPinLine size={22} color={colors["brand-yellow-dark"]} />}
				/>

				<AdressForm />
			</FormSectionContainer>
			<FormSectionContainer >
				<SectionTitle
					title="Pagamento"
					subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
					icon={<CurrencyDollar size={22} color={colors["brand-purple"]} />}
				/>

				<PaymentMethodOptions />
			</FormSectionContainer>
		</CompleteOrderFormContainer>
	);
}
