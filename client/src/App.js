import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./components/includes/Header";
import { Footer } from "./components/includes/Footer";
import { Posts } from "./components/posts/posts";
import { useDispatch } from "react-redux";
import { getPosts } from "./action/posts";
import { Login } from "./components/auth/Login";
import { SignUp } from "./components/auth/SignUp";


export const App = () => {
  const [currentid ,setcurrentid]= useState(null)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentid, dispatch]);


  return (
    <div className="arm-main-container">
      <BrowserRouter>
        <Header currentid={currentid} setcurrentid={setcurrentid}/>
       
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
