import axios from "axios";
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

// create post action creator
export const createPosts = (post) => async (dispatch) => {
  fetch("http://localhost:5000/posts", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("jwt"),
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

export const updatePost = (id, post) => async (dispatch) => {
  console.log("line no 33 action posts.js ", id);
  fetch(`http://localhost:5000/posts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("jwt"),
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
};

// action creator for delete user
export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/posts/${id}`, {
      headers: {
        "x-auth-token": localStorage.getItem("jwt"),
      },
    });
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

// like post
export const likePost = (id) => async (dispatch) => {
  fetch(`http://localhost:5000/posts/${id}/likePost`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("jwt"),
    },
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: "LIKE", payload: data });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

// comment  post
export const commentPost = (value, id) => async (dispatch) => {
  fetch(`http://localhost:5000/posts/${id}/commentPost`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("jwt"),
    },
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: "LIKE", payload: data });
      return data.comments;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

// search a  post
export const getPostBySearch = (searchQuery) => async (dispatch) => {
  fetch(
    `http://localhost:5000/posts/search?searchQuery=${
      searchQuery.search || "none"
    }`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: "FETCH_BY_SEARCH", payload: { data } });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
