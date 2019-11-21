import React from 'react';

const PageHeader = (props) => (
    <header>
        <div className="h1-wrapper"><h1>{props.header}</h1></div>
        {/* <span className="header-border"></span> */}
        <hr />
        {props.subheader && <div className="h2-wrapper"><h2>{props.subheader}</h2></div>}
    </header>
);

export default PageHeader;