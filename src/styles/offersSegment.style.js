import styled from "styled-components" 

export const OurOffersWrapper = styled.div`
    background: transparent linear-gradient(267deg, #5D1C7B 0%, #371047 100%) 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 100px 0px;
    height: 100vh;
    width: 100vw;
    max-width: 100vw;
    display: flex;
    flex-direction: column;

    @media (max-width: 800px) {
        height: auto;
    }
`
export const HeaderDiv = styled.div`
    height: 5vh;
    width: 100;
    padding: 60px 100px;

    @media (max-width: 800px) {
        height: auto;
        padding: 60px 100px;
    }
`
export const H1 = styled.h1`
    color: #E2E2E2;
    font: normal normal 600 45px/57px Nunito;
    opacity: 1;
    
    @media (max-width: 800px) {
        font: normal normal 600 30px/43px Nunito;
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
        padding: 30px 50px;
    }
`
export const ColumnWrapper = styled.div`
    height: 100%;
    width: 300px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 800px) {
        padding: 0 20px;
    }
`
export const Title = styled.h4`
    padding-top: 10px;
    color: #E2E2E2;

    @media (max-width: 800px) {
        padding-top: 0px;
    }
`
export const Content = styled.p`
    text-align: center;
    color: #E2E2E2;
`

export const Icon = styled.div`
    background-image: ${props => `url(${props.iconImg})`};
    background-size: 90%;
    height: 60px;
    width: 60px;
    background-repeat: no-repeat;
    background-position: center;
    flex-direction: column;

    @media (max-width: 800px) {
        height: 40px;
        width: 40px;
        align-items: center;
    }
`