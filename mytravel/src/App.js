import React, { Component } from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import firebase from './config/firebase.js'

import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import TravelCard from './pages/TravelCard/index'
import Login from './pages/Login/index'
import NotFound from './pages/NotFound/index'
// import Home from './pages/Home/index'
import NewProjectForm from './pages/NewProjectForm/NewProjectForm'

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(
            thunk.withExtraArgument({
                getFirebase,
                getFirestore
            })
        ),
        reduxFirestore(firebase),
        reactReduxFirebase(firebase)
    )
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/travels/:id' component={TravelCard} /> />
            <Route path='/login' render={() => <Login />} />
            <Route path='/404' render={() => <NotFound />} />
            {/* <Route path='/' render={() => <Home />} /> */}
            <Route path='/' render={() => <NewProjectForm />} />
          </Switch>
        </Router>
      </Provider>

    )
  }
}

export default App
