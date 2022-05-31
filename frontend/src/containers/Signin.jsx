import React, { useState }from 'react'
import { useDispatch } from 'react-redux'
import { signIn } from '../reducks/users/operations'
import Home from './Home'
import { push } from 'connected-react-router'



export default function Signin() {
 
  const dispatch = useDispatch();
 
  const [email, setEmail] = useState(''), [password, setPassword] = useState('');

  const inputEmail = event => {
    setEmail(event.target.value);
  };
  
  const inputPassword = event => {
    setPassword(event.target.value);
  };

  const signInButton = () => {
    dispatch(signIn(email,password));
    setEmail('');
    setPassword('');
  };

  return (
      <>
      <Home />

      <section class="login">
      <form action="login" class="signup">
        <h2>Log In</h2>
        <p2>Please type in your info to log in.</p2><br/>
        <label for="email"></label><br />
        <input type="email" placeholder="E-mail" onChange={inputEmail} id="email" name="email" value={email} /><br />

        <label for="password"></label><br />
        <input
        placeholder="Password"
          type="password"
          id="password"
          onChange={inputPassword}
          name="password"
          value={password}/>
          <br/>

          <label for="remember" id="remember" value="">Keep me signed in</label>
          <input type="checkbox" id="remember" name="checkbox" />
          <h4>Forgot password?</h4>  
          <br /><br />

        <button type="submit" onClick={signInButton} value="Submit">Sign in</button>
        <h5>
        Not a member yet?
          </h5> 
        <h5><a href='/signup'>Sign up</a></h5>
        
      </form>
    </section>
   
</>

  )
}
