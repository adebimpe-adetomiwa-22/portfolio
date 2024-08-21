import { Drawer, IconButton, Typography } from '@mui/material';
import React from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Navmenu = ({ open, close, type }) => {
    if (type === 'toggle') {
        return (
            <Drawer anchor='top' open={open} onClose={close}>
                <ul className='nav-menu'>
                    {/* <li className='close-menu'>&times;</li> */}
                    <li>
                        <a href='#' onClick={close}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href='#about' onClick={close}>
                            About me
                        </a>
                    </li>
                    <li>
                        <a href='#projects' onClick={close}>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href='#resume' onClick={close}>
                            Resume / cv
                        </a>
                    </li>
                    <li>
                        <a href='#contact' onClick={close}>
                            Contact me
                        </a>
                    </li>
                    <li className='close-menu-2' onClick={close}>
                        <CloseRoundedIcon />
                        {/* <p>Close</p> */}
                    </li>
                </ul>
            </Drawer>
        );
    }

    return (
        <div>
            <ul className='nav-menu show'>
                {/* <li className='close-menu'>&times;</li> */}
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#about'>About me</a>
                </li>
                <li>
                    <a href='#projects'>Projects</a>
                </li>
                <li>
                    <a href='#resume'>Resume / cv</a>
                </li>
                <li>
                    <a href='#contact'>Contact me</a>
                </li>
            </ul>
        </div>
    );
};

export default Navmenu;
