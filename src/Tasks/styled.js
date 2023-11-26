import styled, { css } from "styled-components";

export const List = styled.ul`
    padding: 20px;
    background-color: white;
    margin-top: 0;
    list-style: none;
`;

export const Item = styled.li`
 display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 8px;
  border-bottom: 2px solid #e9e7e7;

  ${({hidden}) => hidden && css`
  display: none;
  `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
border: none;
color: white;
width: 30px;
height: 30px;
padding: 0;
transition: background 0.3s;

${({toggleDone}) => toggleDone && css`
    background: hsl(120, 61%, 34%);
    &:hover {
        background: hsl(120, 61%, 39%);
    }

`}

${({remove}) => remove && css`
background: hsl(348, 61%, 47%);
&:hover {
        background: hsl(120, 61%, 52%);
    }
`}
 
`;