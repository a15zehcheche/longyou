import React, { Component } from 'react';
import '../App.css';

class Player extends Component {
    render() {
        return (
            <div class="player">
                <h3>{this.props.date.character}</h3>
                <ul>
                    <li>name : {this.props.date.name}</li>
                    <li>money: {this.props.date.money}</li>
                    <li>
                        <a href={"#" + this.props.date.id}>bottomLeft</a>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Player; // Don’t forget to use export default!