import React, { Component } from 'react';
import '../App.css';

class Player extends Component {
    showPlayerInfo = () => {
        this.props.showPlayerInfo(this.props.date.id)
    }
    render() {
        const mystyle = {
            backgroundColor: this.props.date.color,
            border: "2px solid " + this.props.date.character.color,
        }


        if (this.props.date.active) {
            mystyle.boxShadow = "0px 0px 5px 4px" + this.props.date.character.color;
        }
        return (

            <div className="player" style={mystyle}>
                <a id={"playerInfo" + this.props.date.id} href={"#playerInfo" + this.props.date.id}></a>
                <div className="character_img_container">
                    <a href={"#" + this.props.date.id}>
                        <img className="character_img" src={process.env.PUBLIC_URL + this.props.date.character.img} alt="img" />
                    </a>
                </div>
                <div className="playerDate">
                    <h3>{this.props.date.character.name}</h3>
                    <ul>
                        <li>name : {this.props.date.name}</li>
                        <li>money: {this.props.date.money}</li>
                    </ul>
                </div>
                <div className="playerInfo">
                    <img style={{ cursor: "pointer" }} src={process.env.PUBLIC_URL + "/images/icons8-info-24.png"} onClick={this.showPlayerInfo} alt="info" />
                </div>
            </div>

        );
    }
}
export default Player; // Don’t forget to use export default!