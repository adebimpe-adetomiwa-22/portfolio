import { Button, Divider, TextField } from '@mui/material';
import React from 'react';
import SocialIcons from './SocialIcons';
import SendIcon from '@mui/icons-material/Send';

const textFieldStyle = {
    '& .MuiInput-underline:before': {
        borderBottomColor: '#98918D',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
        borderBottomColor: '#98918D',
    },
    // '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    //     borderBottomColor: '#BAB5B3',
    // },
    // '&:hover MuiInput-underline:before': {
    //     borderBottomColor: '#BAB5B3',
    // },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#DDDAD9',
    },
};

const inputStyle = {
    color: '#DDDAD9',
};

const inputLabelStyle = {
    color: '#98918D',
    '&:hover': {
        color: '#BAB5B3',
    },
    '&.Mui-focused': {
        color: '#DDDAD9',
    },
};

const Contact = () => {
    return (
        <section className='contact section' id='contact'>
            <div className='container'>
                <h3 className='contact-title subtitle'>Contact Me</h3>
                <div className='form-wrapper'>
                    <form className='flex flex-col w-4/5 gap-5'>
                        <TextField
                            label='Name'
                            size='small'
                            variant='standard'
                            sx={textFieldStyle}
                            InputProps={{ sx: inputStyle }}
                            InputLabelProps={{ sx: inputLabelStyle }}
                        />
                        <TextField
                            label='Email'
                            size='small'
                            variant='standard'
                            sx={textFieldStyle}
                            InputProps={{ sx: inputStyle }}
                            InputLabelProps={{ sx: inputLabelStyle }}
                        />
                        <TextField
                            label='Message'
                            className=''
                            size='small'
                            variant='standard'
                            multiline
                            rows={4}
                            sx={textFieldStyle}
                            InputProps={{ sx: inputStyle }}
                            InputLabelProps={{ sx: inputLabelStyle }}
                        />
                        <Button endIcon={<SendIcon />} color='inherit'>
                            Send
                        </Button>
                    </form>
                    {/* <Divider orientation='horizontal' /> */}
                    <Divider
                        orientation='horizontal'
                        variant='fullWidth'
                        color='secondary'
                    />
                    <SocialIcons />
                </div>
            </div>
        </section>
    );
};

export default Contact;
