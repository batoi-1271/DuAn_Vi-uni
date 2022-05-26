import React from 'react';
import {Link, useHistory } from "react-router-dom";
import Profile from '../../../../Profile/Profile';

import './account.scss';
const Items = (props) => {
    const history = useHistory();
    return (
        <div className="Items">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <p>{props.content1}<Link to={props.href}>{props.span}</Link></p>
        </div>
    );
};

export default Items;

