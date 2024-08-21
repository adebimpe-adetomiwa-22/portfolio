import { Button, Divider, TextField } from '@mui/material';
import React from 'react';
import SocialIcons from './SocialIcons';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
    return (
        <section className='contact section' id='contact'>
            <div className='container'>
                <h3 className='contact-title subtitle'>Contact Me</h3>
                <div className='form-wrapper'>
                    <form className='flex flex-col w-4/5 gap-5'>
                        <TextField
                            label='Name'
                            className=''
                            size='small'
                            variant='standard'
                        />
                        <TextField
                            label='Email'
                            className=''
                            size='small'
                            variant='standard'
                        />
                        <TextField
                            label='Message'
                            className=''
                            size='small'
                            variant='standard'
                            multiline
                            rows={4}
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
