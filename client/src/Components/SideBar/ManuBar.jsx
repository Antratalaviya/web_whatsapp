import { Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ManuBar = ({ setOpenDrawer }) => {

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }
    const handleClick = () => {
        setOpen(true);
    }
    return (
        <>
            <MoreVertIcon onClick={handleClick} />
            <Menu
                anchorEl={open}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                sx={{
                    marginTop: '15px',
                    position: 'absolute',
                    left: '28.5%',
                    top: '5%'
                }}
            >
                <MenuItem onClick={() => { handleClose(); setOpenDrawer(true); }}>Profile</MenuItem>
            </Menu>
        </>
    )
}

export default ManuBar