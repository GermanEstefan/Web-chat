import styled from "styled-components";
import { propInputStyle } from "./interfaces";

export const StyledInputContainer = styled.div`
    display:flex;
    flex-direction:column;
    margin: 3px 0px 20px 0px;
`;

export const StyledInput = styled.input<propInputStyle>`
    border:none;
    border-radius:3px;
    border: ${props => props.error == null ? "1px solid black" : (props.error) ? "1px solid red" : "1px solid black"};
    
    &:focus{
        outline:none;
    }
`;