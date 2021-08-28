import React from "react";
import { Link } from "react-router-dom";
import memory from "../../../img/memory.jpg";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import moment from "moment";
export const Post = ({setcurrentid}) => {
  const posts = useSelector((state) => state.posts);

  return (
    <>
      {!posts ? (
        <CircularProgress />
      ) : (
        <div className="row  ">
          {posts.map((post) => {
            return (
              <div key={post._id} className="card arm-card col-sm-3 mr-5 mb-4 ">
                <img className="card-img-top mt-3" src={post.selectedFile} alt="Card" />
                <div className="card-body">
                  <p className="card-title">
                    {moment(post.createdAt).fromNow()}
                  <h5 className="card-title">{post.title}</h5>
                  </p>
                  <p>{post.tags.map((tag) => `#${tag} `)}</p>
                  <h6 className="card-title">{post.creator}</h6>
                  <p className="card-text">{post.message}</p>
                  <Link
                    to="#"
                    className="btn btn-primary"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    onClick={()=>setcurrentid(post._id)}
                  >
                    Update
                  </Link>
                  <Link to="#" className="btn btn-primary ml-4">
                    Delete
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
