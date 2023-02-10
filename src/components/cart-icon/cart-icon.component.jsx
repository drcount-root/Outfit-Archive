import { useContext } from "react";

import cart from "../../assets/shopping-cart.png";

import { CartContext } from '../../contexts/cart.context';

import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <img src={cart} className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
