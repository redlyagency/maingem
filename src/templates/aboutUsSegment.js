import React from "react";
import{
    AboutUsWrapper,
    DivIcon,
    H1,
    HeaderDiv,
    IconContent,
    IconIndependence,
    IconLoyalty,
    IconPassion,
    IconTransparency,
    TextContent

}from "../styles/aboutUsSegment.style"

const TextList = [
    {
        LoyaltyContent: "Aliquam consequat eget justo vitae laoreet. Aliquam sapien nisi, convallis non lectus eget, condimentum tempus lacus. Nulla quis augue rhoncus magna vestibulum eleifend. Sed mollis viverra turpis ut accumsan. Fusce finibus bibendum interdum. Trices posuere cubilia curae; Etiam eu aliquam risus. Vivamus tempor dui posuere enim ultricies.",
    },
    {
        PassionContent: "Sed lacus leo, pellentesque eget lacinia quis, cursus et orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus sodales justo eu egestas ultrices. Fusce rhoncus placerat diam, quis rutrum tortor. Aliquam ac sem a enim condimentum sodales quis nec ligula. Praesent massa libero, aliquam vulputate libero ut.",
    },
    {
        TransparencyContent: "In sed viverra urna. Vestibulum sit amet libero eget sapien posuere ornare. Integer euismod velit vel fringilla ultricies. Morbi est nibh, sodales ac vulputate et, posuere non lacus. Sed ac magna gravida, volutpat ante at, interdum erat. Etiam lobortis ac risus ut imperdiet. Vivamus et accumsan tellus, a euismod risus. Nulla sollicitudin pharetra sem, eu lobortis.",
    },
    {
        IndependenceContent: "1Vestibulum sed tellus commodo, volutpat purus in, tincidunt nibh. Nullam dictum at quam sit amet facilisis. Nulla ante orci, viverra a placerat ut, efficitur at ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc in urna sit amet metus iaculis sagittis. Quisque laoreet faucibus libero a venenatis.",
    }
];

const AboutUsSegment = () => {
    return(
        <AboutUsWrapper>
            <HeaderDiv>
                <H1>A few words about us</H1>
            </HeaderDiv>
            <IconContent>
                <IconLoyalty/>
                <IconPassion/>
                <IconTransparency/>
                <IconIndependence/>
            </IconContent>
        </AboutUsWrapper>
    )
}

export default AboutUsSegment