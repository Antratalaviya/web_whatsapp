import { Box, Typography, styled } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/useAuth'
import { getConversation, setConversation } from '../../Service/app'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ArticleIcon from '@mui/icons-material/Article';
import { formatDate } from '../../Utils/common-utils';

const Container = styled(Box)`
height : 40px;
minheight : 40px;
width : 100%;
display : flex;
padding : 10px;
`

const Image = styled('img')({
    height: '40px',
    width: '40px',
    borderRadius: '50%'
})

const Text = styled(Box)`
padding-left : 10px;
`
const Name = styled(Typography)`
font-size : 15px;
`
const Msg = styled(Typography)`
font-size : 13px;
color : #54656f;
`
const Time = styled(Typography)`
font-size : 11px;
color : #54656f;
margin-left : auto;
padding-right : 20px;
`
const Hr = styled('hr')({
    border: 'unset',
    borderBottom: '.1px solid #F0F2F5',
})
const Conversation = ({ user }) => {
    const { setPerson, auth, newMessageFlag } = useContext(AuthContext);
    const [message, setMessage] = useState({});

    useEffect(() => {
        const getConversationDetail = async () => {
            const data = await getConversation({ senderId: auth.sub, receiverId: user.sub });
            setMessage({ text: data?.message, timestamp: data?.updatedAt })
        }
        getConversationDetail();
    }, [newMessageFlag, auth.sub, user.sub])

    const getUser = async () => {
        setPerson(user);
        await setConversation({ senderId: auth.sub, receiverId: user.sub });
    }

    return (
        <Container onClick={() => getUser()}>
            <Box>
                <Image src={user.picture} alt='dp' />
            </Box>
            <Box sx={{
                width: '100%',
            }}>
                <Text sx={{
                    minHeight: '40px'
                }}>
                    <Box display='flex'>
                        <Name>{user.name}</Name>
                        <Time>{formatDate(message?.timestamp) && ''}</Time>
                    </Box>
                    <Msg>{!message?.text?.includes('localhost') ? message.text : <IconComponent message={message} />}</Msg>
                </Text>
                <Hr />
            </Box>

        </Container>
    )
}

const IconComponent = ({ message }) => {
    return (
        (message?.text?.split('/').pop()).includes('image') ?
            <>
                <Msg sx={{ display: 'flex', textAlign: 'center' }}>
                    <CameraAltIcon sx={{ fontSize: '17px', marginRight: '5px' }} /> Photo
                </Msg>
            </>
            :
            <>
                <Msg sx={{ display: 'flex', textAlign: 'center' }}>
                    <ArticleIcon sx={{ fontSize: '17px', marginRight: '5px' }} /> {(message?.text?.split('/').pop()).split('-').pop()}
                </Msg>
            </>
    )
}

export default Conversation