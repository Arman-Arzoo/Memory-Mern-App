import mongoose  from "mongoose";
const {ObjectId} = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
    title: String,
    message:String,
    creator:{
        type:ObjectId,
        ref:"User"
    },
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;