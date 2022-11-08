import {createGlobalStyle} from "styled-components"

export const GlobalStyled = createGlobalStyle`

    // coisas de css que serão globais ao site como um todo
    html {
        font-family: 'Roboto', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`