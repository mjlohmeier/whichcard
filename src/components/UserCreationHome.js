import React from 'react';
import CreateUserForm from './CreateUser.js';
import { connect } from 'react-redux';

class UserCreationWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            gameID: '',
            isSith: false
            };
        }
    //     componentDidMount() {
    //         fetch('./data.json')
    //             .then(response => response.json())
    //             .then(data =>
    //                 this.setState({ tweets: data }))
    // }
    render() {

        const { username, password, gameID, isSith} = this.state;

        let createUser = (e, updated) => {
            let newGame = {};
            newGame[updated] = e.target.value;
            this.setState(newGame);
        };

        let submitForm = (e) => {
            e.preventDefault();
            this.props.dispatch({type:'NEW_GAME', newGame: this.state})
        };

        let chooseSith = (e) => {
            let newTeam = {isSith: e.target.value};
            console.log(newTeam)
            //include a game ticker here
            this.setState(newTeam);
  
        };

        let chooseJedi = (e) => {
            let newTeam = {};
            newTeam['isSith'] = e.target.value;
            //include a game ticker here
            console.log(newTeam)
            this.setState(newTeam);
        };

        return (
            <div className='HomePage'>
                <CreateUserForm createUser={createUser} chooseJedi={chooseJedi} chooseSith={chooseSith} submitForm={submitForm} username={username} password={password} />
            </div>
        )
    }
};



export default connect()(UserCreationWrapper);