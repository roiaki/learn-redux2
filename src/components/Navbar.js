import React from 'react';
import { useSelector } from "react-redux";
import { CartIcon } from "../HeroIcons";

const Navbar = () => {
  const {amount, total } = useSelector((store) => store.cart);
  // console.log(amount, total);


  return (
    <nav>
      <div className="nav-center">
        <h3>Redux shopping</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar