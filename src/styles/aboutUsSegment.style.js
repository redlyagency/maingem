import styled from "styled-components"

import LoyaltyIcon from "../images/loyalty-icon.svg"   

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

export const H1 = styled.h1`
    color: #38004F;
    font-size: 45px;
    left: 150px;
    right: auto;
    height: 61px;
    font: normal normal 600 45px/57px Nunito;
    opacity: 1;

`