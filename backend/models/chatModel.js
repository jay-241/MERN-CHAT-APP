const mongoose = require("mongoose")

const chatModel = mongoose.Schema(
    {
        chatName: {type: String, trim: true},
        isGroupChat: {type: Boolean, default: false},
        users: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }],
        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "message"
        },
        
        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    },
    {
        timestamps: true,        
    }
)

export const chat = mongoose.model("Chat", chatModel);

//chatname
//isGroupChat
//users
//latestMessage
//groupAdmin

