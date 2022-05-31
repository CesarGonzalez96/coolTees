import React , {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import API from '../API';
import { getCarts, getSubtotal } from '../reducks/carts/selectors';
import { fetchCarts } from '../reducks/carts/operations';
import { addOrder } from '../reducks/order/operations';
import { push } from 'connected-react-router';

const api = new API();


export default function Shipping() {
const selector = useSelector(state => state);
const dispatch = useDispatch();

const subTotal = getSubtotal(selector);
const carts = getCarts(selector);

const [full_name, setFullName] = useState(''),
[phone, setPhone] = useState(''),
[address, setAddress] = useState(''),
[pincode, setPincode] = useState(''),
[apt, setApt] = useState(''),
[city, setCity] = useState(''),
[state, setState] = useState(''),
[totalitem, setTotalItem] = useState(0);

useEffect(() => {
  dispatch(fetchCarts());
})

useEffect(() => {
  let arr = [];
  if (carts != undefined && carts.length > 0){
    for (let key in carts){
      arr.push(carts[key].quantity);
    }
    let sum = arr.reduce(function (a,b){
      return a + b;
    },0);
    setTotalItem(sum)
  }
}, [carts]);

const inputFullName = e => {
  setFullName(e.target.value);
};

const inputPhoneNumber = e => {
  setPhone(e.target.value);
};

const inputAddress = e => {
  setAddress(e.target.value);
};

const inputPincode = e => {
  setPincode(e.target.value);
};

const inputApt = e => {
  setApt(e.target.value);
};

const inputCity = e => {
  setCity(e.target.value);
};

const inputState = e => {
  setState(e.state.value);
};

const orderButton = e => {
  let params = {
    total_price:subTotal,
    full_name:full_name,
    address_line1:address,
    address_line2:apt,
    city: city,
    state:state,
    postal_code:pincode,
    country: 'US',
    telephone:phone,
  };
  dispatch(addOrder(params));
  e.preventDefault();
  dispatch(push('/thankyou'))
}

  return (
      <>
  <section class="order-banner">
        <h1 class="banner-text">Order your items</h1>


      </section>

      <section class="order-details">
        <div class="order-static">
          <h3 class="order-header">Shipment Details</h3>
          <p3 class="order-text">Please check your details and confirm.</p3>
        </div>
        <div class="cart-item">
        {carts &&
            carts.map(cart => (
            <tr>
            <td class="td-item">{cart.item.name}</td>
            <td class="td-quantity">{cart.quantity}</td>
           <td class="td-price">{cart.item.price}</td>
           </tr>
          ))}
        </div>
        
        <hr/>
        <div class="total-cart">
        <tr class="border">
          <td id="total-price">Total Price</td>
          <td id="item-count">{totalitem}</td>
          <td id="subtotal">$ {subTotal}</td>
          </tr>
           
        </div>
        <hr/>
      </section>
      <section class="checkout-form">
        <form action="checkout" class="purchase">
            <p3 class="total-cart">Full Name</p3><br/>
            <label for="fullname"></label>
            <input type="text" onChange={inputFullName} placeholder="Enter recipient's full name" id="name" name="name" value="" />
            <br/>

            <p3 class="total-cart">Phone Number</p3><br/>
            <label for="phone"></label>
            <input type="text" onChange={inputPhoneNumber} id="phone" placeholder="Enter phone number" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
            <br/>

            <p3 class="total-cart">Street Address Or P.O Box</p3><br/>
            <label for="address"></label>
            <input type="text" onChange={inputAddress} placeholder="Enter recipient's address" id="address" name="address" value=""/>
            <br/>

            <p3 class="total-cart">Apt, Suite, Unit, Building, Floor, Etc</p3><br/>
            <label for="apt"></label>
            <input type="text" onChange={inputApt} placeholder="Enter recipient's apt, suite, unit, building, floor, etc" id="address2" name="address2" value=""/>
            <br/>

            <p3 class="total-cart">Postal Code</p3><br/>
            <label for="postalcode"></label>
            <input type="text" onChange={inputPincode} placeholder="Enter recipient's postal code" id="postalCode" pattern="[0-9]{5}"/>
            <br/>

            <p3 class="total-cart">City</p3><br/>
            <label for="city"></label>
            <input type="text" onChange={inputCity} placeholder="Enter recipient's city" id="city"/><br/>

            <p3 class="total-cart">State</p3><br/>
            <label for="state"></label>
            <input type="text" onChange={inputState} placeholder="Enter recipient's state" id="state"/><br/>

            <button class="order-button" onClick={orderButton} type="submit" value="Submit">Submit</button><br />
            
          </form>
      </section>
      
</>
  )
}
