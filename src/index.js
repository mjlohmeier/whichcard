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
        {"id": 1, "name": 'Luke Skywalker', "power": '10', "img": './images/jedi/luke.jpg', "state": 'active'},
        {"id": 2, "name": 'Ewok', "power": '2', "img": './images/jedi/ewok.jpg', "state": 'active'},
        {"id": 3, "name": 'Mace Windu', "power": '7', "img": './images/jedi/mace_windu.jpg', "state": 'active'},
        {"id": 4, "name": 'Jar Jar Binks', "power": '3', "img": './images/jedi/jarjar.jpg', "state": 'active'},
        {"id": 5, "name": 'Aayla', "power": '10', "img": './images/jedi/aayla.jpg', "state": 'active'},
        {"id": 6, "name": 'Chewbacca', "power": '10', "img": './images/jedi/chewy.jpg', "state": 'active'},
        {"id": 7, "name": 'Finn', "power": '10', "img": './images/jedi/finn.jpg', "state": 'active'},
        {"id": 8, "name": 'Rebel Soldier', "power": '5', "img": './images/jedi/rebel_soldier.jpg', "state": 'active'},
        {"id": 9, "name": 'Yoda', "power": '10', "img": './images/jedi/yoda.jpg', "state": 'active'},
        {"id": 10, "name": 'R2-D2', "power": '10', "img": './images/jedi/r2d2.jpg', "state": 'active'}
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
