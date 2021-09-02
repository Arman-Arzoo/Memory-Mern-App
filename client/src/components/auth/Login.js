import React from "react";
import GoogleLogin from "react-google-login";
import {useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";

export const Login = () => {

const dispatch = useDispatch();
const history = useHistory();
  const googleSuccess = async (res)=>{

console.log(res)
       const result = res?.profileObj;
       const token = res?.tokenId;

       try {
         dispatch({type:"AUTH",data:{result,token}})
         history.push('/')
       } catch (error) {
         console.log(error)
       }
  }

  const googleFailure = (error)=>{
    console.log("google login fail. please try again later",error)
  }
  return (
    <div className="container pt-5 bg-white mt-5 container-login-form shadow">
      <div className="container pb-5">
      <center><h1 className="text-primary">Login to account</h1></center>
        <form>
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
       
          <button type="submit" className="btn btn-primary float-right">
            Sign In
          </button>

          <GoogleLogin
          clientId="1073397308165-vrpl9ib0acohlmkcvr0gqui643kijasi.apps.googleusercontent.com"
          buttonText="Login With Google"
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy={'single_host_origin'}
          />

     
        </form>
      </div>
    </div>
  );
};
