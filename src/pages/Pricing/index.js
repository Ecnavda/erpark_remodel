import React from 'react';
import Price from './pieces';

import './pricing.css';

const Pricing = () => {
    return (
        <div class="pricePage">
            <header>
                <h1 class="slime">Rates</h1>
            </header>
            <section class="priceSection">
                <div class="priceContainer">
                    <Price
                        title = "Gremlin Package"
                        players = "8-14"
                        price = "$30"
                        paintballs = "250"
                    />
                    <Price
                        title = "Ogre Package"
                        players = "8 - 14"
                        price = "$40"
                        paintballs = "500"
                    />
                </div>
                <div class="priceContainer">
                    <Price
                        title = "Goliath Package"
                        players = "15 - 24"
                        price = "$38"
                        paintballs = "500"
                    />
                    <Price
                        title = "Godzilla Package"
                        player = "25+"
                        price = "$35"
                        paintballs = "500"
                    />
                </div>
            </section>
        </div>
    )
};

export default Pricing;