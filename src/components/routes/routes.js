import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home/home';
import History from '../history/history';

const Routes = props => {
    return (
        <main>
            <Route path="/" exact>
                <Home />
            </Route> 
            <Route path="/history" exact>
                <History />
            </Route> 
        </main>
    )
}
export default Routes;