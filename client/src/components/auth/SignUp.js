import React from "react";

export const SignUp = () => {
  return (
    <div>
      <div className="row">
        <div className="col-3 ">{/* col 1 */}</div>
        <div className="col-6 bg-light container-login-form shadow p-4">
          {/* col2 form */}

          <center>
            <h3>Sign Up</h3>
          </center>
          <form>
            <div className="form-group">
              <label>FirstName</label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter firstname"
              />
            </div>

            <div className="form-group">
              <label>LastName</label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter firstname"
              />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
              />
            </div>

            <button type="submit" className="btn btn-primary float-right">
              Sign up
            </button>
          </form>
        </div>
        <div className="col-3 ">{/* col3 */}</div>
      </div>
    </div>
  );
};
