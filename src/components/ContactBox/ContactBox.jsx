import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactBox = props => {
    const [active, setActive] = useState(-1);
    return (
        <section className="contact_box_container">
            <FontAwesomeIcon
                className="contact_box_icon clickable"
                icon={['fab', props.icon]}
                border
                fixedWidth
                onClick={() => setActive(1)}
            />
            <div
                className={`contact_box
                ${
                    active === 1
                        ? 'contactGrowLeft'
                        : active === -1
                        ? 'hidden'
                        : 'contactShrinkRight'
                }
            `}
            >
                <a
                    className="contact_link"
                    target={props.target}
                    href={props.link}
                >
                    {props.linkName}
                </a>
                <FontAwesomeIcon
                    className={`clickable close_icon`}
                    icon="window-close"
                    fixedWidth
                    onClick={() => setActive(0)}
                />
            </div>
        </section>
    );
};

export default ContactBox;
