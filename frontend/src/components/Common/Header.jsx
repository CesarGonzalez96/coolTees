import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import searchIcon from '../../assets/img/search-icon.png'
import shoppingIcon from '../../assets/img/shopping-cart.png'
import userIcon from '../../assets/img/user-icon.jpg'
import logo from '../../assets/img/cooltees-logo.png'
import { signOut } from '../../reducks/users/operations'
import { push } from 'connected-react-router'

export default function Header() {
  const dispatch = useDispatch();
  const key = localStorage.getItem('LOGIN_USER_KEY');
  const [checkUser, setCheckUser] = useState(false);

  const signOutButton = () => {
      dispatch(signOut());
      setCheckUser(false);
      dispatch(push('/signin'));
  };

  useEffect(() => {
      if (key !== null) {
          setCheckUser(true);
      }
  }, [key]);

  return (
    <>
    <section class="back_ground">
    
    <img class="logo" src={logo} />
    
    <nav class="nav_bar">
      <div class="row">
        <div class="icon-image" id="search-icon">
          <img src={searchIcon} />
        </div>
        <div class="icon-image" id="shopping-icon">
          <img src= {shoppingIcon}/>
        </div>
        <div onClick={signOutButton} class="icon-image" id="user-icon">
          <img src={userIcon} />
        </div>
      </div>
    </nav>

    
  </section>
  </>
  )
}
