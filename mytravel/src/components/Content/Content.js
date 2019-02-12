import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../Header/HeaderContainer'

import Travels from '../../pages/Travels/Travels'
import TravelCard from '../../pages/TravelCard/TravelCardContainer'
import TravelForm from '../../pages/TravelForm/TravelForm'

class Content extends Component {

    state = {
        isLogged: true
    }

    componentDidMount() {
        const { auth } = this.props
        if (auth.isEmpty && auth.isLoaded) {
            this.setState({
                isLogged: false
            })
        }
    }

    componentDidUpdate(prevProps) {
        if (!prevProps.auth.isEmpty && this.props.auth.isEmpty && this.props.auth.isLoaded) {
            this.setState({
                isLogged: false
            })
        }
    }

    render() {
        const { isLogged } = this.state
        return (
            <>
                <Header />
                <Switch>
                    <Route exact path="/" component={Travels} />
                    <Route exact path="/travels" component={Travels} />
                    <Route path="/travels/:id" component={TravelCard} /> />
                    <Route path="/new-travel" component={TravelForm} />
                </Switch>
                {
                    !isLogged &&
                    <Redirect to='/login' />
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
