import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../Header/HeaderContainer'

import Travels from '../../pages/Travels/Travels'
import TravelCard from '../../pages/TravelCard/TravelCardContainer'
import TravelForm from '../../pages/TravelForm/TravelForm'

class Content extends Component {

    render() {
        const { auth } = this.props
        if (!auth.uid) return <Redirect to='/login' />
        return (
            <>
                <Header />
                <Switch>
                    <Route exact path="/" component={Travels} />
                    <Route exact path="/travels" component={Travels} />
                    <Route path="/travels/:id" component={TravelCard} /> />
                    <Route path="/new-travel" component={TravelForm} />
                </Switch>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

export default 
connect(mapStateToProps, null)(Content)
