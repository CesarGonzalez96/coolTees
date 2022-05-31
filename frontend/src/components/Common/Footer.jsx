import React, { useEffect, useState } from 'react';
import logo from '../../assets/img/cooltees-logo.png'

export default function Footer({price}) {
  let pageUrl = window.location.toString();
  const [showCheckoutButton, setShowCheckoutButton] = useState(true);
  const key = localStorage.getItem('LOGIN_USER_KEY');

  useEffect(() => {
      if (pageUrl.includes('cart')) {
          setShowCheckoutButton(false);
      }
  }, []);

  return (
      <>    
      
      <footer>
      {key !== null && (
                <div class="foot">
                    <h2>Subtotal: ${price}</h2>
                    {showCheckoutButton ? (
                        <a href="/cart">
                            <button class="btn">Check Your Cart</button>
                        </a>
                    ) : (
                        <a href="/Shipping">
                            <button class="btn">Checkout</button>
                        </a>
                    )}
                </div>
            )}
    <img class="footer" src={logo}/>
    <h3 class="adds">
      Premium Quality soft drinks, hot drinks, sodas & energy drinks at the
      best and most affordable price.<br />
      We have a new offer every 365 days.
    </h3>
    <h2 class="contact">
      Contact <br />E-maildrink@cooltees.com|Hotline:1(202)555-0165
    </h2>
    <h5 class="copyright">
    Design by Cesar Gonzalez - © 2022. ALL RIGHTS RESERVED.
  </h5>
  </footer>



</>

  )
}
