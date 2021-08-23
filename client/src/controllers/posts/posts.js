import React from "react";
import { Post} from './post/Post';

//import {CircularProgress} from '@material-ui/core'
export const Posts = () => {

  return (
    <div className="container-fluid arm-posts">
      <div className="container arm-container pt-4 ">
        <h1 className="h1-center">Welcome to Memories World</h1>
        <div className="row pt-3">
          <div className="col-sm-12 ">
             <Post/>
          </div>
        </div>
      </div>
    </div>
  );
};
