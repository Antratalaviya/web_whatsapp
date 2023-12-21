import { createContext, useEffect, useRef, useState } from "react";
import { io } from 'socket.io-client';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState();
    const [person, setPerson] = useState({});
    const [newMessageFlag, setNewMessageFlag] = useState(false);
    const [activeUsers, setActiveUsers] = useState([]);
    const socket = useRef();

    useEffect(() => {
        socket.current = io('ws://localhost:9000');
    }, [])

    return <AuthContext.Provider value={{
        auth,
        setAuth,
        person,
        setPerson,
        newMessageFlag,
        setNewMessageFlag,
        activeUsers,
        setActiveUsers,
        socket
    }}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;