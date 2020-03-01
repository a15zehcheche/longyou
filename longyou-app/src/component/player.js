import React, { Component } from 'react';
import '../App.css';

class Player extends Component {
    render() {
        const mystyle = {
            backgroundColor: this.props.date.color,
            display:"flex",
        }
        return (
            <div className="player" style={mystyle}>
                <div className="character_img_container">
                    <img className="character_img" src={process.env.PUBLIC_URL + this.props.date.character.img}/>
                </div>
                <div className="playerDate">
                    <h3>{this.props.date.character.name}</h3>
                    <ul>
                        <li>name : {this.props.date.name}</li>
                        <li>money: {this.props.date.money}</li>
                        <li>
                            <a href={"#" + this.props.date.id}>{this.props.date.id}</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Player; // Don’t forget to use export default!