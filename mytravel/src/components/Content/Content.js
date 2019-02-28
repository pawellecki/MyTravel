import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../Header/HeaderContainer'

import Travels from '../../pages/Travels/TravelsContainer'
import TravelCard from '../../pages/TravelCard/TravelCardContainer'
import TravelForm from '../../pages/TravelForm/TravelForm'

class Content extends Component {

    render() {
        const { auth } = this.props
        if (auth.isLoaded && !auth.uid) return <Redirect to='/login' />
        return (
            <>
                {
                    auth.isLoaded ?
                    <>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={Travels} />
                            <Route exact path="/travels" component={Travels} />
                            <Route path="/travels/:id" component={TravelCard} />
                            <Route path="/new-travel" component={TravelForm} />
                        </Switch>
                    </>
                    : <div>loadddddinngggggg</div>
                }
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
