import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {CartDropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler} buttonType='addToCartButton'>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;

// import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';

// import { CartContext } from '../../contexts/cart.context';

// import Button from '../button/button.component';
// import CartItem from '../cart-item/cart-item.component';

// import './cart-dropdown.styles.scss';

// const CartDropdown = () => {
//   const { cartItems } = useContext(CartContext);
//   const navigate = useNavigate()

//   const goToCheckoutHandler = () => {
//     navigate('/checkout');
//   }

//   return (
//     <div className='cart-dropdown-container'>
//       <div className='cart-items'>
//         {cartItems.length ? (
//           cartItems.map((cartItem) => (
//             <CartItem key={cartItem.id} cartItem={cartItem} />
//           ))
//         ) : (
//           <span className='empty-message'>Your cart is empty</span>
//         )}
//       </div>
//       <Button onClick={goToCheckoutHandler} buttonType='addToCartButton'>GO TO CHECKOUT</Button>
//     </div>
//   );
// };

// export default CartDropdown;