import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './model.scss';

const Model = props => {

    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(props.active);
    }, [props.active]);

    return (
        <div id={props.id} className={`modal ${active ? 'active' : ''}`}>
            {props.children}
        </div>
    );
}

Model.propTypes = {
    active: PropTypes.bool,
    id: PropTypes.string
}

export const ModelContent = props => {

    const contentRef = useRef(null);

    const closeModel = () => {
        contentRef.current.parentNode.classList.remove('active');
        if (props.onClose) props.onClose();
    }

    return (
        <div ref={contentRef} className="modal__content">
            {props.children}
            <div className="modal__content__close" onClick={closeModel}>
                <i className="bx bx-x"></i>
            </div>
        </div>
    )
}

ModelContent.propTypes = {
    onClose: PropTypes.func
}

export default Model;
