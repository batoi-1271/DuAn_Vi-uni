import React from 'react';
import ProtoType from 'prop-types';

const Button = props => {
  return (
    <button 
        className={`btn ${props.className}`} 
        onclick = {props.onclick ? () => props.onClick() : null}>
        {props.children}
    </button>
  )
}

const OutlinButton = props => {
    return (
        <Button className = {`btn-outline ${props.className}`}
        onClick = {props.onClick ? () => props.onClick() : null}
        >
            {props.children}
        </Button>
    )
}

Button.prototype = {
    onclick: ProtoType.func
}
export default Button