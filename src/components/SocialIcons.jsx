import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';

import EmailIcon from '@mui/icons-material/Email';

import { IconButton } from '@mui/material';

const SocialIcons = () => {
    return (
        <div className='social-icons'>
            <a href='#'>
                <IconButton color='inherit'>
                    <FacebookIcon />
                </IconButton>
            </a>
            <a href='#'>
                <IconButton color='inherit'>
                    <WhatsAppIcon />
                </IconButton>
            </a>
            <a href='#'>
                <IconButton color='inherit'>
                    <EmailIcon />
                </IconButton>
            </a>
        </div>
    );
};

export default SocialIcons;
