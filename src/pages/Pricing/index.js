import React from 'react';
import Package from './packages';
import Rate from './rates';

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
                    <Package
                        title = "Gremlin Package"
                        players = "8-14"
                        price = "$30"
                        paintballs = "250"
                        persons1 = '4'
                        persons2 = '4'
                    />
                    <Package
                        title = "Ogre Package"
                        players = "8 - 14"
                        price = "$40"
                        paintballs = "500"
                        persons1 = '4'
                        persons2 = '4'
                    />
                </div>
                <div class="priceContainer">
                    <Package
                        title = "Goliath Package"
                        players = "15 - 24"
                        price = "$38"
                        paintballs = "500"
                        persons1 = '8'
                        persons2 = '7'
                    />
                    <Package
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
                <div class="rateContainer">
                    <Rate
                        price = "$15"
                        description1 = "ALL DAY"
                        description2 = "PLAY"
                    />
                    <Rate
                        price = "$5"
                        description1 = "ALL DAY"
                        description2 = "AIR"
                    />
                    <Rate
                        price = "$15"
                        description1 = "RENTAL"
                        description2 = "EQUIPMENT"
                    />
                    <Rate
                        price = "$10"
                        description1 = "RENTAL"
                        description2 = "UPGRADE"
                    />
                </div>
            </div>
            <div class="section">
                <div class="playerPackageContainer">
                    <span id="playerPackageTitle">Paintballs</span>
                    <br/>
                    <hr class="slime"/>
                </div>
                <div class="rateContainer">
                    <Rate
                        price = "$5"
                        description1 = "100"
                        description2 = "ROUNDS"
                    />
                    <Rate
                        price = "$20"
                        description1 = "500"
                        description2 = "ROUNDS"
                    />
                    <Rate
                        price = "$35"
                        description1 = "1000"
                        description2 = "ROUNDS"
                    />
                    <Rate
                        price = "$60"
                        description1 = "2000"
                        description2 = "ROUNDS"
                    />
                </div>
            </div>
            <div class="section">
                <div class="playerPackageContainer">
                    <span id="playerPackageTitle">Rental Accessories</span>
                    <br/>
                    <hr class="slime"/>
                </div>
                <div class = "rateContainer">
                    <Rate
                        price = "$5"
                        description1 = "CHEST"
                        description2 = "PROTECTOR"
                    />
                    <Rate
                        price = "$5"
                        description1 = "TANK"
                        description2 = "RENTAL"
                    />
                    <Rate
                        price = "$5"
                        description1 = "MASK"
                        description2 = "RENTAL"
                    />
                    <Rate
                        price = "$5"
                        description1 = "VL 200"
                    />
                </div>
                <div class="rateContainer">
                    <Rate
                        price = "$10"
                        description1 = "JUMPSUITS"
                    />
                    <Rate
                        price = "$5"
                        description1 = "HARNESS &"
                        description2 = "2 PODS"
                    />
                    <Rate
                        price = "$10"
                        description1 = "ELECTRIC"
                        description2 = "HOPPER"
                    />
                </div>
            </div>
            <div class="section">
                <div class="reservationContainer">
                    <button class="robot reservation">MAKE RESERVATION</button>
                </div>
            </div>
        </div>
    )
};

export default Pricing;