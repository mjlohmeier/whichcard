import React from 'react';
import { connect } from 'react-redux';
// const axios = require('axios');

let mapStateToProps = (state) => {
    //returns just the list of jedi cards, state has both sets
    return { cards: state.Sith };
}

let MainGame = (props) => {
    // console.log(props.cards)
    return (
        <div >
            <GenerateCards cards={props.cards} />
        </div>
    )
}

let AffectMove = (event, card) => {
    event.preventDefault();
    console.log(event.target);
    console.log(card.power);
    let data =  JSON.stringify({attackPower: card.power});
    
    console.log(data);

    fetch('http://localhost:3005/game/id', {
        method: "POST",
        body: data,
        headers: {
            'Content-Type': "application/json"
        }
    });
}


let GenerateCards = (props) => {
    console.log(props);

    return (
        <div className='cardContainer'>
            {props.cards.map(card => {
                return (
                    // style={GenerateCardStyle(this.card.img)}
                    <div key={card.id}
                        className='bigCard'
                        name={card.name}
                        id={card.id}
                        power={card.power}
                        state={card.state}
                        onClick={(event) => { AffectMove(event, card) }}>

                        <span className='name'>{card.name}</span>
                        <span className='power'>{card.power}</span>

                        {/* <span className='img'>{card.img}</span> */}
                        {/* <span className='state'>{card.state}</span> */}
                    </div>
                )
            }
            )
            }
        </div>)
}

let MainGameContainer = connect(mapStateToProps)(MainGame)
export default MainGameContainer;