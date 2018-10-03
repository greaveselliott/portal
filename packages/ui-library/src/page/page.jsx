import React from 'react';

const Page = ({ children, title }) => (
    <section className="eg-page">
        <header className="eg-page__header"><h1>{ title }</h1></header>
        {children}
    </section>
);

export default Page;