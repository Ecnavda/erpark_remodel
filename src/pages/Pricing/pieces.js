import React from 'react';

// Notes on function vs class and arrow function vs regular function
// https://stackoverflow.com/questions/34361379/are-arrow-functions-and-functions-equivalent-exchangeable
// https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108
// https://dev.to/danielleye/react-class-component-vs-function-component-with-hooks-13dg

const Price = props => {
    return (
        <div>
            <h3>{props.title}</h3>
            <span>{props.players} PLAYERS</span>
            <br/>
            <div class="priceBox">
                <span>{props.price} per player</span>
                <br/>
                <span>{props.paintballs} paintballs/player</span>
                <br/>
                <span>Image of little people goes here.</span>
            </div>
        </div>
    )
};

export default Price;