import React, {useEffect} from 'react'
import { push } from 'connected-react-router'
import { useSelector, useDispatch } from 'react-redux';


export default function Thankyou() {
  const selector = useSelector(state => state);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('LOGIN_USER_KEY'));
  useEffect(() => {
      console.log(user);
  }, []);
  return (
      <>
  

    <section class="order-banner">
      <h1 class="banner-text">Thank you for ordering</h1>
    </section>
    <section class="thankyou-message">
      <p1 class="thankyou-text">
        Thank you for ordering.We received your request. Our staff will be
        contacting with you to tell you the next steps.
      </p1>
      <br/>
     <a href ="/">
     <button class="order-button" onClick={() => dispatchEvent(push('/'))}>
        Back to home</button>
     </a>
      <br />
    </section>
     
</>
  )
}
