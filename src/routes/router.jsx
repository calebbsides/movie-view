import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';

import Home from 'views/home';
import Results from 'views/results';

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/results" component={ Results } />
                    <Route path="/" component={ Home } />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;