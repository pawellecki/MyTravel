import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from '../Header/HeaderContainer'

import Travels from '../../pages/Travels/Travels'
import TravelCard from '../../pages/TravelCard/TravelCardContainer'
import TravelForm from '../../pages/TravelForm/TravelForm'

const Content = () => (
    <>
        <Header />
        <Switch>
            <Route exact path="/travels" component={Travels} />
            <Route path="/travels/:id" component={TravelCard} /> />
            <Route path="/new-travel" component={TravelForm} />
        </Switch>
    </>
)
export default Content
