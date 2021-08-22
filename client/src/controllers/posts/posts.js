import React from "react";
import { Post} from './post/Post';
import { useSelector } from 'react-redux';
export const Posts = () => {
  const posts = useSelector((state)=>state.posts)
  console.log("hello form post",posts)
  return (
    <div className="container-fluid arm-posts">
      <div className="container arm-container">
        <div className="row pt-3">
          <div className="col-sm-12 ">
              <Post/>
          </div>
          {/* <div className="col-sm-4 ">
              <Form/>
          </div> */}
        </div>
      </div>
    </div>
  );
};
