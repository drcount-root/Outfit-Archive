import styled from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  AddToCartButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.216);
  background-image: linear-gradient(120deg, #ffffff 0%, #ffebebc7 100%);
  top: 90px;
  right: 40px;
  z-index: 5;
  border-radius: 9px;
  backdrop-filter: blur(14px);
  font-family: sans-serif;
  font-size: 14px;

  // if any of these 3 buttons get nested inside the CartDropdownContainer, then apply the style

  ${BaseButton}, ${GoogleSignInButton}, ${AddToCartButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 268px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

// Scss

// .cart-dropdown-container {
//   position: absolute;
//   width: 240px;
//   height: 340px;
//   display: flex;
//   flex-direction: column;
//   padding: 10px;
//   border: 1px solid rgba(0, 0, 0, 0.216);
//   // background-color: rgba(207, 169, 240, 0.352);
//   // background-color: rgba(254, 254, 254, 0.964);
//   background-image: linear-gradient(120deg, #ffffff 0%, #ffebebc7 100%);
//   top: 90px;
//   right: 40px;
//   z-index: 5;
//   border-radius: 9px;
//   backdrop-filter: blur(14px);
//   font-family: sans-serif;
//   font-size: 14px;

//   &:hover {
//     // cart dropdown card animation
//   }

//   .empty-message {
//     font-size: 18px;
//     margin: 50px auto;
//   }

//   .cart-items {
//     height: 268px;
//     display: flex;
//     flex-direction: column;
//     // overflow: scroll;
//     overflow-y: scroll;
//     &::-webkit-scrollbar {
//       width: 0px;
//     }
//   }

//   button {
//     margin-top: auto;
//   }
// }
