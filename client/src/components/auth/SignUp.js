import React from 'react'
import { GoogleLogin } from 'react-google-login'

export const SignUp = () => {
    return (
        <div className="container pt-5 bg-light mt-5 container-login-form">
        <div className="container pb-5">
            <center><h1 className="text-primary">Create an account</h1></center>
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">FirstName</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter firstname"
              />
            </div>

            <div className="form-group">
              <label for="exampleInputEmail1">LastName</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter firstname"
              />
            </div>

            <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>

            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>

            <div className="form-group">
              <label for="exampleInputPassword1">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Confirm Password"
              />
            </div>
         
            <button type="submit" className="btn btn-primary float-right">
              Sign up
            </button>
          </form>
        </div>
      </div>
    )
}
