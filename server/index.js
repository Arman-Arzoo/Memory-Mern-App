import {app} from './src/server.js';
import dotenv from 'dotenv';
import {connectToDb }  from './src/Database/index.js';

dotenv.config();

const PORT = process.env.PORT;

connectToDb();



app.listen(PORT,()=>{
    console.log(`app listening ot port no ${PORT}`)
})


