import React from 'react';
import { array, func } from 'prop-types';

const Button = ({ children, onClick }) => (
    <button className="eg-button" onClick={onClick}>{children}</button>
);


Button.propTypes = {
    children: array,
    onClick: func
}

export default Button;