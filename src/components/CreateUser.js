import React from 'react';
import { NavLink }  from 'react-router-dom';

let CreateUserForm = (props) => {
    return (
        <form onSubmit={props.submitForm}>
            <h3 className='usernameTitle'>Username:</h3>
            <div className='usernameField'>
            <input type='text' value={props.username} onChange={(event) => { props.createUser(event, 'username') }} />
            </div>
            <h3 className='passwordTitle'>Password:</h3>
            <div className='passwordField'>
            <input type='text' value={props.password} onChange={(event) => { props.createUser(event, 'password') }} />
            </div>
            <div className='buttons'>
                <button className='SithButton' type='submit' value={true} onClick={props.chooseSith}>Choose Sith</button>             
                <button className='JediButton' type='submit' value={false} onClick={props.chooseJedi}>Choose Jedi</button>   
            </div>
            <div className='link'>
            <NavLink className='gameLink' to="/game/5" activeClassName="selected">START GAME</NavLink>
            </div>
        </form>
    )
};




export default CreateUserForm;