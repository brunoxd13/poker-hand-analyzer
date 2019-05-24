import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  height: 50px;
  border: 0;
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
  background-color: #004365;
  color: #fff;

  :disabled {
    opacity: 0.6;
    cursor: default;
  }
`;

const Button = ({ children, ...props }) => (
  <ButtonStyled {...props}> {children} </ButtonStyled>
);

export default Button;
