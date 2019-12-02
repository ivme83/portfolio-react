import React, { Component } from 'react';
import moment from 'moment';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import { PageHeader } from '../../components/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import SurchX from '../../assets/images/surchx_logo.png';
import SurchXicon from '../../assets/images/surchx_icon.png';
// import YouTech from '../../assets/images/youtech_logo.png';
import YouTechicon from '../../assets/images/youtech_icon.png';

class Experience extends Component {
    state = {
        experience: [
            {
                name: 'SurchX',
                startDate: moment('2019-02-18'),
                endDate: moment(),
                jobTitle: 'Full Stack Developer',
                description: <span>Javascript|Ruby On Rails|Scala<br/>ReactJs|MongoDB|PostGreSQL</span>,
                link: 'https://surchx.com',
                background: 'rgb(0, 0, 200)',
                icon: (
                    <img
                        src={SurchXicon}
                        width="90%"
                        heigth="90%"
                        alt="SurchX Logo"
                    />
                ),
            },

            {
                name: 'YouTech',
                startDate: moment('2018-09-10'),
                endDate: moment('2018-12-01'),
                jobTitle: 'Full Stack Developer',
                description: <span>Javascript|PHP|Magento|WooCommerce<br/>ReactJs|MeteorJs|MongoDB|MySQL</span>,
                link: 'https://www.youtechagency.com/',
                background: 'rgb(0, 0, 200)',
                icon: (
                    <img
                        src={YouTechicon}
                        width="100%"
                        heigth="100%"
                        alt="YouTech Logo"
                    />
                ),
            },
            {
                name: 'University of Arizona',
                startDate: moment('2012-03-12'),
                endDate: moment('2018-06-05'),
                jobTitle: 'Full Stack Development Bootcamp',
                description: <span>HTML|CSS|Javascript<br/>MongoDB|ExpressJs|ReactJs|NodeJs</span>,
                link: 'https://bootcamp.ce.arizona.edu/coding/',
                background: 'rgb(200, 0, 0)',
                icon: <FontAwesomeIcon icon={'graduation-cap'} fixedWidth />,
            },
            {
                name: 'Copper Ridge School',
                startDate: moment('2012-07-01'),
                endDate: moment('2017-06-30'),
                jobTitle: 'Middle School Science Teacher',
                description: <span>Education|Communication|Collaboration|Formative Planning</span>,
                link: 'https://www.susd.org/index.php/schools/susd-k-8/copper-ridge-school',
                background: 'rgb(0, 200, 0)',
                icon: (
                    <FontAwesomeIcon icon={'chalkboard-teacher'} fixedWidth />
                ),
            },
            {
                name: 'Country Place School',
                startDate: moment('2010-08-01'),
                endDate: moment('2012-07-01'),
                jobTitle: 'Middle School Science Teacher',
                description: <span>Education|Communication|Collaboration|Formative Planning</span>,
                link: 'https://cpes.littletonaz.org/',
                background: 'rgb(0, 200, 0)',
                icon: (
                    <FontAwesomeIcon icon={'chalkboard-teacher'} fixedWidth />
                ),
            },
            {
                name: 'Scottsdale Community College',
                startDate: moment('2009-06-01'),
                endDate: moment('2010-05-31'),
                jobTitle: 'Scottsdale Teacher Education Partnership Program',
                // description: <span>HTML|CSS|Javascript<br/>MongoDB|ExpressJs|ReactJs|NodeJs</span>,
                link: 'https://www.scottsdalecc.edu/programs/education/step',
                background: 'rgb(200, 0, 0)',
                icon: <FontAwesomeIcon icon={'graduation-cap'} fixedWidth />,
            },
            {
                name: "Collin's College",
                startDate: moment('2004-05-01'),
                endDate: moment('2007-09-01'),
                jobTitle: 'Bachelor of Arts, Video Game Design',
                // description: 'This is a description.',
                background: 'rgb(200, 0, 0)',
                icon: <FontAwesomeIcon icon={'graduation-cap'} fixedWidth />,
            },
        ],
    };

    render() {
        const { experience } = this.state;

        return (
            <div className="page-container">
                <PageHeader
                    header={'Experience'}
                    // subheader={'Roland Willis'}
                />
                <VerticalTimeline>
                    {experience.map(exp => (
                        <VerticalTimelineElement
                            key={exp.startDate}
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                background: exp.background,
                                color: '#fff',
                            }}
                            contentArrowStyle={{
                                borderRight: `7px solid  ${exp.background}`,
                            }}
                            date={`${exp.startDate.format(
                                'MM-DD-YYYY'
                            )} - ${exp.endDate.format('MM-DD-YYYY')}`}
                            iconStyle={{
                                background: exp.background,
                                color: '#fff',
                            }}
                            icon={exp.icon}
                        >
                            <h3 className="vertical-timeline-element-title">
                                {exp.link ? <a href={exp.link} target='_blank' rel='noopener noreferrer'>{exp.name}</a> : exp.name}
                            </h3>
                            <h4 className="vertical-timeline-element-subtitle">
                                {exp.jobTitle}
                            </h4>
                            {exp.description && <p>{exp.description}</p>}
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
                {/* <section className='animated fadeIn'>
                    <p>
                        <span className='styled-letter'>F</span>ull Stack web
                        developer with an emphasis on clear and concise code and
                        a passion for elegant solutions. Eager to learn new
                        technologies and methodologies for personal growth and
                        to find the best solutions. Confident, articulate, and
                        professional ability to communicate to diverse
                        audiences.
                    </p>

                    <p>
                        For 7 years I have been a Middle School Science and STEM
                        teacher. I have taught 6th, 7th, and 8th grade Science
                        in the Scottsdale and Littleton school districts. For
                        the past 4 years, I have also been teaching a Lego
                        Robotics course and a Mobile Technology course. I have
                        graduated from the University of Arizona Coding Bootcamp
                        run by Trilogy. This program teaches Full-Stack
                        Development with the MERN stack with an emphasis on
                        learning HTML, CSS, Javascript, Node.js, React.js,
                        Mongoose, MySQL.
                    </p>
                </section> */}
            </div>
        );
    }
}

export default Experience;
