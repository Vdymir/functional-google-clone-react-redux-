import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import SearchPage from '../pages/SearchPage'


const AppRouter = () => {
    return (
        <div>
            <Router>
                <Switch>
                <Route path="/search" component={ SearchPage }/>
                <Route path="/" component={ HomePage }/>
                </Switch>
            </Router>
        </div>
    )
}

export default AppRouter
