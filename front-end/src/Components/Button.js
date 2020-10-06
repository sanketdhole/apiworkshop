import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

function Button({children, type, onClick, link}) {
    let buttonStyle = "btn";
    let buttonSize = "btn";
    return (
        <>
        <Link to={link} className="button-link">
            <button onClick={onClick} type={type} className={`${buttonStyle} ${buttonSize}`}>
                {children}
            </button>
        </Link>
        </>
    )
}

export default Button;