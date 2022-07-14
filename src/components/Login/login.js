import React,{useState} from 'react';
import './index.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../Login/firebase_config';
import { Link } from 'react-router-dom';

const Login = () => {

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')

    const login = async () => {
        try{
        const user =  await signInWithEmailAndPassword(auth,email,password)
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
                            <h3 className="text-center text-info">Login to your account</h3><br/>
                            <div className="form-group">
                                <label for="username" className="text-info">Email</label><br/>
                                <input type="text" name="username" onChange={(event) => {setEmail(event.target.value)}} id="username" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label for="password" class="text-info">Password</label><br/>
                                <input type="password" name="password" onChange={(event) => {setPassword(event.target.value)}}  id="password" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input id="remember-me" name="remember-me" type="checkbox" />
                                <label for="remember-me" className="text-info"><span>Remember me</span> 
                                </label><br/>
                                <Link to="/facebook">
                                <button onClick={login} type="submit" name="submit" className="btn btn-info btn-md">
                                    Login
                                </button>
                                </Link>
                            </div>
                            </form>
                            <div id="register-link" className="down">
                                <label class="text-info">New to myApp?</label>
                                <Link to="/">
                                    <a href="*" className="info">Login</a>
                                </Link>
                                <a href="*" className="info">Login</a>
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default Login;