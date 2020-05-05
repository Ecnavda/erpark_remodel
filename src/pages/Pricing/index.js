import React from 'react';
import PricePackage from './packages';

import './pricing.css';

const Pricing = () => {
    return (
        <div class="pricePage">
            <header>
                <h1 class="slime">Rates</h1>
            </header>
            <div class="section priceSection">
                <div class="playerPackageContainer">
                    <span id="playerPackageTitle">Player Packages</span>
                    <br/>
                    <hr class="slime"/>
                </div>
                <div class="priceContainer">
                    <PricePackage
                        title = "Gremlin Package"
                        players = "8-14"
                        price = "$30"
                        paintballs = "250"
                        persons1 = '4'
                        persons2 = '4'
                    />
                    <PricePackage
                        title = "Ogre Package"
                        players = "8 - 14"
                        price = "$40"
                        paintballs = "500"
                        persons1 = '4'
                        persons2 = '4'
                    />
                </div>
                <div class="priceContainer">
                    <PricePackage
                        title = "Goliath Package"
                        players = "15 - 24"
                        price = "$38"
                        paintballs = "500"
                        persons1 = '8'
                        persons2 = '7'
                    />
                    <PricePackage
                        title = "Godzilla Package"
                        players = "25"
                        price = "$35"
                        paintballs = "500"
                        persons1 = '12'
                        persons2 = '8'
                    />
                </div>
            </div>
            <div class="section">
                <div class="playerPackageContainer">
                    <span id="playerPackageTitle">Rates</span>
                    <br/>
                    <hr class="slime"/>
                </div>
            </div>
            <div class="section">
                <div class="playerPackageContainer">
                    <span id="playerPackageTitle">Paintballs</span>
                    <br/>
                    <hr class="slime"/>
                </div>
            </div>
            <div class="section">
                <div class="playerPackageContainer">
                    <span id="playerPackageTitle">Rental Accessories</span>
                    <br/>
                    <hr class="slime"/>
                </div>
            </div>
        </div>
    )
};

export default Pricing;