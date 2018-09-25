import React from 'react';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    //returns just the list of jedi cards, state has both sets
    return { cards: state.Jedi };
}

let MainGame = (props) => {
    // console.log(props.cards)
    return (
        <div >              
            <GenerateCards cards={props.cards} />            
        </div>  
    )
}

let GenerateCards = (props) => {
    console.log(props.cards);
    return( 
        <div className='cardContainer'>
        {props.cards.map(card => {
            return (
                <div key={card.id} className='bigCard' id={card.id}>
                    <span className='name'>{card.name}</span>
                    <span className='power'>{card.power}</span>
                    {/* <span className='img'>{card.img}</span> */}
                    <span className='state'>{card.state}</span>
                </div>
            )
            }
            )
        }
        </div>)
}

let MainGameContainer = connect(mapStateToProps)(MainGame)
export default MainGameContainer;