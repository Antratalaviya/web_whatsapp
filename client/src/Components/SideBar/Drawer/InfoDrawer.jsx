import { Box, Drawer, Typography, styled } from '@mui/material'
import React from 'react';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Profile from '../Profile';

const dialogStyled = {
    boxShadow: 'unset',
    top: '25px',
    left: '240px',
    height: '95%',
    width: '22.6%',
    borderRight: '1px solid #f0f2f5',
}

const Wrapper = styled(Box)`
display: flex;
height: 118px;
background: #008069;
& > svg, & > p{
    margin-top : auto;
    padding : 15px;
    color : #fff;
    font-weight : 600;
}
`

const InfoDrawer = ({ open, setOpen }) => {

    const toggleDrawer = () => {
        setOpen(false);
    }

    return (
        <Drawer
            hideBackdrop
            open={open}
            onClose={toggleDrawer}
            PaperProps={{ sx: dialogStyled }}
            style={{ zIndex: 1500 }}
        >
            <Wrapper>
                <ArrowBack onClick={() => setOpen(false)} />
                <Typography style={{ fontSize: '18px' }}>Profile</Typography>
            </Wrapper>
            <Profile />
        </Drawer>
    )
}

export default InfoDrawer