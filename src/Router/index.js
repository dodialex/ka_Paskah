import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, Showreel } from '../pages';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/showreel' component={Showreel} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
