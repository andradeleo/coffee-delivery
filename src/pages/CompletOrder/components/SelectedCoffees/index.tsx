import { TitleText } from "../../../../components/Typograpy";
import useCart from "../../../../hooks/useCart";
import CoffeeCartCard from "../CoffeeCartCard";
import ConfirmationSection from "./ConfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";


export default function SelectedCoffees() {
	const {cartItens} = useCart();
	return (
		<SelectedCoffeesContainer>
			<TitleText size="xs" color="subtitle" >
				Cafés selecionados
			</TitleText>

			<DetailsContainer>
				{cartItens.map(item => (
					<CoffeeCartCard key={item.id} coffee={item}/>
				))}
				<ConfirmationSection />

			</DetailsContainer>
		</SelectedCoffeesContainer>
	);
}
