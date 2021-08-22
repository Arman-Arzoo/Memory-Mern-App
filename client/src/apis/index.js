import axios from 'axios';
const url = "http://localhost:5000/posts";
             

const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  }

export const fetchPosts = () =>  axios.get(url)
export const createNewPosts =  (newpostdata) => axios.post(url,newpostdata);
    
