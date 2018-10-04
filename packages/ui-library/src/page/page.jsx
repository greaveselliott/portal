import React from 'react';
import { any, arrayOf, string } from 'prop-types';
import classnames from 'classnames';

const Page = ({ children, className, title }) => (
  <div className={classnames('eg-page', className)}>
    <h1 className="eg-page__title">{title}</h1>
    <main className="eg-page__body">{children}</main>
  </div>
);

Page.defaultProps = {
  className: undefined
};

Page.propTypes = {
  children: arrayOf(any).isRequired,
  className: string,
  title: string.isRequired
};

export default Page;
