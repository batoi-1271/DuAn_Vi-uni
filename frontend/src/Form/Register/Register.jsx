import React, { useRef, useState } from 'react';

import './register.scss';
import logo from "../../assets/logo.png";


const Register = ({ show, close, title, children }) => {
const [username,SetUserName] = useState();
const [password,setPassWord] = useState();
const [gender,setGender] = useState(true);
const [email,setEmail] = useState();
const [lastName,setLastName] = useState();
const [firstName,setFirstName] = useState();
const [dob,setDob] = useState();
const handlRegister = () =>{
    const user = {username,password,gender,email,lastName,firstName,dob}
    var requestOptions = {
        method: 'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(user),
       
    };
    fetch("http://viuni.tk/auth/register",requestOptions)
    .then(response => {
       
            if(response.ok){
                return response.json()
            }
            throw Error(response.status)
        
    })
    .then(result => {
         alert(result)
     
    })
    .catch(error => {
        // console.log('error',error)
        alert(error)
        console.log(user)
    });
}
    return (
        
        <>
            {show ?

                <div className="modalContainerRegister" onClick={() => close()}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <header className="modal_header">
                            <img src={logo} alt="" />
                            <button className="close" onClick={() => close()}><i class="fal fa-times"></i></button>
                        </header>
                        <main className="modal_content">
                            <h2 className="title">Create your Account</h2>
                            <form action="" className='form'>
                                <div className="nameRegister">
                                    <input className='form-input' type="text" placeholder='UserName' onChange={(e) => SetUserName(e.target.value)}/>
                                </div>
                                <div className="passRegister">
                                    <input className='form-input' type="password" placeholder='Password' onChange={(e) => setPassWord(e.target.value)}/>
                                </div>
                                <div className="emailRegister">
                                    <input className='form-input' type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                               
                                <div className="passRegister">
                                    <input className='form-input' type="lastname" placeholder='lastname' onChange={(e) => setLastName(e.target.value)}/>
                                </div>
                                <div className="passRegister">
                                    <input className='form-input' type="firstname" placeholder='firstname' onChange={(e) => setFirstName(e.target.value)}/>
                                </div>
                              
                                <div className="text-date">
                                    <h4 >Date Of Birth</h4>
                                    <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
                                </div>
                                <div className="dateRegister">
                                    <input className='form-date' type="date"  onChange={(e) => setDob(e.target.value)}/>
                                </div>
                                <div className="nextRegister">
                                    <input className='btnNext' type="button" value="Next" onClick={handlRegister} />
                                </div>
                            </form>
                        </main>
                    </div>
                </div>

                : null}
        </>
    );
}

export default Register;