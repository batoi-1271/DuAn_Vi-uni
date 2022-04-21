import * as React from 'react';

import './register.scss';
import logo from "../../assets/logo.png";


const Register = ({ show, close, title, children }) => {
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
                                    <input className='form-input' type="text" placeholder='UserName' />
                                </div>
                                <div className="emailRegister">
                                    <input className='form-input' type="email" placeholder='Email' />
                                </div>
                                <div className="passRegister">
                                    <input className='form-input' type="password" placeholder='Password' />
                                </div>
                                <div className="comfirmRegister">
                                    <input className='form-input' type="password" placeholder='Re-enter password' />
                                </div>
                                <div className="text-date">
                                    <h4 >Date Of Birth</h4>
                                    <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
                                </div>
                                <div className="dateRegister">
                                    <input className='form-date' type="date" />
                                </div>
                                <div className="nextRegister">
                                    <input className='btnNext' type="submit" value="Next" />
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