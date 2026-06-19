import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({

    senderId:{
        type: mongoose.Schema.Types.ObjectId,
    }

},{ timestamps: true })

const Message = mongoose.model("Message", messageSchema);

export default Message;
