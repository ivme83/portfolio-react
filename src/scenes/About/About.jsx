import React, { Component } from 'react';
import moment from 'moment';

import { PageHeader } from '../../components/index';

import SurchX from '../../assets/images/surchx_logo.png';
import YouTech from '../../assets/images/youtech_logo.png';

class About extends Component {
    state = {
        experience: [
            {
                name: 'Copper Ridge School',
                startDate: moment('2012-07-01'),
                endDate: moment('2017-06-30'),
            },
            {
                name: 'YouTech',
                startDate: moment('2018-09-10'),
                endDate: moment('2018-12-01'),
            },
            {
                name: 'SurchX',
                startDate: moment('2019-02-18'),
                endDate: moment(),
            },
        ],
    };

    render() {
        const { experience } = this.state;

        const startYear = experience[0].startDate.year();
        const endYear = experience[experience.length - 1].endDate.year();
        const yearWidth = 1/(endYear - startYear)*100;

        let yearArr = [startYear];
        for (let i = 1; i < (endYear - startYear + 1); i++) {
            yearArr.push(startYear + i);
        }

        // define gaps
        

        return (
            <div className='page-container'>
                <PageHeader
                    header={'About Me'}
                    // subheader={'Roland Willis'}
                />
                <div className='experience_timeline_container'>
                    {
                        yearArr.map(year => <div key={year} style={{width: `${yearWidth}%`}} className='experience_timeline_year'>{year}</div>)
                    }
                </div>
                {/* <section className='animated fadeIn'>
            <p><span className='styled-letter'>F</span>ull Stack web developer with an emphasis on clear and concise code and a passion for elegant solutions. Eager to learn new technologies and methodologies for personal growth and to find the best solutions. Confident, articulate, and professional ability to communicate to diverse audiences.</p>

            <p>For 7 years I have been a Middle School Science and STEM teacher. I have taught 6th, 7th, and 8th grade Science in the Scottsdale and Littleton school districts. For the past 4 years, I have also been teaching a Lego Robotics course and a Mobile Technology course. I have graduated from the University of Arizona Coding Bootcamp run by Trilogy. This program teaches Full-Stack Development with the MERN stack with an emphasis on learning HTML, CSS, Javascript, Node.js, React.js, Mongoose, MySQL.</p>
        </section> */}
            </div>
        );
    }
}

export default About;
