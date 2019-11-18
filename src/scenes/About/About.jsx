import React from 'react';
import { PageHeader } from '../../components/index';

const About = () => (
    <div className="page-container animated fadeIn">
        <PageHeader
            header={"About Me"}
            subheader={"Roland Willis"}
        />
        <section>
            <p><span class="styled-letter">F</span>ull Stack web developer with an emphasis on clear and concise code and a passion for elegant solutions. Eager to learn new technologies and methodologies for personal growth and to find the best solutions. Confident, articulate, and professional ability to communicate to diverse audiences.</p>

            <p>For the previous 7 years I have been a Middle School Science and STEM teacher. I have taught 6th, 7th, and 8th grade Science in the Scottsdale and Littleton school districts. For the past 4 years, I have also been teaching a Lego Robotics course and a Mobile Technology course. I have graduated from the University of Arizona Coding Bootcamp run by Trilogy. This program teaches Full-Stack Development with the MERN stack with an emphasis on learning HTML, CSS, Javascript, Node.js, React.js, Mongoose, MySQL.</p>
        </section>
    </div>
);

export default About;
