import styled from 'styled-components';

export const FormContainer = styled.form`
  padding: 20px;
  background-color: white;
  display: flex;
  justify-content: flex-start;
`;

export const Input = styled.input`
  margin-right: 10px;
  flex: 1;
  border: 1px solid #ccc;
  padding: 5px;
  height: 40px;
`;

export const Button = styled.button`
  max-width: 150px;
  min-width: 113px;
  height: 30px;
  background-color: teal;
  color: white;
  border: none;
  height: 40px;
  transition: 1s;

  &:hover {
    transform: scale(1.05);
    background-color: rgb(17, 174, 174);
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`;