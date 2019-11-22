import React, { Component } from 'react';
import { PageHeader, ContactBox } from '../../components/index';

class Contact extends Component {
    state = {
        prevActive: -1,
        currentActive: -1,
    };

    returnClasses = id => {
        const { currentActive, prevActive } = this.state;
        if ((currentActive === -1) || (currentActive !== id && prevActive !== id)) {
            return 'hidden';
        }

        if (currentActive === id) {
            return 'contactGrowLeft';
        }

        if (currentActive !== id && prevActive === id) {
            return 'contactShrinkRight';
        }
    };

    setActive = id => {
        const prevActive = this.state.currentActive;
        this.setState({
            prevActive,
            currentActive: id,
        });
    };

    render() {
        return (
            <div className="page-container">
                <PageHeader header={'Contact'} />
                <div className="animated fadeIn">
                    <ContactBox
                        icon={'google'}
                        target={'_self'}
                        setActive={() => this.setActive(1)}
                        resetActive={() => this.setActive(0)}
                        className={this.returnClasses(1)}
                        link={'mailto:rolandwillisiv@gmail.com'}
                        linkName={'rolandwillisiv@gmail.com'}
                    />
                    <ContactBox
                        icon={'github'}
                        target={'_blank'}
                        setActive={() => this.setActive(2)}
                        resetActive={() => this.setActive(0)}
                        className={this.returnClasses(2)}
                        link={'https://github.com/ivme83/'}
                        linkName={'https://github.com/ivme83/'}
                    />
                    <ContactBox
                        icon={'linkedin'}
                        target={'_blank'}
                        setActive={() => this.setActive(3)}
                        resetActive={() => this.setActive(0)}
                        className={this.returnClasses(3)}
                        link={'https://www.linkedin.com/in/roland-iv/'}
                        linkName={'https://www.linkedin.com/in/roland-iv/'}
                    />
                </div>
            </div>
        );
    }
}

export default Contact;
