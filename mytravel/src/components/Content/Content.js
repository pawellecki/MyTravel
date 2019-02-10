import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Header from '../Header/HeaderContainer'
import { firestoreConnect } from 'react-redux-firebase'

import Travels from '../../pages/Travels/Travels'
import TravelCard from '../../pages/TravelCard/TravelCardContainer'
import TravelForm from '../../pages/TravelForm/TravelForm'

class Content extends Component {

    state = {
        isLogged: true
    }

    componentDidMount() {
        console.log ("aaaaaaaaaaaaa")
        const { auth } = this.props
        if (auth.isEmpty) {
            this.setState({
                isLogged: false
            })
        }
    }

    componentDidUpdate(prevProps) {
        console.log ("bbbbbbbbbbb")
        if (!prevProps.auth.isEmpty && this.props.auth.isEmpty) {
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
                    <Route exact path="/travels" component={Travels} />
                    <Route path="/travels/:id" component={TravelCard} /> />
                    <Route path="/new-travel" component={TravelForm} />
                </Switch>
                {
                    !isLogged ?
                    <Redirect to='/login' />
                    : <div/>
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
compose(
    connect(mapStateToProps, null),
    firestoreConnect([{ collection: 'projects' }])
)(Content)