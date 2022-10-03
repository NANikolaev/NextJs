import Image from "next/image";
import {Card} from "~/collections"
import {
    StyledSection,
    StyledSectionTitle,
    StyledSectionSubTitle,
    StyledInfoContainer,
    StyledImageContainer,
    StyledArticleContainer,
} from "./elements"

export const Selection = ({ title, subTitle,image,articles }) => {
    return (
        <StyledSection >
            <StyledSectionTitle>{title}</StyledSectionTitle>
            <StyledSectionSubTitle>{subTitle}</StyledSectionSubTitle>
            <StyledInfoContainer >
                <StyledImageContainer>
                <Image layout="responsive" src={image.src} width={image.width} height={image.height} />
                </StyledImageContainer>
                <StyledArticleContainer>
                    {articles.map(a=><Card {...a}/>)}
                </StyledArticleContainer>
            </StyledInfoContainer>
        </StyledSection>
    );
}