import React from 'react';
import { connect } from 'react-redux';
import sendAttack from './GameController'
import {Howl} from 'howler';


let mapStateToProps = (state) => {
    console.log(state.createUser.isSith)
    if (state.createUser.isSith == 'false') {
        return { cards: state.Jedi };
    } if (state.createUser.isSith == 'true') {
        return { cards: state.Sith }
    } else {
        return { cards: state.Jedi };
    }
}


let MainGame = (props) => {
    console.log(props.cards)
    return (
        <div className='cardEntireScreenFit'>
            <GenerateCards cards={props.cards} />
        </div>
    )
}



let lightsaberclash = new Howl({
    src: ['/sounds/lightsaberclash.mp3']
});

let AffectMove = (event, card) => {
    lightsaberclash.play();
    event.preventDefault();
    let data =  JSON.stringify({attackPower: card.power});
    sendAttack(data);
};

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