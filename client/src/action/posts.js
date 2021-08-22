import * as api from '../apis/index.js';


export const getPosts = () => async (dispatch)=>{
    try {
        const {data} = await api.fetchPosts();
        dispatch({type:'FETCH-ALL', payload:data})
        console.log("i am form action ",data)
        
    } catch (error) {
        console.log("error is form getPosts",error.message)
    }
};

export const createPosts = (post)=> async (dispatch)=>{
  

    // try {
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { "Access-Control-Allow-Origin": "*",
    //               "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS" },
    //         body: JSON.stringify({ title:post.title,message:post.message, selectedFile:post.selectedFile, creator:post.creator, tags:post.tags })
    //     };
       
    //     fetch('http://localhost:5000/posts', requestOptions)
    //         .then(response => response.json())
    //         .then(data => dispatch({type:'CREATE',payload:data}));
           
    // } catch (error) {
    //     console.log(error.message)
    // }



    try{
        const {data}  = await api.createNewPosts(post); 
           console.log("pro Api",post)
        dispatch({type:'CREATE',payload:data});

    }catch(error){
         console.log(error.message)
    }
};