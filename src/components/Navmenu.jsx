import { Drawer, IconButton, Typography } from '@mui/material';
import React from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Navmenu = ({ open, close }) => {
    return (
        <Drawer anchor='top' open={open} onClose={close}>
            <ul className='nav-menu'>
                {/* <li className='close-menu'>&times;</li> */}
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>About me</a>
                </li>
                <li>
                    <a href='#'>Projects</a>
                </li>
                <li>
                    <a href='#'>Resume / cv</a>
                </li>
                <li>
                    <a href='#'>Contact me</a>
                </li>
                <li className='close-menu-2' onClick={close}>
                    <CloseRoundedIcon />
                    {/* <p>Close</p> */}
                </li>
            </ul>
        </Drawer>
    );
};

export default Navmenu;
