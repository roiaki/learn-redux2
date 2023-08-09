import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import cartItems from "../cartItems";
import CartItem from "./CartItem";
import { clearCart } from "../features/cart/CartSlice";

const CartContainer = () => {
  const { amount, total, cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>買い物かご</h2>
          <h4 className="empty-cart">買い物かごに商品が入っていません</h4>
        </header>
       
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>買い物かご</h2>
        <h4 className="empty-cart"></h4>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            合計<span>{total}円</span>
          </h4>
        </div>
        <button
          className="btn clear-button"
          onClick={() => dispatch(clearCart())}
        >
          全削除
        </button>
    
      </footer>
    </section>
  );
}

export default CartContainer