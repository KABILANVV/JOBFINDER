import React, { useState } from "react";
// import axios from "axios";

import "../Css/signup.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Button from '@material-ui/core/Button';


export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // set configurations
    const configuration = {
      method: "post",
      url: "https://nodejs-mongodb-auth-app.herokuapp.com/signup",
      data: {
        fullName,
        email,
        password,
      },
    };

    // Handle the submit logic (axios or any other method)
    // axios(configuration)
    //   .then(response => console.log(response.data))
    //   .catch(error => console.error(error));
  };

  return (
    <div id="login-box">
    <div className="middle">
    <h1>Sign up</h1>
    
    <input type="text" name="username" placeholder="Username" />
    <input type="text" name="email" placeholder="E-mail" />
    <input type="password" name="password" placeholder="Password" />
    <input type="password" name="password2" placeholder="Retype password" />
    <Button variant="contained" colorInherit
  sx={{
    borderRadius: 50
  }}
>
  SiGNUP
</Button>
  </div>
  
 
</div>
  );
}
