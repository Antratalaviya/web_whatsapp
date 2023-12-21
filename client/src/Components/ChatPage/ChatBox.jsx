import React, { useContext, useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import ChatFooter from './ChatFooter'
import Messages from './Messages'
import { AuthContext } from '../Context/useAuth'
import { getConversation, newMessage } from '../../Service/app'

const ChatBox = () => {
    const { person, auth, setNewMessageFlag, socket, setActiveUsers } = useContext(AuthContext);
    const [value, setValue] = useState('');
    const [conversation, setConversation] = useState({});
    const [file, setFile] = useState('');
    const [image, setImage] = useState('');
    const [incomingMessage, setIncomingMessage] = useState(null);

    useEffect(() => {
        const getConversationDetails = async () => {
            let data = await getConversation({ senderId: auth.sub, receiverId: person.sub });
            setConversation(data);
        }
        getConversationDetails();
    }, [person.sub, auth.sub]);

    useEffect(() => {
        socket.current.emit('addUsers', auth);
        socket.current.on('getUsers', users => {
            setActiveUsers(users);
        })
    }, [auth, socket, setActiveUsers])

    useEffect(() => {
        socket.current.on('getMessage', data => {
            setIncomingMessage({
                ...data,
                createdAt: Date.now()
            })
        })
    }, [socket]);

    const sendText = async (e) => {
        const code = e.keyCode || e.which;
        if (code === 13 && value !== '') {
            let message = {};
            if (!file) {
                message = {
                    senderId: auth.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: 'text',
                    text: value
                }
            } else {
                message = {
                    senderId: auth.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: 'file',
                    text: image
                }
            }

            socket.current.emit('sendMessage', message);

            await newMessage(message);
            setValue('');
            setFile('');
            setNewMessageFlag(prev => !prev)
        }
    }

    return (
        <>
            <ChatHeader person={person} />
            <Messages
                person={person}
                conversation={conversation}
                incomingMessage={incomingMessage} />
            <ChatFooter
                sendText={sendText}
                setValue={setValue}
                file={file}
                setFile={setFile}
                setImage={setImage}
                value={value} />
        </>
    )
}

export default ChatBox