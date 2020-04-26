import React from 'react';

// Notes on function vs class and arrow function vs regular function
// https://stackoverflow.com/questions/34361379/are-arrow-functions-and-functions-equivalent-exchangeable
// https://medium.com/@Zwenza/functional-vs-class-components-in-react-231e3fbd7108
// https://dev.to/danielleye/react-class-component-vs-function-component-with-hooks-13dg

const Price = props => {
    return (
        <div>
            <h3 class="slime">{props.title}</h3>
            <span style={{ color: '#074815' }}>{props.players} PLAYERS</span>
            <br/>
            <div class="priceBox">
                <p class="slime">{props.price} per player</p>
                <p style={{
                    background: '#1D652C',
                    borderRadius: '7px',
                    padding: '5px'
                }}>{props.paintballs} paintballs/player</p>
                <p>Image of little people goes here.</p>
            </div>
        </div>
    )
};

export default Price;