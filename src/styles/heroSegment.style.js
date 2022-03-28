import styled from "styled-components"

import GlobImage from "../images/glob.png"
import LogoImage from "../images/logo.svg"
import ArrowImage from "../images/social-arrow.svg"

export const HeroSegmentWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    max-width: 1920px;
    background: transparent linear-gradient(243deg, #5D1C7B 0%, #371047 100%) 0% 0% no-repeat padding-box;
    position: relative;
    padding: 60px 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 900px) {
        padding: 20px;
    }
`
export const BgGlob = styled.div`
    background: transparent url(${GlobImage}) 120px 60px no-repeat padding-box;
    background-size: 100%;
    width: 1069px;
    height: 770px;
    position: absolute;
    right: 0;
    bottom: 0;

    @media (max-width: 720px) {
        width: 800px;
        height: 500px;
        right: 0;
    }
`
export const Header = styled.header`
    width: 100%;
    height: 53px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1100px) {
        flex-direction: column;
        align-items: center;
    }
`
export const Logo = styled.div`
    background: transparent url(${LogoImage}) 0% 0% no-repeat padding-box;
    height: 70px;
    width: 100%;

    @media (max-width: 1100px) {
        width: 290px;
    }
`
export const Nav = styled.nav`
    height: 70px;
    width: 450px;
    line-height: 55px;
`
export const JoinBtn = styled.button`
    background-color: transparent;
    border-radius: 17px;
    padding: 0 25px;
    height: 45px;
    color: white;
    width: ${props => props.isBigger ? "250px" : "125px"};
    font-size: ${props => props.isBigger ? "23px" : "14px"};
    border: 1.5px solid white;
    margin-top: 3px;

    :hover {
        background-color: white;
        color: black;
    }
`
export const Li = styled.li`
    display: inline;
    margin-left: 70px;
`
export const A = styled.a`
    color: white;
    text-decoration: none;
    font-size: 16px;

    :hover {
        opacity: 0.7;
    }
`
export const Body = styled.div`
    width: 900px;
    display: flex;
    flex-direction: column;

`
export const H1 = styled.h1`
    color: white;
    font-size: 65px;
    font-weight: 800;
    font-family: "Nunito", sans-serif;

    @media (max-width: 900px) {
        font-size: 45px;
        width: 80vw;
    }
`
export const H2 = styled.h2`
    color: white;
    font-size: 20px;
    font-weight: 500;
    font-family: "Nunito", sans-serif;
    width: 80%;

    @media (max-width: 900px) {
        font-size: 17px;
        width: 90vw;
    }
`
export const Text = styled.div`
    color: white;
    font-size: 12px;
`
export const Arrow = styled.div`
    background-image: url(${ArrowImage});
    width: 30px;
    height: 30px;
    background-size: 100%;
    margin-left: 10px;
`
export const Social = styled.div`
    display: flex;
    justify-content: space-between;
    width: 155px;
`
export const Icon = styled.div`
    background-image: ${props => `url(${props.backgroundImg})`};
    background-size: 60%;
    background-position: center;
    background-repeat: no-repeat;
    height: 50px;
    width: 50px;
`
export const NavLogoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 680px;

    @media (max-width: 1100px) {
        flex-direction: column;
        align-items: center;
    }
`