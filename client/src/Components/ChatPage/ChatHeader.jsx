import { Box, Typography, styled } from '@mui/material'
import React, { useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AuthContext } from '../Context/useAuth';

const Image = styled('img')({
    height: '34px',
    borderRadius: '50%',
    marginLeft: '10px'
})
const Text = styled(Box)`
margin-left : 10px;
`
const Name = styled(Typography)`
font-size : 15px;
`
const Status = styled(Typography)`
font-size: 12px;
color : #54656f;
`
const Component = styled(Box)`
margin-left : auto;
& > * {
    padding-right : 20px;
    font-size : 22px;
    color : #54656f;
}
`

const ChatHeader = ({ person }) => {

    const { activeUsers } = useContext(AuthContext);

    return (
        <Box sx={{
            height: '58px',
            bgcolor: '#F0F2F5',
            display: 'flex',
            alignItems: 'center',
            borderLeft: '1px solid #d1d7db'
        }}>
            <Box>
                <Image src={person.picture} alt='dp' />
            </Box>
            <Text>
                <Name>{person.name}</Name>
                <Status>{activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline'}</Status>
            </Text>
            <Component>
                <SearchIcon />
                <MoreVertIcon />
            </Component>
        </Box>
    )
}

export default ChatHeader