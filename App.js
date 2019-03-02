import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import contactReducer from "./src/store/reducers/contactReducer";
import Contacts from "./src/containers/Contacts/Contacts";

const store = createStore(contactReducer, applyMiddleware(thunkMiddleware));

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Contacts/>
            </Provider>
        );
    }
}


