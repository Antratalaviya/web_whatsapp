import React, { useContext, useState } from 'react'
import ManuBar from './ManuBar';
import { AuthContext } from '../Context/useAuth'
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import GroupsIcon from '@mui/icons-material/Groups';
import { Box, styled } from '@mui/material';
import InfoDrawer from './Drawer/InfoDrawer';

const Image = styled('img')({
    width: '34px',
    height: '34px',
    borderRadius: '50%',
    marginLeft: '20px'
})

const Component = styled(Box)`
margin-left : auto;
& > * {
    font-size : 20px;
    padding-right : 20px;
    color : #54656f;
}
`

const Header = () => {
    const { auth } = useContext(AuthContext);
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <Box sx={{
            width: '100%',
            height: '58px',
            bgcolor: '#F0F2F5',
            display: 'flex',
            alignItems: 'center',
            maxWidth: '100%',
            position: 'relative'
        }}>
            <Image src={auth.picture} alt="dp" onClick={() => setOpenDrawer(true)} />
            <Component>
                <GroupsIcon />
                <DonutLargeIcon />
                <ChatIcon />
                <ManuBar setOpenDrawer={setOpenDrawer} />
            </Component>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </Box>
    )
}

export default Header