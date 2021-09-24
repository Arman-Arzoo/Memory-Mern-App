import React ,{useState} from "react";
import {createUser} from '../../action/user';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'


export const SignUp = () => {
  const userData = { firstName:'',lastName:'',email:'',password:'',repeatPassword:''}
  const [user ,setUser]=useState(userData);
  const [error ,setError]= useState()

  const history = useHistory();
  const dispatch = useDispatch()
  const formHandler = (e)=>{
    e.preventDefault();
    dispatch(createUser(user,history,setError))
  }

  return (

    <div>
      <div className="row">
        <div className="col-3 ">{/* col 1 */}</div>
        <div className="col-6 bg-light container-login-form border p-4">
          {/* col2 form */}

          <center>
            <h3>Sign Up</h3>
          </center>
          <form onSubmit={formHandler}>
            <div className="form-group">
              <p>{error}</p>
              <label>FirstName</label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter firstname"
                value={user?.firstName}
                onChange= {(e)=>setUser({...user, firstName:e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>LastName</label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter firstname"
                 value={user?.lastName}
                onChange= {(e)=>setUser({...user, lastName:e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={user?.email}
                onChange= {(e)=>setUser({...user, email:e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={user?.password}
                onChange= {(e)=>setUser({...user, password:e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                value={user?.repeatPassword}
                onChange= {(e)=>setUser({...user, repeatPassword:e.target.value})}
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
