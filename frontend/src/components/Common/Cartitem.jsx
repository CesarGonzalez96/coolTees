import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, increaseCart, decreaseCart } from '../../reducks/carts/operations';
import { getCarts, getSubtotal } from '../../reducks/carts/selectors';

export default function CartItem({cart,quantity,cartId}){
  const selector = useSelector(state => state);
  const dispatch = useDispatch();
  const carts = getCarts(selector);
  const subtotal = getSubtotal(selector);

  const clickPlusCart = () => {
      dispatch(increaseCart(cartId));
  };
  const clickMinusCart = () => {
      dispatch(decreaseCart(cartId));
  };

  useEffect(() => {
      console.log(cart.image);
      console.log(cart);
      console.log(carts);
  }, []);

  return (
     
<div class="cart-item">
            <div class="cart-name">
                <p3>{cart.name}</p3>
              </div>
            <div class="cart-amount">
                <p3>{quantity}</p3>
            </div>
            <div class="cart-price">
                <p3>$ {cart.price}</p3>
            </div>
            <button class="number">
                <span id="minus" onClick={clickMinusCart}>
                    －
                </span>
                <span id="count">{quantity}</span>
                <span id="plus" onClick={clickPlusCart}>
                    +
                </span>
            </button>
        </div>
  )
}
