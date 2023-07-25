import { ReactNode } from "react";
import { RegularText } from "../../../../components/Typograpy";
import { SectionTitleContainer } from "./styles";


interface SectionTitleProps {
	title: string,
	subtitle: string,
	icon: ReactNode
}

export default function SectionTitle({ title, subtitle, icon} : SectionTitleProps) {
	return (
		<SectionTitleContainer>
			{icon}
			<div>
				<RegularText color="subtitle">{title}</RegularText>
				<RegularText size="s" color="subtitle">{subtitle}</RegularText>
			</div>
		</SectionTitleContainer>
	);
}
