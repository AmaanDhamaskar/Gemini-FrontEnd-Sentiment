import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import "./Login.css"

import { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";


const Login = (props) => {

    const [credentials, setCredentials] = useState({email:"", password:""});
    let history = useNavigate();
    

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            //save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            props.showAlert("Loggedin successfully", "success");
            history('/');
        }else{
            props.showAlert("Invalid Credentials", "danger");
        }
    };


    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

  return (

    <div className="login">
			<div className="nav">
				<p>Multilingual Sentiment Analysis Using Deep Learning</p>
			</div>
			<div className="login-container">
						<div className="greet">
							<p>
								<span>Welcome!</span> Please Login To Continue
							</p>
							{/* <p>Please Login to continue</p> */}
						</div>
                            <form className='cards' onSubmit={handleSubmit}>
                                <div className="card">
                                    <div className="card-items">
                                    <div className='card-item'>
                                    <label htmlFor="email" className="form-label">Username: </label>
                                    <input type="email" className="form-control" id="email" value={credentials.email} name='email' onChange={onChange} aria-describedby="emailHelp" placeholder='Enter Username Here'/>
                                    </div>
                                    <br/>
                                    <div className='card-item'>
                                    <label htmlFor="password" className="form-label">Password: </label>
                                    <input type="password" className="form-control" value={credentials.password} name='password' onChange={onChange} id="password" placeholder='Enter Password Here'/>
                                    </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
			            </div>
		</div>
  )
  }

export default Login