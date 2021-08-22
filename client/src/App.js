import React from 'react';
import {BrowserRouter,Switch,Route  } from 'react-router-dom';
import {Header} from './controllers/includes/Header';


export const App = () => {
    return (
        <div>
            <BrowserRouter>
            <Header/>
            <Switch>
                <Route></Route>
            </Switch>
            </BrowserRouter>
            
        </div>
    )
}
