import React, { Component } from 'react';
import '../App.css';

class Player extends Component {
    render() {
        const mystyle = {
            backgroundColor: this.props.date.color,
        }
        return (
            <div className="player" style={mystyle}>
                <h3>{this.props.date.character}</h3>
                <ul>
                    <li>name : {this.props.date.name}</li>
                    <li>money: {this.props.date.money}</li>
                    <li>
                        <a href={"#" + this.props.date.id}>{this.props.date.id}</a>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Player; // Don’t forget to use export default!