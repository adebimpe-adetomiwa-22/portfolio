import React from 'react';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>
                <p className='hero-i-am'>I am</p>
                <h2 className='hero-name'>ADEBIMPE ADETOMIWA</h2>
                {/* <p className='hero-description'>
                    A <span>Data Analyst</span>
                </p> */}
                <p className='hero-description-2'>
                    A data analyst with expertise in Python, Pandas, Matplotlib,
                    Excel, and more. My focus is on data collection, cleaning,
                    and analysis to deliver clear and impactful insights that
                    help businesses thrive. Whether you need help with data
                    visualization, reporting, or optimizing workflows, I&apos;m
                    here to assist. Let's work together to unlock new
                    opportunities through the power of data.
                </p>
                <a href='#projects'>
                    <button className='hero-call-to-action-button'>
                        Explore My Work
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Hero;
