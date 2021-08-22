import React from "react";

export const Form = () => {
  return (
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
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
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Creator"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Title"
                />
              </div>

              <div className="form-group">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Tags"
                />
              </div>

              <div className="form-group">
                <input
                  type="file"
                  className="form-control-file"
                  id="exampleFormControlFile1"
                />
              </div>
              <div className="container">
                <button type="submit" className="btn btn-primary">
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
