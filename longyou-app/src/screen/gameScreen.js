import React, { Component } from 'react';
import Map from '../component/map'
import '../App.css';
import Player from '../component/player'
import date from '../date'

class GameScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    
    render() {
        //const players = this.props.players.map((playerDate,index) => <Player key={index} date={playerDate} />);
        const players = date.players.map((playerDate,index) => <Player key={index} date={playerDate} />);

        return (
            <div>
                <div className="playerContainer">
                    {players}
                </div>
                <Map players={date.players} />
            </div>
        );
    };
}

export default GameScreen;
