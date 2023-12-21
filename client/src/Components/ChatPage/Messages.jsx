import { Box, styled } from '@mui/material'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { getMessage } from '../../Service/app'
import Message from './Message'
import { AuthContext } from '../Context/useAuth'

const Container = styled(Box)`
height : calc(95vh - 110px);
background-image : linear-gradient(to bottom, #FFFFFF5D, #FFFFFF5D),url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
background-size : 50%;
overflow : overlay;
`

const Msgcomponent = styled(Box)`
padding : 10px 80px;
`
const Messages = ({ conversation, person, incomingMessage }) => {
    const [messages, setMessages] = useState([]);
    const { newMessageFlag } = useContext(AuthContext);
    const scrollRef = useRef();

    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessage(conversation._id);
            setMessages(data);
        }
        conversation._id && getMessageDetails();
    }, [person._id, conversation._id, newMessageFlag])

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition: 'smooth' });
    }, [messages])

    useEffect(() => {
        incomingMessage && conversation?.members?.includes(incomingMessage.senderId) &&
            setMessages(prev => [...prev, incomingMessage])
    }, [messages, incomingMessage, conversation])
    return (
        <Container>
            <Box>
                {messages?.map((message) => (
                    <Msgcomponent key={message._id} ref={scrollRef}>
                        <Message message={message} />
                    </Msgcomponent>
                ))}
            </Box>
        </Container>
    )
}

export default Messages
