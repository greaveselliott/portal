import React from 'react';
import classnames from 'classnames';
import { number, string } from 'prop-types';

import './image.scss';

const Image = ({ alt, className, src }) => (
  <div className={classnames('eg-image', className)}>
    <img className="eg-image__element" alt={alt} src={src} />
  </div>
);

Image.defaultProps = {
  height: undefined,
  width: undefined
};

Image.propTypes = {
  alt: string.isRequired,
  className: string.isRequired,
  height: number,
  src: string.isRequired,
  width: number
};

export default Image;
