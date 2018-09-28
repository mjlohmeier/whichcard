import React from 'react';
import { connect } from 'react-redux';
import sendAttack from './GameController'
import {Howl} from 'howler';
import changeCardStatus from './ChangeCardStatus';


let mapStateToProps = (state) => {
    console.log(state.createUser.isSith)
    return (state.createUser.isSith) ?
        { cards: state.Sith} 
    :
        { cards: state.Jedi }
    };


let MainGame = (props) => {
    console.log(props.cards)
    let dispatcher = props.dispatch;
    console.log(dispatcher);
    console.log(dispatcher);
    return (
        <div className='cardEntireScreenFit'>
            <GenerateCards cards={props.cards} dispatcher={dispatcher} />
        </div>
    )
}

let lightsaberclash = new Howl({
    src: ['/sounds/lightsaberclash.mp3']
});

let AffectMove = (event, card, dispatcher) => {
    console.log(card.id);
    lightsaberclash.play();
    event.preventDefault();
    let data =  JSON.stringify({attackPower: card.power});
    let newCardStatus = (card.switch) ? 
            card.switch = false 
        : 
            card.switch = true;
    sendAttack(data);
    changeCardStatus(card, card.id, card.team, newCardStatus, dispatcher);
    
};

let Card = ({dispatcher, card}) => {
    console.log(card.team);
    return (<div 
            className={`bigCard ${card.switch ? 'active' : 'inactive'}`}
            id={card.id}
            onClick={(event) => { AffectMove(event, card, dispatcher) }}
            style={{backgroundImage: `url(${card.img})`}}
            >

            <span className='name'>{card.name}</span>
            <span className='power'>{card.power}</span>

            {/* <span className='img'>{card.img}</span> */}
            {/* <span className='state'>{card.state}</span> */}
        </div>)
}

let GenerateCards = ({dispatcher, cards}) => {
    console.log(dispatcher);
    console.log(cards);
    return (
        <div className='cardContainer'>
            {cards.map(card => {
                return (
                    <Card key={card.id} card={card} dispatcher={dispatcher}/>
                )
            }
            )
            }
        </div>)
        
}

let MainGameContainer = connect(mapStateToProps)(MainGame)
export default MainGameContainer;