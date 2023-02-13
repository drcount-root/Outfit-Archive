import styled from "styled-components";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 30px;
`;

export const ShoppingIcon = styled.img`
  width: 28px;
  height: 28px;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 12px;
  line-height: 0.7;
  font-family: sans-serif;
  font-weight: bold;
  bottom: 12px;
  color: rgb(243, 68, 20);
  justify-content: center;
`;

// Scss

// .cart-icon-container {
//   width: 45px;
//   height: 45px;
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   padding: 0 30px;

//   .shopping-icon {
//     width: 28px;
//     height: 28px;
//   }

//   .item-count {
//     position: absolute;
//     font-size: 12px;
//     line-height: 0.7;
//     font-family: sans-serif;
//     font-weight: bold;
//     bottom: 12px;
//     color: rgb(243, 68, 20);
//     justify-content: center;
//   }
// }
