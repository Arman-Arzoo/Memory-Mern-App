import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Footer } from "./components/includes/Footer";
import { Posts } from "./components/posts/posts";
import { useDispatch } from "react-redux";
import { getPosts } from "./action/posts";
import { Login } from "./components/auth/Login";
import { SignUp } from "./components/auth/SignUp";
import { Nav } from "./components/includes/Nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  const [currentid, setcurrentid] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentid, dispatch]);

  return (
    <div className="arm-main-container">
      <BrowserRouter>
        <Nav currentid={currentid} setcurrentid={setcurrentid} />

        <Switch>
          <Route
            exact
            path="/"
            component={() => <Redirect to="/posts" />}
          ></Route>
          <Route
            exact
            path="/posts"
            component={() => <Posts setcurrentid={setcurrentid} />}
          ></Route>

          <Route
            path="/posts/search"
            exact
            component={() => <Posts setcurrentid={setcurrentid} />}
          ></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={SignUp}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
      <ToastContainer theme="dark" position="top-center" />
    </div>
  );
};
