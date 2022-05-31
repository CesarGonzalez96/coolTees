import React, { useEffect, useState } from 'react'
import { fetchItems } from '../reducks/items/operations'
import { fetchCarts } from '../reducks/carts/operations'
import { getCarts } from '../reducks/carts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import {getUser } from '../reducks/users/selectors'
import { getItems } from '../reducks/items/selectors';
import searchIcon from '../assets/img/search-icon.png'
import shoppingIcon from '../assets/img/shopping-cart.png'
import userIcon from '../assets/img/user.png'
import Cartitem from '../components/Common/Cartitem';

  export default function Cart() {
  const selector = useSelector(state => state);
  const dispatch = useDispatch();
  const carts = getCarts(selector);
  const user = getUser(selector);
  const items = getItems(selector);
  useEffect(() => {
    dispatch(fetchItems());
    dispatch(fetchCarts());
    console.log(carts);
  },[]);
  return (
      <>

 


    <section class="shoppingCart">
      <h1>Shopping Cart</h1>
      <div class="product-header">
        <div><h5 class="header-info">Product</h5></div>
        <div><h5 class="header-info">Size</h5></div>
        <div><h5 class="header-info">Amount</h5></div>  
        <div><h5 class="header-info">Price</h5></div>
      </div>
      <div class="product-info">
      {
        (carts,
          items &&
            carts.map(cart => (
                                    <li>
                                        <Cartitem
                                            cart={cart.item}
                                            cartId={cart.id}
                                            key={cart.item.id}
                                            quantity={cart.quantity}
                                        />
                                    </li>
                                )))
                        }
        </div>
    </section>
    </>
  )
}
