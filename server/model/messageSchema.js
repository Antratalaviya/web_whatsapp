import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    senderId: { type: String },
    receiverId: { type: String },
    conversationId: { type: String },
    type: { type: String },
    text: { type: String },
}, {
    timestamps: true,
});

const message = mongoose.model('message', messageSchema);

export default message;