import React from "react";
import { Post } from "./post/post.js";

//import {CircularProgress} from '@material-ui/core'
export const Posts = ({ setcurrentid }) => {
  return (
    <div className="container ">
      <div className="row">
        <Post setcurrentid={setcurrentid} />
      </div>
    </div>
  );
};
