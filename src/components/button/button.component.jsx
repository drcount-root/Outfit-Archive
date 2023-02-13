import {
  BaseButton,
  GoogleSignInButton,
  AddToCartButton,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
  addToCartButton: "addToCartButton",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.addToCartButton]: AddToCartButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;

// JSX with Scss

// import "./button.styles.scss";

// export const BUTTON_TYPE_CLASSES = {
//   google: "google-sign-in",
//   inverted: "inverted",
//   addToCartButton: "addToCartButton",
// };

// const Button = ({ children, buttonType, ...otherProps }) => {
//   return (
//     <button
//       className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
//       {...otherProps}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;
