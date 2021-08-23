// import module 
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

// import other module
import postroute from './routes/posts.js';

// initialization express framework
const app = express();

// use all the module
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors());

// set router
app.use('/posts', postroute);


const connection_url = "mongodb+srv://toplinegeeks:toplinegeeks123@memorycluster.fkc1w.mongodb.net/memoryapp?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>app.listen(PORT, console.log(`Server running on port ${PORT}`)))
.catch((error)=>console.log(error.message));

mongoose.set("useFindAndModify", false);

