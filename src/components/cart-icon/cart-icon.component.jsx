import { useContext } from "react";

import cart from "../../assets/shopping-cart.png";

import { CartContext } from "../../contexts/cart.context";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon src={cart} />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;

// JSX

// import { useContext } from "react";

// import cart from "../../assets/shopping-cart.png";

// import { CartContext } from '../../contexts/cart.context';

// import "./cart-icon.styles.scss";

// const CartIcon = () => {
//   const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

//   const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

//   return (
//     <div className="cart-icon-container" onClick={toggleIsCartOpen}>
//       <img src={cart} className="shopping-icon" />
//       <span className="item-count">{cartCount}</span>
//     </div>
//   );
// };

// export default CartIcon;
