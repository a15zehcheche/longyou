import React, { Component } from 'react';
import Map from '../component/map'
import '../App.css';
import Player from '../component/player'
import date from '../date'
import $ from 'jquery';

class GameScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            point: 0,
            players: this.props.players,
            //players: date.players,
            dau:0,
            pases: 0,
            caminarInterval: null,

        }
    }
    next = () => {
        this.state.dau = this.randomNum();
        this.state.pases = this.state.dau;
        this.state.caminarInterval = setInterval(this.caminar, 1000);

        console.log(this.state.players[this.state.point].mapPosition)
        console.log(this.state.point)
        if (this.state.point < this.state.players.length - 1) {
            this.state.point += 1;
        } else {
            this.state.point = 0;
        }

    }
    randomNum = () => {
        return Math.floor(Math.random() * 6) + 1

    }
    caminar = () => {
        if (this.state.players[this.state.point].mapPosition > 40) {
            this.state.players[this.state.point].mapPosition -= 40;
        }
        this.state.players[this.state.point].mapPosition += 1;
        this.setState({ players: this.state.players })

        let playerLink = "#" + this.state.players[this.state.point].id;
        $(playerLink).click()

        this.state.pases -= 1;
        if (this.state.pases == 0) {
            clearInterval(this.state.caminarInterval);
        }
        console.log(playerLink);

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
                        <div>pases {this.state.dau}</div>
                        <div>next player: {this.state.players[this.state.point].id}</div>
                        <button onClick={this.next}>next</button>
                    </div>
                </div>
            </div>
        );
    };
}

export default GameScreen;
