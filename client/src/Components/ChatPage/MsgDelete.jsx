import React, { useContext, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Menu, MenuItem } from '@mui/material';
import { deleteMessage } from '../../Service/app';
import { AuthContext } from '../Context/useAuth';


const MsgDelete = ({ color, message }) => {
    const [anchorEl, setAnchorEl] = useState(false);
    const { setNewMessageFlag } = useContext(AuthContext);
    const open = Boolean(anchorEl);
    const handleClose = () => {
        setAnchorEl(null)
    }
    const handleOpen = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const handleDelete = async () => {
        await deleteMessage(message._id);
        setNewMessageFlag((prev) => !prev);
    }

    return (
        <div style={{ position: 'relative' }}>
            <Button
                id="demo-positioned-button"
                aria-controls='demo-positioned-menu'
                onClick={handleOpen}
                sx={{ display: 'flex', position: 'relative', justifyContent: 'flex-end', '&:hover, :active': { background: 'none' } }}
                disableRipple>
                <ExpandMoreIcon sx={{ color: color }} />
            </Button>
            <Menu
                id="demo-positioned-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
            >
                <MenuItem onClick={() => { handleClose(); handleDelete(); }} sx={{ fontSize: '14px' }}>Delete</MenuItem>
            </Menu>
        </div>
    )
}

export default MsgDelete