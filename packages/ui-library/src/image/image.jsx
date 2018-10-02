import React from 'react';
import classnames from 'classnames';
import { number, string } from 'prop-types';

const Button = ({ className, height, src, width }) => (
    <img
        className={classnames('eg-image', className)}
        height={height}
        src={src}
        width={width}
    />
);


Button.propTypes = {
    className: string,
    height: number,
    src: string,
    width: number
};

export default Button;