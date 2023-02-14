import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
    }
    
    body, html {
        width: 100vw;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;

        box-sizing: border-box;
        
        font-family: "Inter", sans-serif;
        background: #8D8986;
    }

    header {
        padding: 0px 45px;
        margin-bottom: 41px;

        width: calc(100% - 90px);
        height: 50px;

        display: flex;

        align-items: center;

        
    }
    
    :root {
        --background-color: #8D8986;
        --background-app: #000000;
    }
`;