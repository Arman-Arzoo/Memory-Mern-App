import React from "react";
import { Link } from "react-router-dom";
import { deleteUser } from "../../../action/posts.js";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import moment from "moment";
export const Post = ({ setcurrentid }) => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <>
      {!posts.length ? (
        <>
          <CircularProgress />
          <div className="loading-home"></div>
        </>
      ) : (
        <div className="container posts-content">
          <div className="row">
            {posts.map((post) => {
              return (
                <div className="col-lg-4">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="media mb-3">
                        <img
                          src={post.creator.imageUrl}
                          className="d-block ui-w-40 rounded-circle "
                          alt=""
                        />
                        <div className="media-body ml-3">
                          {post.creator.name}
                          <div className="text-muted small">
                            {moment(post.createdAt).fromNow()}
                          </div>
                        </div>
                        {(user?.result?.googleId === post?.creator._id ||
                          user?.result?._id === post?.creator._id) && (
                          <Link
                            to="#"
                            className="d-inline-block text-muted ml-3 float-right"
                            type="button"
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
                            onClick={() => setcurrentid(post._id)}
                          >
                            <i
                              className="fa fa-pencil-square-o"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        )}
                      </div>

                      <p className="text-muted small">
                        {post.tags.map((tag) => `#${tag}`)}
                      </p>

                      <p>{post.message}</p>
                      <Link
                        href=""
                        className="ui-rect ui-bg-cover"
                        style={{
                          "background-image": `url(${post.selectedFile})`,
                        }}
                      ></Link>
                    </div>
                    <div className="card-footer">
                      <Link href="" className="d-inline-block text-muted">
                        <strong>123</strong>{" "}
                        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
                      </Link>
                      {/* <Link href="" className="d-inline-block text-muted ml-3">
                        <strong>12</strong>{" "}
                        <i class="fa fa-comment" aria-hidden="true"></i>
                      </Link> */}

                      {(user?.result?.googleId === post?.creator._id ||
                        user?.result?._id === post?.creator._id) && (
                        <Link
                          to="#"
                          className="d-inline-block text-muted ml-3 float-right"
                          onClick={() => {
                            dispatch(deleteUser(post._id));
                          }}
                        >
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
