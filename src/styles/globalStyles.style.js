import { createGlobalStyle } from "styled-components"
import "@fontsource/nunito"

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: white;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow: hidden;
        height: 5000px;
        display: flex;
        justify-content: center;
        transition: 0.2s;
        font-family: "Nunito", sans-serif;
    }
    * {
        transition: 0.2s;
        scroll-behavior: smooth;
        font-family: "Nunito", sans-serif;
    }
`