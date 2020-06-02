import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './routes';
import reducers from './reducers';

export default class App extends Component {

    componentWillMount() {
        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyAN4AP7TF6YPtMTc8ZBXep_Y7a67WNRWNQ",
            authDomain: "whatsapp-clone-7ce77.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-7ce77.firebaseio.com",
            projectId: "whatsapp-clone-7ce77",
            storageBucket: "whatsapp-clone-7ce77.appspot.com",
            messagingSenderId: "197647304499",
            appId: "1:197647304499:web:9b908aa06372697e7de046"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
    }

    render() {
        console.disableYellowBox = true;
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>
        )
    }
}