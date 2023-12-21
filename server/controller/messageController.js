import Message from '../model/messageSchema.js'
import Conversation from '../model/conversationSchema.js';
import { gridFsBucket, gfs } from './imageController.js';

export const newMessage = async (req, res) => {
    try {
        const message = new Message(req.body);

        await message.save();
        await Conversation.findByIdAndUpdate(req.body.conversationId, { message: req.body.text });

        return res.status(200).json('message sent successfully');
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getMessage = async (req, res) => {
    try {
        let message = await Message.find({ conversationId: req.params.id });
        return res.status(200).json(message);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteMessage = async (req, res) => {
    try {
        let message = await Message.findById(req.params.id);
        if (message) {
            if (message.type === 'file') {
                let paramFile = message.text.split('/').pop();
                const file = await gfs.files.findOne({ filename: paramFile });
                if (file) {
                    await gridFsBucket.delete(file._id);
                }
            }
            await Message.findByIdAndDelete(req.params.id);
            await Conversation.findOneAndDelete({ message: message.text });
            return res.status(200).json('Message deleted');

        } else {
            return res.status(404).json('message not found with this id')
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}