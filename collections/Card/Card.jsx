// The Card to be exported goes here
import Image from "next/image";

import {
    StyledArticle,
    StyledLink,
    StyledParagraph, 
     
} from "./elements"

export const Card=({title,icon,textRows})=>{
    return(
        <StyledArticle className="article">
            <Image src={icon} alt="" width="50px" height="50px"/>
             <StyledLink href='#'>{title}</StyledLink>
             <StyledParagraph>{textRows[0]}<br/>{textRows[1]}<br/>{textRows[2]}<br/></StyledParagraph>
        </StyledArticle>
    )
}