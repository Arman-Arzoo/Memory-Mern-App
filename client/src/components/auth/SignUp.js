import React from 'react'


export const SignUp = () => {
    return (
        <div className="container pt-5 bg-white mt-5 container-login-form shadow" >
        <div className="container pb-5">
            <center><h1 className="text-primary">Create an account</h1></center>
          <form>
            <div className="form-group">
              <label >FirstName</label>
              <input
                type="text"
                className="form-control"
                
                aria-describedby="emailHelp"
                placeholder="Enter firstname"
              />
            </div>

            <div className="form-group">
              <label >LastName</label>
              <input
                type="text"
                className="form-control"
            
                aria-describedby="emailHelp"
                placeholder="Enter firstname"
              />
            </div>

            <div className="form-group">
            <label >Email address</label>
            <input
              type="email"
              className="form-control"
              
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>

            <div className="form-group">
              <label >Password</label>
              <input
                type="password"
                className="form-control"
              
                placeholder="Password"
              />
            </div>

            <div className="form-group">
              <label >Confirm Password</label>
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
      </div>
    )
}
