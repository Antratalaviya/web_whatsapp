import React, { useContext, useEffect, useState } from 'react'
import { getUser } from '../../Service/app'
import Conversation from './Conversation';
import { Box } from '@mui/material';
import { AuthContext } from '../Context/useAuth';

const Conversations = ({ text }) => {
    const [users, setUsers] = useState([]);
    const { auth } = useContext(AuthContext);
    useEffect(() => {
        const fetchData = async () => {
            let res = await getUser();
            const filterData = res?.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filterData);
        }
        fetchData();
    }, [text])


    return (
        <Box>
            {
                users.map(user =>
                    user.sub !== auth.sub &&
                    <Conversation user={user} key={user.sub} />
                )
            }
        </Box>
    )
}

export default Conversations