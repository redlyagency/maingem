import styled from "styled-components" 

export const AboutUsWrapper = styled.div`
    background: linear-gradient(253deg, #FFFFFF 0%, #E2E2E2 100%);
    opacity: 1;
    padding: 100px 0;
    height: 100vh;
    width: 100vw;
    max-width: 1920px;
    display: flex;
    flex-direction: column;

    @media (max-width: 800px) {
        height: auto;
    }
`
export const BodyWrapper = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: space-around;
    padding: 50px 80px;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`
export const ColumnWrapper = styled.div`
    height: 100%;
    width: 300px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Title = styled.h6`
    padding-top: 10px;
`
export const Content = styled.p`
    text-align: center;
`

export const Icon = styled.div`
    background-image: ${props => `url(${props.iconImg})`};
    background-size: 90%;
    height: 60px;
    width: 60px;
    background-repeat: no-repeat;
    background-position: center;
`
export const HeaderDiv = styled.div`
    height: 5vh;
    width: 100;
    padding-top: 350px;
    padding: 60px 100px;
`
export const H1 = styled.h1`
    color: #38004F;
    font: normal normal 600 45px/57px Nunito;
    opacity: 1;
    
    @media (max-width: 800px) {
        flex-direction: column;
    }
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

