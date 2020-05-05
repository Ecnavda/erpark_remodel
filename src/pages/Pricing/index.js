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
            <form method="GET" action="https://httpbin.org/get">
                <div class="section priceSection">
                    <div class="playerPackageContainer">
                        <span id="playerPackageTitle">Player Packages</span>
                        <br/>
                        <hr class="slime"/>
                    </div>
                    <div class="priceContainer">
                        <input type="radio" id="gremlin" name="packages" value="gremlin"></input>
                        <label for="gremlin">
                            <Package
                                title = "Gremlin Package"
                                players = "8-14"
                                price = "$30"
                                paintballs = "250"
                                persons1 = '4'
                                persons2 = '4'
                            />
                        </label>
                        <input type="radio" id="ogre" name="packages" value="ogre"></input>
                        <label for="ogre">
                            <Package
                                title = "Ogre Package"
                                players = "8 - 14"
                                price = "$40"
                                paintballs = "500"
                                persons1 = '4'
                                persons2 = '4'
                            />
                        </label>
                    </div>
                    <div class="priceContainer">
                        <input type="radio" id="goliath" name="packages" value="goliath"></input>
                        <label for="goliath">
                            <Package
                                title = "Goliath Package"
                                players = "15 - 24"
                                price = "$38"
                                paintballs = "500"
                                persons1 = '8'
                                persons2 = '7'
                            />
                        </label>
                        <input type="radio" id="godzilla" name="packages" value="godzilla"></input>
                        <label for="godzilla">
                            <Package
                                title = "Godzilla Package"
                                players = "25"
                                price = "$35"
                                paintballs = "500"
                                persons1 = '12'
                                persons2 = '8'
                            />
                        </label>
                    </div>
                </div>
                <div class="section">
                    <div class="playerPackageContainer">
                        <span id="playerPackageTitle">Rates</span>
                        <br/>
                        <hr class="slime"/>
                    </div>
                    <div class="rateContainer">
                        <input type="checkbox" id="allDayPlay" name="allDayPlay" value="true"/>
                        <label for="allDayPlay">
                            <Rate
                                price = "$15"
                                description1 = "ALL DAY"
                                description2 = "PLAY"
                            />
                        </label>
                        <input type="checkbox" id="allDayAir" name="allDayAir" value="true"/>
                        <label for="allDayAir">
                            <Rate
                                price = "$5"
                                description1 = "ALL DAY"
                                description2 = "AIR"
                            />
                        </label>
                        <input type="checkbox" id="rentalEquipment" name="rentalEquipment" value="true"/>
                        <label for="rentalEquipment">
                            <Rate
                                price = "$15"
                                description1 = "RENTAL"
                                description2 = "EQUIPMENT"
                            />
                        </label>
                        <input type="checkbox" id="rentalUpgrade" name="rentalUpgrade" value="true"/>
                        <label for="rentalUpgrade">
                            <Rate
                                price = "$10"
                                description1 = "RENTAL"
                                description2 = "UPGRADE"
                            />
                        </label>
                    </div>
                </div>
                <div class="section">
                    <div class="playerPackageContainer">
                        <span id="playerPackageTitle">Paintballs</span>
                        <br/>
                        <hr class="slime"/>
                    </div>
                    <div class="rateContainer">
                        <input type="radio" id="paintballs1" name="paintballOrder" value="100"/>
                        <label for="paintballs1">
                            <Rate
                                price = "$5"
                                description1 = "100"
                                description2 = "ROUNDS"
                            />
                        </label>
                        <input type="radio" id="paintballs2" name="paintballOrder" value="500"/>
                        <label for="paintballs2">
                            <Rate
                                price = "$20"
                                description1 = "500"
                                description2 = "ROUNDS"
                            />
                        </label>
                        <input type="radio" id="paintballs3" name="paintballOrder" value="1000"/>
                        <label for="paintballs3">
                            <Rate
                                price = "$35"
                                description1 = "1000"
                                description2 = "ROUNDS"
                            />
                        </label>
                        <input type="radio" id="paintballs4" name="paintballOrder" value="2000"/>
                        <label for="paintballs4">
                            <Rate
                                price = "$60"
                                description1 = "2000"
                                description2 = "ROUNDS"
                            />
                        </label>
                    </div>
                </div>
                <div class="section">
                    <div class="playerPackageContainer">
                        <span id="playerPackageTitle">Rental Accessories</span>
                        <br/>
                        <hr class="slime"/>
                    </div>
                    <div class = "rateContainer">
                        <input type="checkbox" id="chestProtector" name="chestProtector" value="true"/>
                        <label for="chestProtector">
                            <Rate
                                price = "$5"
                                description1 = "CHEST"
                                description2 = "PROTECTOR"
                            />
                        </label>
                        <input type="checkbox" id="tankRental" name="tankRental" value="true"/>
                        <label for="tankRental">
                            <Rate
                                price = "$5"
                                description1 = "TANK"
                                description2 = "RENTAL"
                            />
                        </label>
                        <input type="checkbox" id="maskRental" name="maskRental" value="true"/>
                        <label for="maskRental">
                            <Rate
                                price = "$5"
                                description1 = "MASK"
                                description2 = "RENTAL"
                            />
                        </label>
                        <input type="checkbox" id="vl200" name="vl200" value="true"/>
                        <label for="vl200">
                            <Rate
                                price = "$5"
                                description1 = "VL 200"
                            />
                        </label>
                    </div>
                    <div class="rateContainer">
                        <input type="checkbox" id="jumpsuits" name="jumpsuits" value="true"/>
                        <label for="jumpsuits">
                            <Rate
                                price = "$10"
                                description1 = "JUMPSUITS"
                            />
                        </label>
                        <input type="checkbox" id="harnessPods" name="hardnessPods" value="true"/>
                        <label for="harnessPods">
                            <Rate
                                price = "$5"
                                description1 = "HARNESS &"
                                description2 = "2 PODS"
                            />
                        </label>
                        <input type="checkbox" id="electricHopper" name="electricHopper" value="true"/>
                        <label for="electricHopper">
                            <Rate
                                price = "$10"
                                description1 = "ELECTRIC"
                                description2 = "HOPPER"
                            />
                        </label>
                    </div>
                </div>
                <div class="section">
                    <div class="reservationContainer">
                        <button class="robot reservation">MAKE RESERVATION</button>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default Pricing;