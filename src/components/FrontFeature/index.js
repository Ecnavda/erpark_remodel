import React, { Component } from 'react';

// Other imports
import './style.css';
import ImgIcon1 from '../../assets/icons/front-logo.svg';
import ImgIcon2 from '../../assets/icons/paintball-icon1.svg';
import ImgIcon3 from '../../assets/icons/ribbon-icon.svg';
import ImgIcon4 from '../../assets/icons/paintball-icon2.svg';

// This is a simple component that allows you to pass props.
function FrontFeatureBase(props) {
    return(
        <div class={props.bgImageStyle} id="feature-container">
            <img class="feature-icon" src={props.iconSource}/>
            <hr></hr>
            <span class="feature-verbage">{props.verbage}</span>
        </div>
    );
}

// This is a component that includes the page turning functionality.
function PageTurn(props) {
    return(
        <div class="pages-container">
            <div class={props.currentPage} id="p1" onClick={props.handlePages}></div>
            <div class={props.currentPage} id="p2" onClick={props.handlePages}></div>
            <div class={props.currentPage} id="p3" onClick={props.handlePages}></div>
            <div class={props.currentPage} id="p4" onClick={props.handlePages}></div>   
        </div>
    );
}

class FrontFeature extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentClass: "",
            currentPage: "p1",
            imageStyle: "feature1-bg",
            imageIcon: `${ImgIcon1}`,
            verbage: "paint your rage"
        }
        
    }

    changePage(event) {
        event.preventDefault();

        switch(event.target.id) {
            case "p1":
                this.setState({
                    currentPage: "p1",
                    imageStyle: "feature1-bg",
                    imageIcon: `${ImgIcon1}`,
                    verbage: "paint your rage"
                });
                break;

            case "p2":
                this.setState({
                    currentPage: "p2",
                    imageStyle: "feature2-bg",
                    imageIcon: `${ImgIcon2}`,
                    verbage: "unlimited use and plau"
                });
                break;

            case "p3":
                this.setState({
                    currentPage: "p3",
                    imageStyle: "feature3-bg",
                    imageIcon: `${ImgIcon3}`,
                    verbage: "#1 Paintball Park in the entire South Florida area."
                });
                break;
            
            case "p4":
                this.setState({
                    currentPage: "p4",
                    imageStyle: "feature4-bg",
                    imageIcon: `${ImgIcon4}`,
                    verbage: "experience the adrenaline rush of the fastest growing extreme sport"
                });
                break;
        }

    }

    handleCurrentPage(pageID) {
        if (pageID == this.state.currentPage) {
            this.setState({ 
                currentClass: "current-page"
            });
        } else {
            this.setState({ 
                currentClass: ""
            });
        }
    }

    render() {
        return(
            <div id="front-feature">
                <FrontFeatureBase 
                    bgImageStyle={this.state.imageStyle}
                    iconSource={this.state.imageIcon}
                    verbage={this.state.verbage}
                />

                <PageTurn
                    handlePages={(event) => this.changePage(event)}
                    currentPage={(event) => this.handleCurrentPage(event)}
                />
            </div>
        );
    }
}

export default FrontFeature;