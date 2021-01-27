import React, { useState } from "react";
import { Button, ListGroup, Row, Col } from "react-bootstrap";
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import "../../App.css";

function Login() {
 
 const [email,setEmail]=useState('')
 const [pwd,setPwd]=useState('')
 const history = useHistory();

const handleSubmit=(e)=>{
  e.preventDefault();
  let user = {email, pwd}
  console.log(user)
      axios.post('http://localhost:4000/api/users/login', user)
      .then(res => {
        console.log(res.data)
        history.push('/home');
      })
      .catch(err=>console.log(err,'error'));
}

  return (
    <form class="form-style-7">
    <ul>
    <li>
    <label for="email">Email</label>
    <input type="email" name="email" maxlength="100"/>
    <span>Enter a valid email address</span>
    </li>
    <li>
    <label for="name">Password</label>
    <input type="text" name="name" maxlength="100"/>
    <span>Enter your password</span>
</li>
<li>
    <input type="submit" value="LOGIN" />
</li>
    </ul>
    </form>
  );
  }
export default Login;