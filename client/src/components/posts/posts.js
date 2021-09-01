import React from "react";
import { Post } from "./post/post.js";

//import {CircularProgress} from '@material-ui/core'
export const Posts = ({setcurrentid}) => {
  return (
    <div className="container-fluid  ">
      <div className="container mr-5 pt-4 ">
        <div className="row ml-5 pt-3">
          
            <Post setcurrentid={setcurrentid}/>
          
        </div>
      </div>
    </div>
  );
};
