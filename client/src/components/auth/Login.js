import React,{useState} from "react";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { SignUser } from '../../action/user';

export const Login = () => {
  const [user,setUser]= useState({email:'',password:''})
  const [error,setError]=useState(null)

  const dispatch = useDispatch();
  const history = useHistory();
  
  const googleSuccess = async (res) => {
    console.log(res);
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });
      localStorage.setItem("jwt",token);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log("google login fail. please try again later", error);
  };

  const formHandler = (e)=>{
    e.preventDefault();
    dispatch(SignUser(user,history,setError))

  }
  return (
    <div>
      <div className="row">
        <div className="col-3 ">{/* col 1 */}</div>
        <div className="col-6 bg-light container-login-form shadow p-4">
          {/* col2 form */}

          <center>
            <h3>Sign In</h3>
          </center>
          <form onSubmit={formHandler}>
            <h5>{error}</h5>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={user?.email}
                onChange={(e)=>{setUser({...user, email:e.target.value})}}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
               value={user?.password}
               onChange={(e)=>{setUser({...user, password:e.target.value})}}
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
              cookiePolicy={"single_host_origin"}
            />
          </form>
        </div>
        <div className="col-3 ">{/* col3 */}</div>
      </div>
    </div>
  );
};
