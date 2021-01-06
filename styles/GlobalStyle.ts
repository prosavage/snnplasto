import { createGlobalStyle, ThemeProvider } from "styled-components";
import PropsTheme from "./theme/PropsTheme";

const GlobalStyle = createGlobalStyle`

    body {
        transition: 250ms all;
        color: ${(props: PropsTheme) => props.theme.color};
        background: ${(props: PropsTheme) => props.theme.background};
        padding: 0;
        margin: 0;

        overflow-x: hidden;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    * {
        box-sizing: border-box;
        margin: 0;
    }

    a {
        color: ${(props: PropsTheme) => props.theme.color};
        text-decoration: none;
    }

    p {
        font-size: 20px;
        line-height: 29px;
    }

    h1 {
        font-size: 70px;
        line-height: 65px;
    }

    input, textarea, select {
        border: 2px solid black;
        border-radius: 5px;
        padding: 10px 5px;
    }

`;

export default GlobalStyle;
