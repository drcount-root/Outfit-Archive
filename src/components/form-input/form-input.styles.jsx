import styled, { css } from "styled-components";

const subColor = "rgb(83, 83, 83)";
const mainColor = "black";

const shrinkLabelStyles = css`
  top: -20px;
  left: -2px;
  font-size: 13px;
  color: ${mainColor};
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 15px;
  top: 10px;
  transition: 300ms ease all;
  font-family: sans-serif;

  ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
  background: none;
  background-color: rgb(246, 246, 246);
  color: ${subColor};
  font-size: 18px;
  padding: 10px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 7px;
  margin: 15px 0;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  font-family: sans-serif;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles}
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 35px 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

