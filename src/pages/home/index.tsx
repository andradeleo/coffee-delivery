import { HomeContainer } from "./styles";
import Intro from "./components/Intro";
import OurCoffees from "./components/OurCoffees";

export default function HomePage() {
	return (
		<HomeContainer>
			<Intro />
			<OurCoffees />
		</HomeContainer>
	);
}
