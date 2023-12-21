import axios from 'axios';

const url = 'http://localhost:8080/api/v1/user';

export const addUser = async (data) => {
    try {
        await axios.post(`${url}/add`, data);
    } catch (error) {
        console.log('error while calling addUser api', error.message);
    }
}

export const getUser = async () => {
    try {
        let res = await axios.get(`${url}/users`);
        return res?.data;
    } catch (error) {
        console.log('error while calling getUser api', error.message)
    }
}

export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data);
    } catch (error) {
        console.log('error while caliing setConversation api', error.message);
    }
}

export const getConversation = async (data) => {
    try {
        let res = await axios.post(`${url}/conversation/get`, data);
        return res?.data;
    } catch (error) {
        console.log('error while calling getConversation api', error.message);
    }
}

export const newMessage = async (data) => {
    try {
        await axios.post(`${url}/message/add`, data);
    } catch (error) {
        console.log('error while calling newMessage api', error.message);
    }
}

export const getMessage = async (id) => {
    try {
        let res = await axios.get(`${url}/message/${id}`);
        return res?.data;
    } catch (error) {
        console.log('error while calling getMessage api', error.message);
    }
}

export const uploadFile = async (data) => {
    try {
        return await axios.post(`${url}/file/upload`, data);
    } catch (error) {
        console.log('error while calling uploadFile api', error.message);
    }
}

export const deleteMessage = async (id) => {
    try {
        return await axios.delete(`${url}/message/delete/${id}`);
    } catch (error) {
        console.log('error while calling deleteMessage api', error.message)
    }
}