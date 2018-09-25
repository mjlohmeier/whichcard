import React from 'react';
import {connect} from 'react-redux';


let HomePage = (props) => {
    console.log(props.state)
    // let generateBoard = props.Jedi
    return( 
    <div>
        {/* generate 3 rows of 10 cards */}
        <h1> Homepage </h1>
        {/* <ProductPage /> */}
    </div>
    )
}
let HomePageContainer = connect(state=>state)(HomePage)
export default HomePageContainer;