import React from 'react';
import { PageHeader, ContactBox } from '../../components/index';

const Contact = () => {
    return (
        <div className='page-container'>
            <PageHeader header={'Contact'} />
            <div className="animated fadeIn">
                <ContactBox
                    icon={'google'}
                    target={'_self'}
                    link={'mailto:rolandwillisiv@gmail.com'}
                    linkName={'rolandwillisiv@gmail.com'}
                />
                <ContactBox
                    icon={'github'}
                    target={'_blank'}
                    link={'https://github.com/ivme83/'}
                    linkName={'https://github.com/ivme83/'}
                />
                <ContactBox
                    icon={'linkedin'}
                    target={'_blank'}
                    link={'https://www.linkedin.com/in/roland-iv/'}
                    linkName={'https://www.linkedin.com/in/roland-iv/'}
                />
            </div>
        </div>
    );
};

export default Contact;
