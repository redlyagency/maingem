import React from "react"
import {
    HeroSegmentWrapper,
    BgGlob,
    Header,
    Logo,
    Nav,
    JoinBtn,
    Li,
    A,
    Body,
    H1,
    H2,
    Text,
    Arrow,
    Social,
    Icon,
    NavLogoWrapper,

} from "../styles/heroSegment.style"

import Twitter from "../images/twitter-icon.svg"
import Instagram from "../images/instagram-icon.svg"
import LinkedIn from "../images/linkedin-icon.svg"

const navContent = [
    {
        title: "About",
        link: "#about"
    },
    {
        title: "Services",
        link: "#services"
    },
    {
        title: "Contact",
        link: "#contact"
    },
]
const socialIcons = [
    {
        img: Twitter
    },
    {
        img: Instagram
    },
    {
        img: LinkedIn
    }
]

const HeroSegment = () => {
    return (
        <HeroSegmentWrapper>
            <BgGlob />
            <Header>
                <NavLogoWrapper>
                    <Logo />
                    <Nav>
                        {navContent.map((nav) => {
                            return (
                                <Li><A href={nav.link}>{nav.title}</A></Li>
                            )
                        })}
                    </Nav>
                </NavLogoWrapper>
                <JoinBtn>+ Join to us</JoinBtn>
            </Header>
            <Body>
                <H1>We change the streaming world for the better</H1>
                <H2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis dignissim ipsum eu mollis. Curabitur venenatis, justo quis placerat hendrerit, velit urna rutrum enim, vitae placerat turpis sapien vitae ligula.</H2>
                <JoinBtn isBigger>see our services</JoinBtn>
            </Body>
            <div>
                <div style={{display: 'flex'}}>
                    <Text>You will find us here</Text>
                    <Arrow />
                </div>
                <Social>
                    {socialIcons.map((icon) => {
                        return (
                            <Icon backgroundImg={icon.img} ></Icon>
                        )
                    })}
                </Social>
            </div>
        </HeroSegmentWrapper>
    )
}

export default HeroSegment