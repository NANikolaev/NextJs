// Styled elements for the Card go here

import styled from "styled-components";

import { Link, SectionParagraph } from "~/components"

export const StyledArticle = styled.article`
  
display: grid;
grid-template-columns: 20% auto;
background-color:#dbd3d32b;
text-align:start;
border-radius:10px;
&:hover,
&:focus 
    {
    border:2px solid #628eed;
    }

    &.article>span{
        grid-row: 1/3;
        justify-self: center;
        align-self: center;
        margin: 0 auto;
    }
    
    
`


export const StyledLink = styled((props) => <Link {...props} />)`
grid-column:2;
width:fit-content;
text-decoration:none;
align-self: end;
&:hover
  {
    text-decoration:underline;
    color: #628eed;
  }
`;
export const StyledParagraph = styled((props) =><SectionParagraph {...props}/>)`
grid-column:2;
margin:0 0 ;
`;


