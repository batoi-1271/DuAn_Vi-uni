import './forgotpass.scss';
import React, { useState } from 'react';
import logo from "../../assets/logo.png";
const ForgotPass = ({ show, close, title, children }) => {
    const [modalVerify, setModalVerify] = useState(false);
    const toggleVerify = () => setModalVerify(!modalVerify);
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
                            <h2 className="title">Find your vi-uni account</h2>
                            <form action="" className='formForgot'>
                                <div className="nameFormgot">
                                    <input className='form-inputFormgot' type="text" placeholder='Enter Your Emal Or Username' />
                                </div>
                                <div className="nextFormgot">
                                    <input onClick={() => toggleVerify()} className='btnNextFormgot' type="submit" value="Search" />
                                </div>
                            </form>
                        </main>
                    </div>
                </div>

                : null}
        </>
    );
}

export default ForgotPass;