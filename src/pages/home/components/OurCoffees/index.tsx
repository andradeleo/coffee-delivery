import { TitleText } from "../../../../components/Typograpy";
import { coffees } from "../../../../data/coffees";
import CoffeeCard from "../CoffeeCard";
import { CoffeList, OurCoffeesContainer } from "./styles";


export default function OurCoffees() {
	return (
		<OurCoffeesContainer className="container">
			<TitleText size="l" color="subtitle">
				Nossos cafés
			</TitleText>

			<CoffeList>
				{
					coffees.map((coffee) => (
						<CoffeeCard key={coffee.id} coffee={coffee}/>
					))
				}
			</CoffeList>
		</OurCoffeesContainer>
	);
}
