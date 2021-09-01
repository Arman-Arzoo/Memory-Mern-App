import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Footer } from "./components/includes/Footer";
import { Posts } from "./components/posts/posts";
import { useDispatch } from "react-redux";
import { getPosts } from "./action/posts";
import { Login } from "./components/auth/Login";
import { SignUp } from "./components/auth/SignUp";
import { Nav } from './components/includes/Nav';


export const App = () => {
  const [currentid ,setcurrentid]= useState(null)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentid, dispatch]);


  return (
    <div className="arm-main-container">
      <BrowserRouter>
        <Nav currentid={currentid} setcurrentid={setcurrentid}/>
       
        <Switch>
          <Route exact path='/'  component={ () => (<Posts setcurrentid={setcurrentid} />)}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={SignUp}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
