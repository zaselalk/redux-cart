import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { setCartShowing } from "../../store/slices/cart.state";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const toggleCartHandler = () => {
    dispatch(setCartShowing());
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems.length}</span>
    </button>
  );
};

export default CartButton;
