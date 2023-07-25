import styled from "styled-components";
import { SectionBaseStyles } from "../../styles";

export const SelectedCoffeesContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	width: 40rem;
`;

export const DetailsContainer = styled(SectionBaseStyles)`
	border-radius: 6px 44px 6px 44px;
	display: flex;
	flex-direction: column;
`;

export const ConfirmationSectionContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 0.8rem;

	> div {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

