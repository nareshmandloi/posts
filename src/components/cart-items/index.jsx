import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../card";
import "./style.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState(
    useSelector((state) => state.cartItems)
  );

  return (
    <div className="">
      <h3 className="title">Cart</h3>
      {cartItems &&
        cartItems.length &&
        cartItems.map((post) => (
          <Card key={post.id} post={post} onCart="true" />
        ))}
    </div>
  );
};

export default Cart;
