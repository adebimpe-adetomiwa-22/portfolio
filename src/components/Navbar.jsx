import React from 'react';
import Navmenu from './Navmenu';
import MenuIcon from './MenuIcon';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../features/menu/menuSlice';

import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';

const Navbar = () => {
    const dispatch = useDispatch();
    const { open } = useSelector((state) => state.menu);

    const closeDrawer = () => {
        dispatch(toggleMenu());
    };

    return (
        <div className='navbar'>
            <div className='container'>
                <h2 className='nav-bar-title'>Adetomiwa</h2>
                <IconButton onClick={closeDrawer}>
                    <DragHandleRoundedIcon />
                </IconButton>
                {/* <IconButton onClick={closeDrawer} size='small'>
                    <MenuIcon />
                </IconButton> */}
                <Navmenu open={open} close={closeDrawer} />
            </div>
        </div>
    );
};

export default Navbar;
