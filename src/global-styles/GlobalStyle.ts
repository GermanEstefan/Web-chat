import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    i{
        cursor: pointer;
    }
    button{
        border:none;
        border:1px solid black;
        border-radius:3px;
        background-color:transparent;
        cursor:pointer;
        padding:5px 0px 5px 0px;
    }
`;

export default GlobalStyle;