import React from "react";

import StreamingIcon from "../images/streaming-icon.svg"
import BusinessIcon from "../images/business-icon.svg"
import SocialMediaIcon from "../images/socialmedia-icon.svg"
import SoftareIcon from "../images/software-icon.svg"

import{
    OurOffersWrapper,
    HeaderDiv,
    H1,
    BodyWrapper,
    ColumnWrapper,
    Icon,
    Title,
    Content,
}from "../styles/offersSegment.style"


 const offersData = [
    {
        Icon: StreamingIcon, 
        Title: "streaming",
        Content: "Mauris cursus tellus diam, in volutpat lacus ullamcorper nec. In ut accumsan magna, non egestas metus. Nam nec nisl nec ligula pulvinar maximus. Curabitur at nisl at elit dapibus hendrerit ac vitae magna. Sed ultricies enim a mi facilisis, at suscipit purus ultricies. Quisque porttitor tellus nec diam faucibus scelerisque. Ut dapibus.",
    },
    {
        Icon: BusinessIcon, 
        Title: "business",
        Content: "Nunc in urna sit amet metus iaculis sagittis. Quisque laoreet faucibus libero a venenatis. Fusce quis nisi in magna accumsan tempor. Integer imperdiet molestie justo et posuere. Quisque quam diam, dapibus at leo et, imperdiet lobortis tellus. Aenean tortor elit, suscipit quis ipsum at, tristique pellentesque magna. Nullam commodo.",
    },
    {
        Icon: SocialMediaIcon, 
        Title: "social media",
        Content: "Sed ac magna gravida, volutpat ante at, interdum erat. Etiam lobortis ac risus ut imperdiet. Vivamus et accumsan tellus, a euismod risus. Nulla sollicitudin pharetra sem, eu lobortis neque tristique vitae. Mauris cursus tellus diam, in volutpat lacus ullamcorper nec. In ut accumsan magna, non egestas metus. Nam nec nisl nec ligula pulvinar.",
    },
    {
        Icon: SoftareIcon, 
        Title: "software",
        Content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus sodales justo eu egestas ultrices. Fusce rhoncus placerat diam, quis rutrum tortor. Aliquam ac sem a enim condimentum sodales quis nec ligula. Praesent massa libero, aliquam vulputate libero ut, consectetur euismod nisl. Quisque porttitor."
    }
]

const OurOffersSegment = () =>{
    return(
        <OurOffersWrapper>
            <HeaderDiv>
                <H1>Our company offers</H1>
            </HeaderDiv>
            <BodyWrapper>
                {offersData.map((column) => {
                    return(
                       <ColumnWrapper>
                            <Icon iconImg={column.Icon}/>
                            <Title>{column.Title}</Title>
                            <Content>{column.Content}</Content>
                       </ColumnWrapper>
                    )
                })}
            </BodyWrapper>
        </OurOffersWrapper>
    )
}
export default OurOffersSegment