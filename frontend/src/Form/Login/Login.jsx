import React, { useState } from 'react';
import bgLogin from "../../assets/bgLogin.jpg";
import logo from "../../assets/logo.png";
import Register from '../Register/Register';
import "./login.scss";
import App from "../../Viuni";
const Login = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);


    const [modalForgot, setModalForgot] = useState(false);
    const toggleForgot = () => setModalForgot(!modalForgot);

const checkToken = localStorage.getItem("accessToken") != null 
const [user,setUser] = useState(); 
   const setParams = (event)=>{
        setUser({[event.target.name] : event.target.value})
    }
 
   const  login = () =>{
        var requestOptions = {
            method: 'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user),
            redirect:'follow'
        };
        fetch("http://viuni.tk/auth/login",requestOptions)
        .then(response => {
           
                if(response.ok){
                    return response.json()
                }
                throw Error(response.status)
            
        })
        .then(result => {
           
            localStorage.setItem("accessToken",result.jwtToken)
            window.location.reload(false);
    
        })
        .catch(error => {
            console.log('error',error)
            alert("UserName,password wrong")
            
        });

    }
    return ( 
        <>
         <div>
        { checkToken ? 
        <App /> :<div className='login'>
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
                        <input type="text" placeholder='Email or username' name = "username" onChange={setParams}/>
                    </div>
                    <div className="pass">
                        <input type="password" name = "password" onChange={setParams} />
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
                        {/* <input type="submit" value="SIGN IN" id='signin' onClick={this.login}/> */}
                        <button type='button' id='signin'  onClick={login} >SIGN IN</button>
                    </div>
                </form>
            </div>
            <div className="textSignup">
                    <p>Don't have an account? <a onClick={() => toggle()}>Sign up</a></p>
                    <Register show={modal} close={toggle}></Register>
                </div>
        </div>
    </div>
    } 
    </div>  
      </>
    );
}


export default Login;
