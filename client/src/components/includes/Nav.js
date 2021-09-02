import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Form } from "../form/Form";
import { useDispatch } from "react-redux";

export const Nav = ({ currentid, setcurrentid }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
 
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    setUser(null);
    history.push("/login");
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <div>
      <nav className="mb-4 navbar navbar-expand-lg navbar-light cyan bg-light p-2 shadow-lg ">
        <Link className="navbar-brand font-bold pl-5" to="/">
          Unique Memory
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-4"
          aria-controls="navbarSupportedContent-4"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
          <ul className="navbar-nav ml-auto pr-5">
            {!user ? (
              <>
                <li className="nav-item ">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Log in
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item pt-3 pl-3">
                  <Link
                    className="nav-link"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    to="#"
                  >
                    create Post
                  </Link>
                </li>

                <li className="nav-item pt-3 pl-3">
                  <Link onClick={logout} className="nav-link" to="#">
                    Log out
                  </Link>
                </li>

                <li className="nav-item pl-3">
                  <img
                    className="rounded-circle profile "
                    src={user?.result?.imageUrl}
                    alt=""
                  />
                  <p><small>{user?.result?.name}</small></p>
                  
                  

                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      <Form currentid={currentid} setcurrentid={setcurrentid} />
    </div>
  );
};
