import React from 'react';
import {useHistory } from "react-router-dom";

import './header.scss';

const Header = (props) => {
    const history = useHistory();
    return (
        <div className="Account__header">
            <button type="button" onClick={history.goBack}>
                <i class="fas fa-arrow-left"></i>
            </button>
            <h2>{props.title}</h2>
        </div>
    )
}

export default Header;

