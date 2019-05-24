import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  position: relative;
  display: block;
  font-size: 14px;
  font-weight: normal;
  color: #e62429;
`;

const ErrorMessage = ({ children, ...props }) => (
  <StyledSpan aria-live="polite" {...props}>
    {children}
  </StyledSpan>
);

export default ErrorMessage;
