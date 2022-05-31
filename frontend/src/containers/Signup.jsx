import React, { useState } from 'react'
import Home from './Home'
import { useDispatch } from 'react-redux'
import { signUp } from '../reducks/users/operations'
import { push } from 'connected-react-router'


export default function Signup() {
  const dispatch = useDispatch();

  const [user_name, setUserName] = useState(''), 
  [email, setEmail] = useState(''), 
  [password, setPassword] = useState('');

  const inputUserName = event => {
    setUserName(event.target.value);
  };

  const inputEmail = event => {
    setEmail(event.target.value);
  };

  const inputPassword = event => {
    setPassword(event.target.value);
  };

  const signUpButton = () => {
    let params = {
      user_name:user_name,
      email:email,
      password:password,
    }
    dispatch(signUp(params));
    dispatch(push('/signin'))
  };

  return (

    <>
    <Home/>

      <section class="signinpage">
      <form action="Signup" class="signup" >
        <h2>Create an account and discover the benefits</h2>
        <label for="username"></label> <br />
        <input
          type="text"
          placeholder="Username"
          onChange={inputUserName}
          id="username"
          name="username"
          value={user_name} 
          required/>
          <br/>

        <label for="email"></label><br />
        <input
          type="email"
          placeholder="Email"
          onChange={inputEmail}
          id="email"
          name="email"
          value={email}
        /><br />

        <label for="password"></label><br />
        <input
          type="password"
          onChange={inputPassword}
          placeholder="Password"
          id="password"
          name="password"
          value={password}
        />
        <br />
        <label for="remember" id="remember" value=""
          >I agree to the Google terms of service and Privacy Policy </label>
        <input type="checkbox" required id="remember" name="checkbox" />
        <br /><br />
        <button  onClick={signUpButton}>Sign up</button><br />
        <h5>
        <a href='/signin'>Already a member?</a>
          </h5> 
      </form>
    </section>

    </>
  )
}
