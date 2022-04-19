import React from 'react'
import bgLogin from "../../assets/bgLogin.jpg";
import logo from "../../assets/logo.png";

import "./login.scss";
const Login = () => {
    return (
        <div className='login'>
            <div className='imgLogin'>
                <img src={bgLogin} alt="" />
            </div>
            <div className='formLogin'>
                <div className='logoLogin'>
                    <img src={logo} id="logo" />
                </div>
                <div className="heading">
                    <h1>Happening now</h1>
                    <h3>Join Vi-uni today.</h3>
                </div>
                <div className="form">
                    <form action="">
                        <div className="username">
                            <input type="text" placeholder='Email or username' />
                        </div>
                        <div className="pass">
                            <input type="password" placeholder='Password' />
                        </div>
                        <div className='afterInput'>
                            <div className="remember">
                                <label class="form-control">
                                    <input type="checkbox" name="checkbox" />
                                    Remember this device
                                </label>
                            </div>
                            <div className="forgotPass">
                                <a href="#">Forgot password?</a>
                            </div>
                        </div>
                        <div className="text">
                            <p>By signing in, you agree to the <a href='#'>Terms of Service</a> and <a href='#'>Privacy Policy</a>, including <a href='#'>Cookie Use</a>.</p>
                        </div>
                        <div className="btnLogin">
                            <input type="submit" value="SIGN IN" id='signin'/>
                        </div>
                    </form>
                </div>
                <div className="textSignup">
                    <p>Don't have an account? <a href='#'>Sign up</a></p>
                </div>
            </div>
        </div>
    )
}

export default Login