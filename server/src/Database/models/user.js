import mongoose  from "mongoose";

const userSchema = mongoose.Schema({
    firstName: String,
    lastName:String,
    email:String,
    password:String,
    name:String,
    imageUrl:{
         type:String,
         default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
         require:true
    }
   
   
},{timeStamp: true});

const User = mongoose.model('User', userSchema);
export default User;