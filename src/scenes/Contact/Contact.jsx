import React, { useState } from 'react';
import { PageHeader } from '../../components/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const contactLinks = [
    "",
    "rolandwillisiv@gmail.com",
    "https://github.com/ivme83/",
    "https://www.linkedin.com/in/roland-iv/"
];

const Contact = () => {
    const [active, setActive] = useState(0);

    return (
        <div className="page-container">
            <PageHeader header={'Contact'} />
            <div className="animated fadeIn">
                <section className="contact-icon_container">
                    <FontAwesomeIcon
                        className={`contact-icon ${
                            [0, 1].includes(active)
                                ? 'animated fadeIn'
                                : 'hidden'
                        }`}
                        icon={['fab', 'google']}
                        border
                        fixedWidth
                        onClick={() => setActive(1)}
                    />
                    <FontAwesomeIcon
                        className={`contact-icon ${
                            [0, 2].includes(active)
                                ? 'animated fadeIn'
                                : 'hidden'
                        }`}
                        icon={['fab', 'github']}
                        border
                        fixedWidth
                        onClick={() => setActive(2)}
                    />
                    <FontAwesomeIcon
                        className={`contact-icon ${
                            [0, 3].includes(active)
                                ? 'animated fadeIn'
                                : 'hidden'
                        }`}
                        icon={['fab', 'linkedin-in']}
                        border
                        fixedWidth
                        onClick={() => setActive(3)}
                    />
                    <div
                        className={`contact_box ${
                            [1, 2, 3].includes(active)
                                ? 'contactGrowLeft'
                                : 'contactShrinkRight'
                        }`}
                    >
                        <a
                            className="contact_link"
                            target={active === 1 ? '_self' : '_blank'}
                            href={active === 1 ? `mailto:${contactLinks[active]}` : contactLinks[active]}
                        >
                            {contactLinks[active]}
                        </a>
                        <FontAwesomeIcon
                            className={`clickable close_icon`}
                            icon="window-close"
                            fixedWidth
                            onClick={() => setActive(0)}
                        />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Contact;
