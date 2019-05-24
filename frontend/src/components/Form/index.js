import React from "react";
import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  max-width: 100%;
  margin: 0 auto 50px;
  padding: 0 20px;
`;

const Form = props => <FormStyled {...props} />;

export default Form;
