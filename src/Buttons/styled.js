import styled, { css } from "styled-components";

export const Buttons = styled.button`
 background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`; 

export const Changer = styled.button`
     background-color: white;
    border: none;
    color: teal;
    transition: 1s;
    &:hover {
        color: rgb(0, 193, 193);
    }
   
    `;