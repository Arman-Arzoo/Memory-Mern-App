import React from 'react';
import {BrowserRouter,Switch,Route  } from 'react-router-dom';
import {Header} from './controllers/includes/Header';
import {Footer} from './controllers/includes/Footer';
import { Posts } from './controllers/posts/Posts';

export const App = () => {
    return (
        <div>
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
