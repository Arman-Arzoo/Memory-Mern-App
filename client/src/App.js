import React, { useEffect } from 'react';
import {BrowserRouter,Switch,Route  } from 'react-router-dom';
import {Header} from './controllers/includes/Header';
import {Footer} from './controllers/includes/Footer';
import { Posts } from './controllers/posts/posts';
import {useDispatch } from 'react-redux';
import { getPosts } from './action/posts';


export const App = () => {
 const dispatch = useDispatch();
    useEffect(() => {
       dispatch(getPosts())
    }, [dispatch])
    return (
        <div className="arm-main-container">
            <BrowserRouter>
            <Header/>
            <Posts/>
            <Switch>
                <Route></Route>
            </Switch>
            <Footer/>
            </BrowserRouter>
            
        </div>
    )
}
