import express from 'express';
import { addUser, getUser } from '../controller/userController.js'
import { getConversation, newConversation } from '../controller/conversationController.js';
import { deleteMessage, getMessage, newMessage } from '../controller/messageController.js';
import { getImage, uploadFile } from '../controller/imageController.js';
import upload from '../utils/upload.js';

const router = express.Router();

router.post('/add', addUser);
router.get('/users', getUser);

router.post('/conversation/add', newConversation);
router.post('/conversation/get', getConversation);

router.post('/message/add', newMessage);
router.get('/message/:id', getMessage);
router.delete('/message/delete/:id', deleteMessage);

router.post('/file/upload', upload.single('file'), uploadFile)
router.get('/file/:filename', getImage);

export default router;  