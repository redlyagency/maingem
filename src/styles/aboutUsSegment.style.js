import styled from "styled-components"

import LoyaltyIcon from "../images/loyalty-icon.svg"
import PassionIcon from "../images/passion-icon.svg"
import TransparencyIcon from "../images/transparency-icon.svg"
import IndependenceIcon from "../images/independence-icon.svg"  

export const AboutUsWrapper = styled.div`
background: transparent linear-gradient(253deg, #FFFFFF 0%, #E2E2E2 100%) 0% 0% no-repeat padding-box;
opacity: 1;
height: 100vh;
width: 100vh;
max-width: 1920px;
display: flex;
`
export const IconLoyalty = styled.div`
    background-image: url(${LoyaltyIcon});
    background-size: 100%;
    height: 50px;
    width: 50px;
`
export const IconPassion = styled.div`
    background-image: url(${PassionIcon});
    background-size: 100%;
    height: 45px;
    width: 50px;
`
export const IconTransparency = styled.div`
    background-image: url(${TransparencyIcon});
    background-size: 100%;
    height: 50px;
    width: 50px;
`
export const IconIndependence = styled.div`
    background-image: url(${IndependenceIcon});
    background-size: 100%;
    height: 50px;
    width: 50px;
`
export const HeaderDiv = styled.div`
    height: 5vh;
    width: 100vh;
    padding-top: 350px;
    padding: 60px 100px;
`
export const H1 = styled.h1`
    color: #38004F;
    font: normal normal 600 45px/57px Nunito;
    opacity: 1;
`
export const DivIcon = styled.div`
    height: 5vh;
    width: 100vh;
    background-position: center;
    padding-top: 350px;
    float: left;
`
export const IconName = styled.h3`
    color: #38004F;
    text-align: center;
    font: normal normal 800 35px/44px Nunito;
    opacity: 1;
`
export const TextContent = styled.h3`
    color: #38004F;
    text-align: center;
    font: normal normal normal 30px/31px Nunito;
    opacity: 1;
`

