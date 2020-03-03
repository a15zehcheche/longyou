import React, { Component } from 'react';
import Map from '../component/map'
import '../App.css';
import Player from '../component/player'
import date from '../date'

class GameScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            point: 0,
            players: this.props.players,
            //players: date.players,
            pases: 0,

        }
    }
    next = () => {
        this.state.pases = this.randomNum();
        this.state.players[this.state.point].mapPosition += this.state.pases;
        console.log(this.state.players[this.state.point].mapPosition)
        console.log(this.state.point)
        this.setState({ players: this.state.players })
        if (this.state.point < this.state.players.length - 1) {
            this.state.point += 1;
        } else {
            this.state.point = 0;
        }

    }
    randomNum = () => {
        return Math.floor(Math.random() * 6) + 1

    }

    render() {
        const players = this.state.players.map((playerDate, index) => <Player key={index} date={playerDate} />);

        return (
            <div style={{ display: "flex" }}>

                <Map players={this.state.players} />
                <div style={{
                    display: "flex",
                    width: "20%",
                    flexDirection: "column",
                    height: "100vh"
                }}>
                    <div className="playerContainer">
                        {players}
                    </div>
                    <div>
                        <div>pases {this.state.pases}</div>
                        <div>next player: {this.state.players[this.state.point].id}</div>
                        <button onClick={this.next}>next</button>
                    </div>
                </div>
            </div>
        );
    };
}

export default GameScreen;
