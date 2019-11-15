import React from 'react';

const PageHeader = (props) => (
    <header>
        <h1>{props.header}</h1>
        {props.subheader && <h2>{props.subheader}</h2>}
    </header>
);

export default PageHeader;