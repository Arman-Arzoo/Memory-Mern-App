import * as api from "../apis/index.js";


export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH-ALL", payload: data });
    // console.log("i am form action ",data)
  } catch (error) {
    console.log("error is form getPosts", error.message);
  }
};

export const createPosts = (post) => async (dispatch) => {
  fetch("http://localhost:5000/posts", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: "CREATE", payload: data });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

// let try to update the post

export const updatePost = (id,post) => async (dispatch)=>{
  console.log("line no 33 action posts.js ",id )
  fetch(`http://localhost:5000/posts/${id}`, {
    method: "PATCH", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: "UPDATE", payload: data });
     
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}