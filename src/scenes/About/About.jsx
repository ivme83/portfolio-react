import React, { Component } from 'react';
import moment from 'moment';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { PageHeader } from '../../components/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SurchX from '../../assets/images/surchx_logo.png';
import SurchXicon from '../../assets/images/surchx_icon.png';
import YouTech from '../../assets/images/youtech_logo.png';
import YouTechicon from '../../assets/images/youtech_icon.png';

class About extends Component {
    state = {
        experience: [
            {
                name: 'SurchX',
                startDate: moment('2019-02-18'),
                endDate: moment(),
                jobTitle: 'Full Stack Developer',
                description: 'This is a description.',
                icon: <img src={SurchXicon} width='100%' heigth='100%' alt='SurchX Logo' />,
            },

            {
                name: 'YouTech',
                startDate: moment('2018-09-10'),
                endDate: moment('2018-12-01'),
                jobTitle: 'Full Stack Developer',
                description: 'This is a description.',
                icon: <img src={YouTechicon} width='100%' heigth='100%' alt='YouTech Logo' />,
            },
            {
                name: 'Copper Ridge School',
                startDate: moment('2012-07-01'),
                endDate: moment('2017-06-30'),
                jobTitle: 'Middle School Science Teacher',
                description: 'This is a description.',
                icon: <FontAwesomeIcon icon={'chalkboard-teacher'} />,
            },
            {
                name: 'Country Place School',
                startDate: moment('2010-08-01'),
                endDate: moment('2012-07-01'),
                jobTitle: 'Middle School Science Teacher',
                description: 'This is a description.',
                icon: <FontAwesomeIcon icon={'chalkboard-teacher'} />,
            },
        ],
    };

    render() {
        const { experience } = this.state;

        return (
            <div className='page-container'>
                <PageHeader
                    header={'About Me'}
                    // subheader={'Roland Willis'}
                />
                <VerticalTimeline
                // layout={'1-column'}
                >
                    {experience.map(exp => (
                        <VerticalTimelineElement
                            key={exp.startDate}
                            className='vertical-timeline-element--work'
                            contentStyle={{
                                background: 'rgb(33, 150, 243)',
                                color: '#fff',
                            }}
                            contentArrowStyle={{
                                borderRight: '7px solid  rgb(33, 150, 243)',
                            }}
                            date={`${exp.startDate.format(
                                'MM-DD-YYYY'
                            )} - ${exp.endDate.format('MM-DD-YYYY')}`}
                            iconStyle={{
                                background: 'rgb(33, 150, 243)',
                                color: '#fff',
                            }}
                            icon={exp.icon}
                            // icon={<FontAwesomeIcon icon={'book'} />}
                        >
                            <h3 className='vertical-timeline-element-title'>
                                {exp.name}
                            </h3>
                            <h4 className='vertical-timeline-element-subtitle'>
                                {exp.jobTitle}
                            </h4>
                            <p>{exp.description}</p>
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

export default About;
