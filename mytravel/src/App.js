import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import firebase from './config/firebase.js'

import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './pages/Login/Login'
import Content from './components/Content/Content'
import NotFound from './pages/NotFound/NotFound'

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
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/404" component={NotFound} />
                <Route path="/" component={Content} />
            </Switch>
        </Router>
    </Provider>
)

export default App
