import React, { Component } from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import firebase from './config/firebase.js'

import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './components/Header/HeaderContainer'
import Content from './components/Content/Content'

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

const App = () => (
    <Provider store={store}>
        <Router>
            <>
                <Header />
                <Content />
            </>
        </Router>
    </Provider>
)

export default App
