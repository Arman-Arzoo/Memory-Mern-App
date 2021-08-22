import React from "react";
import { Post} from './post/Post';
export const Posts = () => {
  return (
    <div class="container-fluid arm-posts">
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
