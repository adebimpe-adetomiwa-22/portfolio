import React from 'react';
import profileImage from '../assets/images/profile.jpg';

const About = () => {
    return (
        <section className='about section' id='about'>
            <div className='container'>
                <h3 className='about-title subtitle'>About Me</h3>
                <img src={profileImage} className='about-image' />
                <p className='about-description'>
                    I&apos;m Adebimpe Adetomiwa, a data analyst skilled in
                    turning raw data into actionable insights. With expertise in
                    Python, Pandas, and Matplotlib, I specialize in data
                    collection, cleaning, and visualization. I leverage tools
                    like Excel and Microsoft Office to streamline data processes
                    and deliver meaningful analysis that drives business
                    success. Passionate about uncovering the stories data tells,
                    I’m committed to helping organizations make data-driven
                    decisions that lead to growth.
                </p>
            </div>
        </section>
    );
};

export default About;
