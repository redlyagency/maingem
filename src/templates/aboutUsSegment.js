import React from "react";
import{
    AboutUsWrapper,
    H1,
    HeaderDiv,
    Icon,
    BodyWrapper,
    ColumnWrapper,
    Title,
    Content,

}from "../styles/aboutUsSegment.style"

import LoyaltyIcon from "../images/loyalty-icon.svg"
import PassionIcon from "../images/passion-icon.svg"
import TransparencyIcon from "../images/transparency-icon.svg"
import IndependenceIcon from "../images/independence-icon.svg" 

const aboutUsData = [
    {
        Icon: LoyaltyIcon, 
        Title: "loyality",
        Content: "Aliquam consequat eget justo vitae laoreet. Aliquam sapien nisi, convallis non lectus eget, condimentum tempus lacus. Nulla quis augue rhoncus magna vestibulum eleifend. Sed mollis viverra turpis ut accumsan. Fusce finibus bibendum interdum. Trices posuere cubilia curae; Etiam eu aliquam risus. Vivamus tempor dui posuere enim ultricies.",
    },
    {
        Icon: PassionIcon, 
        Title: "passion",
        Content: "Sed lacus leo, pellentesque eget lacinia quis, cursus et orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus sodales justo eu egestas ultrices. Fusce rhoncus placerat diam, quis rutrum tortor. Aliquam ac sem a enim condimentum sodales quis nec ligula. Praesent massa libero, aliquam vulputate libero ut.",
    },
    {
        Icon: TransparencyIcon, 
        Title: "transparency",
        Content: "In sed viverra urna. Vestibulum sit amet libero eget sapien posuere ornare. Integer euismod velit vel fringilla ultricies. Morbi est nibh, sodales ac vulputate et, posuere non lacus. Sed ac magna gravida, volutpat ante at, interdum erat. Etiam lobortis ac risus ut imperdiet. Vivamus et accumsan tellus, a euismod risus. Nulla sollicitudin pharetra sem, eu lobortis.",
    },
    {
        Icon: IndependenceIcon, 
        Title: "independence",
        Content: "Vestibulum sed tellus commodo, volutpat purus in, tincidunt nibh. Nullam dictum at quam sit amet facilisis. Nulla ante orci, viverra a placerat ut, efficitur at ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc in urna sit amet metus iaculis sagittis. Quisque laoreet faucibus libero a venenatis."
    }
]

const AboutUsSegment = () => {
    return(
        <AboutUsWrapper>
            <HeaderDiv>
                <H1>A few words about us</H1>
            </HeaderDiv>
            <BodyWrapper>
                {aboutUsData.map((column) => {
                    return (
                        <ColumnWrapper>
                            <Icon iconImg={column.Icon}/>
                            <Title>{column.Title}</Title>
                            <Content>{column.Content}</Content>
                        </ColumnWrapper>
                    )
                })}
            </BodyWrapper>
        </AboutUsWrapper>
    )
}

export default AboutUsSegment