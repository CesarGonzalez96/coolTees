import React,{useEffect,useState} from 'react'
import { fetchItems } from '../reducks/items/operations';
import { getItems } from '../reducks/items/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarts } from '../reducks/carts/operations';
import banner from '../assets/img/web-banner.png'
import logo from '../assets/img/cooltees-logo.png'
import searchIcon from '../assets/img/search-icon.png'
import shoppingIcon from '../assets/img/shopping-cart.png'
import userIcon from '../assets/img/user.png'
import Item from '../components/Common/Item';

export default function Home() {
  const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const items = getItems(selector);

    useEffect(() => {
        dispatch(fetchItems());
        if (localStorage.getItem('LOGIN_USER_KEY')) {
            dispatch(fetchCarts());
            console.log(items);
        }
    }, []);
  return (
      <>
    <section class="back_ground">
    <img class="banner" src={banner} />
    <img class="logo" src={logo} />
    <div class="text">
      <h1>
        Cool Tees for <br />
        MEN & WOMEN
      </h1>
      <hr />
    </div>
    <nav class="nav_bar">
      <div class="row">
        <div class="icon-image" id="search-icon">
          <img src={searchIcon} />
        </div>
        <div class="icon-image" id="shopping-icon">
          <img src= {shoppingIcon}/>
        </div>
        <div class="icon-image" id="user-icon">
          <img src={userIcon} />
        </div>
      </div>
    </nav>
  </section>

  <section class="shop_content">
    <h2>Selected just for you!</h2>
    <div class="grid-container">
    <div class="grid-item">
      {items.results &&
        items.results.map(item => (
          <div className="shirt">
            <Item key={item.id} item={item} />
          </div>
          ))}
        </div>

    </div>
  </section>
</>
  )
}
