import { useDispatch, useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleAction = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <div className="cart-title">Cart</div>
      <div className="cart-items">
        {cartItems?.map((item, index) => {
          return (
            <MenuItem
              key={item?.id + index}
              info={item}
              isCart={true}
              cartInd={index}
            />
          );
        })}
      </div>
      <div className="clear-card-btn">
        <button onClick={handleAction}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
