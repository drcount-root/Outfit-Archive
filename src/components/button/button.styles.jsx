import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 40px;
  letter-spacing: 1px;
  line-height: 40px;
  padding: 0 10px 0 10px;
  font-size: 14px;
  background-color: rgba(229, 70, 35, 0.65);
  color: rgb(233, 233, 233);
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  &:hover {
    background-color: rgba(227, 49, 26, 0.4);
    color: white;
    transition: 0.5s;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: rgba(21, 102, 233, 0.75);
  color: white;

  &:hover {
    background-color: rgba(0, 98, 255, 0.5);
    border: none;
    transition: 0.5s;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const AddToCartButton = styled(BaseButton)`
  background-color: rgb(231, 77, 77);
  color: black;
  // border: 2px solid rgb(180, 180, 180);
  box-shadow: none;

  &:hover {
    background-color: black;
    color: white;
    border: none;
    box-shadow: none;
    // border: 2px solid rgb(180, 180, 180);
  }
`;

/* Converting Scss to Styled Component */

/*

.button-container {
  min-width: 165px;
  width: auto;
  height: 40px;
  letter-spacing: 1px;
  line-height: 40px;
  padding: 0 10px 0 10px;
  font-size: 14px;
  background-color: rgba(229, 70, 35, 0.65);
  color: rgb(233, 233, 233);
  text-transform: uppercase;
  // font-family: "Dancing Script", cursive;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 7px;
  // box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 1px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  &:hover {
    background-color: rgba(227, 49, 26, 0.4);
    color: white;
    // border: 1px solid black;
    transition: 0.5s;
  }

  &.google-sign-in {
    background-color: rgba(21, 102, 233, 0.75);
    color: white;

    &:hover {
      background-color: rgba(0, 98, 255, 0.5);
      border: none;
      transition: 0.5s;
    }
  }

  &.inverted {
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
  }

  &.addToCartButton {
    background-color: rgb(231, 77, 77);
    color: black;
    // border: 2px solid rgb(180, 180, 180);
    box-shadow: none;

    &:hover {
      background-color: black;
      color: white;
      border: none;
      box-shadow: none;
      // border: 2px solid rgb(180, 180, 180);
    }
  }
}

*/
