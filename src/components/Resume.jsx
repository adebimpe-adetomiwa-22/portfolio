import React from 'react';
import ciscoCert from '../assets/certs/Data_Analytics_Essentials_Badge20240519-7-ppl4lw.pdf';
import ciscoCertImage from '../assets/certs/Data_Analytics_Essentials_Badge20240519-7-ppl4lw.jpg';
import resumePdf from '../assets/resume/Adebimpe_Adetomiwa_resume.pdf';
import resumeImage from '../assets/resume/Adebimpe_Adetomiwa_resume.png';
// import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import { IconButton } from '@mui/material';

const Resume = () => {
    return (
        <section className='resume section' id='resume'>
            <div className='container'>
                <h3 className='resume-title subtitle'>Resume / cv</h3>
                <div className='certs-wrapper'>
                    <div className='cert'>
                        <p className='cert-title body'>My Resume</p>
                        <img
                            src={resumeImage}
                            alt='cert image'
                            title='cert image'
                            className='cert-image object-top'
                        />

                        <a
                            href={resumePdf}
                            download={true}
                            className='download-cert'
                        >
                            <IconButton color='inherit'>
                                <DownloadRoundedIcon size='large' />
                            </IconButton>
                        </a>
                    </div>
                    <div className='cert'>
                        <p className='cert-title body'>
                            Cisco data analysis certificate
                        </p>
                        <img
                            src={ciscoCertImage}
                            alt='cert image'
                            title='cert image'
                            className='cert-image'
                        />

                        <a
                            href={ciscoCert}
                            download={true}
                            className='download-cert'
                        >
                            <IconButton color='inherit'>
                                <DownloadRoundedIcon size='large' />
                            </IconButton>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
