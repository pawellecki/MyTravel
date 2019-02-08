import React from 'react'
import { Switch, Route } from 'react-router-dom'

import TravelCard from '../../pages/TravelCard/TravelCardContainer'
import Login from '../../pages/Login/Login'
import NotFound from '../../pages/NotFound/NotFound'
import Home from '../../pages/Home/Home'
import NewProjectForm from '../../pages/NewProjectForm/NewProjectForm'

const Content = () => (
    <Switch>
        <Route path="/travels/:id" component={TravelCard} /> />
        <Route path="/new-travel" component={NewProjectForm} />
        <Route path="/login" component={Login} />
        <Route path="/404" component={NotFound} />
        <Route path="/" component={Home} />
    </Switch>
)
export default Content
