import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router.js'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let reducer = (oldState, action) => {
    if (action.type === 'NEW_GAME') {
        // let obj = action.id;
        // obj["cartId"] = action.cartId;
        console.log(action.newGame.isSith);
        let obj = {}
        obj['isSith'] = action.newGame.isSith
        
        return (
        {... oldState, 
            createUser : [
                ...oldState.createUser, obj
            ]}
        // oldState
        )
    } else {
    return oldState
    }
}

let initialState = {
    "createUser" : {
        "username": "",
        "password": "",
        "gameID": "",
        "isSith": false
    },
    "Jedi" : [
        {"id": 1, "name": 'Luke Skywalker', "power": '10', "img": './images/jedi/luke.jpg', "state": 'active'},
        {"id": 2, "name": 'Ewok', "power": '2', "img": './images/jedi/ewok.jpg', "state": 'active'},
        {"id": 3, "name": 'Mace Windu', "power": '7', "img": './images/jedi/mace_windu.jpg', "state": 'active'},
        {"id": 4, "name": 'Jar Jar Binks', "power": '3', "img": './images/jedi/jarjar.jpg', "state": 'active'},
        {"id": 5, "name": 'Aayla', "power": '4', "img": './images/jedi/aayla.jpg', "state": 'active'},
        {"id": 6, "name": 'Chewbacca', "power": '9', "img": './images/jedi/chewy.jpg', "state": 'active'},
        {"id": 7, "name": 'Finn', "power": '8', "img": './images/jedi/finn.jpg', "state": 'active'},
        {"id": 8, "name": 'Rebel Soldier', "power": '5', "img": './images/jedi/rebel_soldier.jpg', "state": 'active'},
        {"id": 9, "name": 'Yoda', "power": '6', "img": './images/jedi/yoda.jpg', "state": 'active'},
        {"id": 10, "name": 'R2-D2', "power": '1', "img": './images/jedi/r2d2.jpg', "state": 'active'}
    ],
    "Sith" : [
        {"id": 11, "name": 'Darth Vader', "power": '10', "img": './images/sith/vader.jpeg', "state": 'active'},
        {"id": 12, "name": 'Boba Fett', "power": '9', "img": './images/sith/fett.jpeg', "state": 'active'},
        {"id": 13, "name": 'Emperor Palpatine', "power": '7', "img": './images/sith/pp.jpg', "state": 'active'},
        {"id": 14, "name": 'Scout Trooper', "power": '2', "img": './images/sith/scout.jpg', "state": 'active'},
        {"id": 15, "name": 'Darth Maul', "power": '6', "img": './images/sith/maul.jpg', "state": 'active'},
        {"id": 16, "name": 'Droideka', "power": '3', "img": './images/sith/droideka.jpg', "state": 'active'},
        {"id": 17, "name": 'Gen. Grievous', "power": '8', "img": './images/sith/gg.jpg', "state": 'active'},
        {"id": 18, "name": 'Kylo Ren', "power": '5', "img": './images/sith/kylo.jpg', "state": 'active'},
        {"id": 19, "name": 'IG-100 Magnaguard', "power": '4', "img": './images/sith/ig.jpg', "state": 'active'},
        {"id": 20, "name": 'Battle Droid', "power": '1', "img": './images/sith/droid.png', "state": 'active'}
    ]
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
