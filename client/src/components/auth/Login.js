import React from "react";
import GoogleLogin from "react-google-login";
import {useDispatch} from 'react-redux'

export const Login = () => {

const dispatch = useDispatch();
  const googleSuccess = async (res)=>{

console.log(res)
       const result = res ?.profileObj;
       const token = res?.tokenId;

       try {
         dispatch({type:"AUTH",data:{result,token}})
         
       } catch (error) {
         console.log(error)
       }
  }

  const googleFailure = (error)=>{
    console.log("google login fail. please try again later",error)
  }
  return (
    <div className="container pt-5 bg-light mt-5 container-login-form">
      <div className="container pb-5">
      <center><h1 className="text-primary">Login to account</h1></center>
        <form>
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
       
          <button type="submit" className="btn btn-primary float-right">
            Sign In
          </button>

          <GoogleLogin
          clientId="1073397308165-vrpl9ib0acohlmkcvr0gqui643kijasi.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy={'single_host_origin'}
          />

     
        </form>
      </div>
    </div>
  );
};
