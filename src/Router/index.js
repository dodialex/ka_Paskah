import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, Showreel, Portofolio, About, Contact, Team, AnimationProcess } from '../pages';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/showreel' component={Showreel} />
                <Route path='/portofolio' component={Portofolio} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/team' component={Team} />
                <Route path='/animationprocess' component={AnimationProcess} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
