import styled from "styled-components";


import { SectionHeading, SectionContainer, SectionSubheading } from "~/components";

export const StyledSection = styled(SectionContainer)`
display:block;
 background-image:url(/img/background.png);
 background-size: cover;
 text-align:center;
`;
export const StyledSectionTitle = styled((props) => <SectionHeading {...props} />)`
margin:0;
`;
export const StyledSectionSubTitle = styled((props) => <SectionSubheading {...props} />)`
margin:0;
`;

export const StyledInfoContainer=styled.div`
display:grid;
grid-template-columns: 48% 50%;
margin: 2% 0 0 0;
@media screen and (max-width: 1023px){
    display:flex;
    flex-direction:column;
    align-content: center;
    flex-wrap: wrap;
    margin: 4% 0 0 0;
    & div:first-child{
        position:unset;
        margin-bottom:2%
    }
    
    
}
`;
export const StyledImageContainer=styled.div`
width:45%;
height: fit-content;
position:relative;
left:43%;

`;

export const StyledArticleContainer=styled.div`
display:grid;
row-gap: 5%;
grid-template-rows: 30% 30% 30% ;
padding: 2% 0;

`;

