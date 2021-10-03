import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Form } from "../form/Form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getPostBySearch } from "../../action/posts";

export const Nav = ({ currentid, setcurrentid }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    setUser(null);
    toast.success("You logging out");
    history.push("/login");
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  // search a post
  const [search, setSearch] = useState("");
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const query = useQuery();
  const searchQuery = query.get("searchQuery  ");

  const searchPost = () => {
    if (search.trim()) {
      dispatch(getPostBySearch({ search }));
      history.push(`/posts/search?searchQuery=${search || "none"}`);
    } else {
      history.push("/");
    }
  };
  const handelKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };
  return (
    <div>
      <nav className="mb-4 navbar navbar-expand-lg navbar-light cyan bg-light p-2 border-bottom ">
        <Link className="navbar-brand font-bold pl-5" to="/">
          <h3 className="brand">
            Unique <span>Memory</span>
          </h3>
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
        <div
          className="collapse navbar-collapse "
          id="navbarSupportedContent-4"
        >
          <ul className="navbar-nav ml-auto pr-5">
            <div className="form-group has-search   ">
              <span className="fa fa-search form-control-feedback"></span>
              <input
                onKeyDown={handelKeyPress}
                value={search}
                type="text"
                className="form-control"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            {!user?.token ? (
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
                <li className="nav-item pr-4">
                  <Link
                    className="nav-link"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    to="#"
                  >
                    <i className="fa fa-plus-square" aria-hidden="true">
                      post
                    </i>
                  </Link>
                </li>

                <li className="nav-item ">
                  <Link onClick={logout} className="nav-link" to="#">
                    <i className="fa fa-sign-out" aria-hidden="true"></i>
                  </Link>
                </li>

                {/* <li className="nav-item pl-3">
                  <img
                    className="rounded-circle profile "
                    src={user?.result?.imageUrl}
                    alt=""
                  />
                  <p><small>{user?.result?.name}</small></p>
                  
                  

                </li> */}
              </>
            )}
          </ul>
        </div>
      </nav>
      <Form currentid={currentid} setcurrentid={setcurrentid} />
    </div>
  );
};
