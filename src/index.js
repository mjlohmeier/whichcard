import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router.js'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let reducer = (oldState, action) => {
    return oldState
}

let initialState = {
    "Jedi" : [
        {"id": 1, "name": 'Luke', "power": '10', "img": '', "state": 'active'},
        {"id": 2, "name": 'Luke', "power": '10', "img": '', "state": 'active'},
        {"id": 3, "name": 'Luke', "power": '10', "img": '', "state": 'active'},
        {"id": 4, "name": 'Luke', "power": '10', "img": '', "state": 'active'},
        {"id": 5, "name": 'Luke', "power": '10', "img": '', "state": 'active'},
        {"id": 6, "name": 'Luke', "power": '10', "img": '', "state": 'active'},
        {"id": 7, "name": 'Luke', "power": '10', "img": '', "state": 'active'},
        {"id": 8, "name": 'Luke', "power": '10', "img": '', "state": 'active'},
        {"id": 9, "name": 'Luke', "power": '10', "img": '', "state": 'active'},
        {"id": 10, "name": 'Luke', "power": '10', "img": '', "state": 'active'},
        {"id": 11, "name": 'Luke', "power": '10', "img": '', "state": 'active'},
        {"id": 12, "name": 'Luke', "power": '10', "img": '', "state": 'active'},
        {"id": 13, "name": 'Luke', "power": '10', "img": '', "state": 'active'},
        {"id": 14, "name": 'Luke', "power": '10', "img": '', "state": 'active'},
        {"id": 15, "name": 'Luke', "power": '10', "img": '', "state": 'active'},
        {"id": 16, "name": 'Luke', "power": '10', "img": '', "state": 'active'},
        {"id": 17, "name": 'Luke', "power": '10', "img": '', "state": 'active'},
        {"id": 18, "name": 'Luke', "power": '10', "img": '', "state": 'active'},
        {"id": 19, "name": 'Luke', "power": '10', "img": '', "state": 'active'},
        {"id": 20, "name": 'Luke', "power": '10', "img": '', "state": 'active'},
        {"id": 21, "name": 'Luke', "power": '10', "img": '', "state": 'active'},
        {"id": 22, "name": 'Luke', "power": '10', "img": '', "state": 'active'},
        {"id": 23, "name": 'Luke', "power": '10', "img": '', "state": 'active'},
        {"id": 24, "name": 'Luke', "power": '10', "img": '', "state": 'active'}
    ],
    "Sith" : {
        '1' : {},
        '2' : {},
        '3' : {},
        '4' : {},
        '5' : {},
        '6' : {},
        '7' : {},
        '8' : {},
        '9' : {},
        '10' : {},
        '11' : {},
        '12' : {},
        '13' : {},
        '14' : {},
        '15' : {},
        '16' : {},
        '17' : {},
        '18' : {},
        '19' : {},
        '20' : {},
        '21' : {},
        '22' : {},
        '23' : {},
        '24' : {},
        '25' : {},
        '26' : {},
        '27' : {},
        '28' : {},
        '29' : {},
        '30' : {}
    }
};

let store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

let App =
    <Provider store={store}>
        <Router />
    </Provider>


ReactDOM.render(App, document.getElementById('root'));
