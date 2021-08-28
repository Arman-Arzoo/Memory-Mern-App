import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./controllers/includes/Header";
import { Footer } from "./controllers/includes/Footer";
import { Posts } from "./controllers/posts/posts";
import { useDispatch } from "react-redux";
import { getPosts } from "./action/posts";


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
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
