import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router.js'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let reducer = (oldState, action) => {
    if (action.type === 'NEW_GAME') {
        console.log(action.newGame.isSith);
        return (
        {... oldState, 
            createUser:  
               { ...oldState.createUser, isSith: action.newGame.isSith }
            }
        )
    } else if (action.type === 'SWITCH_CARD') {
        // let card = action.newStatus.card
        // let team = action.newStatus.team;
        // let ID = action.newStatus.cardID;
        // let updatedStatus = action.newStatus.newStatus;
        // console.log(card, team, ID, updatedStatus);
        // let OS = oldState.Jedi;
        // console.log(OS)
        
        // card['switch'] = updatedStatus;
        // let newobj = {};
        // newobj[team] = card;
        // console.log(newobj)
        // let newObj = team[card];
        // console.log(card);

        // {"Team" : [card]}

        return ( oldState
            // {... oldState, 
            //     [team]: {... oldState.team, card }
            // }
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
        {"id": 1, "team": "Jedi", "name": 'Luke Skywalker', "power": '10', "img": './images/jedi/luke.jpg', "switch": false},
        {"id": 2, "team": "Jedi", "name": 'Ewok', "power": '2', "img": './images/jedi/ewok.jpg', "switch": true},
        {"id": 3, "team": "Jedi", "name": 'Mace Windu', "power": '7', "img": './images/jedi/mace_windu.jpg', "switch": true},
        {"id": 4, "team": "Jedi", "name": 'Jar Jar Binks', "power": '3', "img": './images/jedi/jarjar.jpg', "switch": true},
        {"id": 5, "team": "Jedi", "name": 'Aayla', "power": '4', "img": './images/jedi/aayla.jpg', "switch": true},
        {"id": 6, "team": "Jedi", "name": 'Chewbacca', "power": '9', "img": './images/jedi/chewy.jpg', "switch": true},
        {"id": 7, "team": "Jedi", "name": 'Finn', "power": '8', "img": './images/jedi/finn.jpg', "switch": true},
        {"id": 8, "team": "Jedi", "name": 'Rebel Soldier', "power": '5', "img": './images/jedi/rebel_soldier.jpg', "switch": true},
        {"id": 9, "team": "Jedi", "name": 'Yoda', "power": '6', "img": './images/jedi/yoda.jpg', "switch": true},
        {"id": 10, "team": "Jedi", "name": 'R2-D2', "power": '1', "img": './images/jedi/r2d2.jpg', "switch": true}
    ],
    "Sith" : [
        {"id": 11, "team": "Sith", "name": 'Darth Vader', "power": '10', "img": './images/sith/vader.jpeg', "switch": true},
        {"id": 12, "team": "Sith", "name": 'Boba Fett', "power": '9', "img": './images/sith/fett.jpeg', "switch": true},
        {"id": 13, "team": "Sith", "name": 'Emperor Palpatine', "power": '7', "img": './images/sith/pp.jpg', "switch": true},
        {"id": 14, "team": "Sith", "name": 'Scout Trooper', "power": '2', "img": './images/sith/scout.jpg', "switch": true},
        {"id": 15, "team": "Sith", "name": 'Darth Maul', "power": '6', "img": './images/sith/maul.jpg', "switch": true},
        {"id": 16, "team": "Sith", "name": 'Droideka', "power": '3', "img": './images/sith/droideka.jpg', "switch": true},
        {"id": 17, "team": "Sith", "name": 'Gen. Grievous', "power": '8', "img": './images/sith/gg.jpg', "switch": true},
        {"id": 18, "team": "Sith", "name": 'Kylo Ren', "power": '5', "img": './images/sith/kylo.jpg', "switch": true},
        {"id": 19, "team": "Sith", "name": 'IG-100 Magnaguard', "power": '4', "img": './images/sith/ig.jpg', "switch": true},
        {"id": 20, "team": "Sith", "name": 'Battle Droid', "power": '1', "img": './images/sith/droid.png', "switch": true}
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
