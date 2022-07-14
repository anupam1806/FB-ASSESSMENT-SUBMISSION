import React, { useState } from 'react';
import './index.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../Login/firebase_config';
import { Link } from 'react-router-dom';

const Register = () => {

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')

    const register = async () => {
        try{
        const user =  await createUserWithEmailAndPassword(auth,email,password)
        console.log(user)
        }
        catch(error){
            console.log(error.message);
        }
    }

    return(
        <div>
        <div id="login">
        <div className="container">
            <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                    <div id="login-box" className="col-md-12">
                        <form id="login-form" className="form" action="/dashboard" method="post">
                            <h3 className="text-center text-info">Create Account</h3>
                            <div className="form-group">
                                <label className="text-info">Name</label><br/>
                                <input type="text" name="name" id="username" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label for="username" className="text-info">Email</label><br/>
                                <input type="text" onChange={(event) => {setEmail(event.target.value)}} name="email"id="username" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label for="password" class="text-info">Password</label><br/>
                                <input type="password" onChange={(event) => {setPassword(event.target.value)}} name="password" id="password" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input id="remember-me" name="remember-me" type="checkbox" />
                                <label for="remember-me" className="text-info"><span>Remember me</span> 
                                </label><br/>
                                <Link to="/facebook">
                                <button onClick={register} type="submit" name="submit" className="btn btn-info btn-md">
                                    Sign Up
                                </button>
                                </Link>
                            </div>
                            </form>
                            <div id="register-link" className="down">
                                <label class="text-info">Already have an account?</label>
                                <Link to="/signin">
                                    <a href="*" className="info">Login</a>
                                </Link>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default Register;