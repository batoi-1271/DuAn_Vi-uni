import React, { useState, useEffect } from 'react';

import './verify.scss';  
import logo from "../../assets/logo.png";
import Count from '../countDown/Count';


const Verify = ({ show, close, title, children, hide }) => {
    return ( 
        
        <>
            {show ?

                <div className="modalContainer_Verify" onClick={() => close()}>
                    <div className="modalVerify" onClick={(e) => e.stopPropagation()}>
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
                                
                                <div>
                                    <h4>You can request a new code later <Count seconds={30}/></h4>
                                </div>
                                <div className="nextRegister">
                                    <input className='btnNext' type="button" value="Next"/>
                                </div>
                            </form>
                        </main>
                    </div>
                </div>
                : null}
        </>
    );
}

export default Verify;