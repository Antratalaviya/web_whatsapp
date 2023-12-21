import { Box, Dialog } from '@mui/material'
import React, { useContext } from 'react'
import EmptyChat from './EmptyChat'
import Menu from '../SideBar/Menu'
import ChatBox from './ChatBox'
import { AuthContext } from '../Context/useAuth'

const dialogStyled = {
    height: '95%',
    width: '75%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    boxShadow: 'unset',
    margin: '20px',
    borderRadius: 'unset'
}

const ChatDialog = () => {
    const { person } = useContext(AuthContext);
    return (
        <>
            <Dialog
                open={true}
                PaperProps={{ sx: dialogStyled }}
                hideBackdrop>
                <Box sx={{
                    display: 'flex'
                }}>
                    <Box sx={{
                        width: '30%',
                        height: '95vh',
                        maxWidth: '475px',
                        minWidth: '336px',
                        overflow: 'overlay',
                        overflowX: 'hidden'
                    }}>
                        <Menu />
                    </Box>
                    <Box sx={{
                        width: '70%',
                        height: '100%',
                        borderLeft: '1px solid #f0f2f5'
                    }}>
                        {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
                    </Box>
                </Box>
            </Dialog>
        </>
    )
}

export default ChatDialog