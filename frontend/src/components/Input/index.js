import React from "react";
import styled from "styled-components";

const InputStyled = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  line-height: 2;
  color: #004365;
  font-weight: normal;
  border: 1px solid #004365;
  border-radius: 3px;
`;

const Input = props => <InputStyled {...props} />;

export default Input;
