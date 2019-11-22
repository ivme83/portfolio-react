import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactBox = props => {
    return (
        <section className="contact_box_container">
            <FontAwesomeIcon
                className="contact_box_icon clickable"
                icon={['fab', props.icon]}
                border
                fixedWidth
                onClick={props.setActive}
            />
            <div className={`contact_box ${props.className}`}>
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
                    onClick={props.resetActive}
                />
            </div>
        </section>
    );
};

export default ContactBox;
