import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPosts } from "../../action/posts";

export const Form = () => {
  const [PostData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();

  const clear = () => {};

  const handelform = (e) => {
    e.preventDefault();
    dispatch(createPosts(PostData));
  };

  return (
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Create memory
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {/* form data */}
            <form onSubmit={handelform}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Creator"
                  value={PostData.creater}
                  onChange={(e) =>
                    setPostData({ ...PostData, creator: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Title"
                  value={PostData.title}
                  onChange={(e) =>
                    setPostData({ ...PostData, title: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Message"
                  value={PostData.message}
                  onChange={(e) =>
                    setPostData({ ...PostData, message: e.target.value })
                  }
                ></textarea>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Tags"
                  value={PostData.tag}
                  onChange={(e) =>
                    setPostData({ ...PostData, tags: e.target.value })
                  }
                />
              </div>

              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setPostData({ ...PostData, selectedFile: base64 })
                }
              ></FileBase>
              <br />
              <br />

              <div className="container">
                <button onClick={clear} className="btn btn-primary">
                  Clear
                </button>
                <button type="submit" className="btn btn-primary float-right ">
                  Submit
                </button>
              </div>
            </form>
            {/* form data end */}
          </div>
        </div>
      </div>
    </div>
  );
};
