import React from "react";
import { Post } from "./post/post.js";

//import {CircularProgress} from '@material-ui/core'
export const Posts = ({setcurrentid}) => {
  return (
    <div className="container-fluid arm-posts bg-dark">
      <div className="container arm-container pt-4 ">
        <h1 className="h1-center text-light">Welcome to Memories World</h1>
        <div className="row pt-3">
          
            <Post setcurrentid={setcurrentid}/>
          
        </div>
      </div>
    </div>
  );
};
