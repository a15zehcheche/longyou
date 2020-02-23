import React, { Component } from 'react';
//import logo from './logo.svg';
import Map from '../component/map'
import '../App.css';
import Player from '../component/initPlayer'
import date from '../date'
import GameScreen from './gameScreen'


class StartScreen extends Component {
    
    state = {
        start: false,
        players: [],
        characters:[],
    }

    handleStartClick = () => {
        //console.log(this.state.players)
        this.setState({ players: this.state.players })
        this.setState({ start: true });
    }
    addPlayer = () => {
        if (this.state.players.length < 7) {
            let player = {
                "characterId": 0,
                "name": "",
                "money": null,
                "id": null,
                "color": null
            };
            this.state.players.push(player)
            this.setState({ players: this.state.players });
        }
    }
    removePlayer = (index) => {
        let players = this.state.players;
        if (players.length > 2) {
            players.splice(index, 1);
            this.setState({ players: this.state.players });
        }
        console.log("remove player " + index);

    }
    updatePlayerName = (index, playerName) => {
        this.state.players[index].name = playerName;
        this.setState({ players: this.state.players })
    }
    updatePlayerCharacter = (index, characterId) => {
        this.state.players[index].characterId = characterId;
        //this.setState({ players: this.state.players })
    }
    updateCharacterStatus=(index)=>{
        this.state.characters[index].isSelect = !this.state.characters[index].isSelect
    }
    componentDidMount() {
        this.addPlayer();
        this.addPlayer();
        this.state.characters = date.characters.map((character)=>({...character, isSelect:false}));
        //console.log(this.state.characters)


    }
    render() {
        let removePlayer = this.removePlayer;
        let updatePlayerName = this.updatePlayerName;
        let players = this.state.players;
        const htmlPlayers = players.map((player, index) =>
            <Player key={index} player={player} index={index} removePlayer={removePlayer} updatePlayerName={updatePlayerName} updatePlayerCharacter={this.updatePlayerCharacter} characters={this.state.characters}/>
        );


        if (!this.state.start) {
            return (
                <div className="initGame">
                    <h1 style={{ margin: "10px" }}>欢迎来到龙游</h1>
                    <div className="playerContainerInit">
                        {htmlPlayers}
                        <div className="initPlayerBox" >
                            <div style={{ margin: "20px", backgroundColor: "white", width: "50px", borderRadius: "50%", height: "50px", justifyContent: "center", alignItems: "center", display: "flex" }} onClick={this.addPlayer}>
                                <h1 style={{ fontSize: "50px",	cursor: "pointer" }}>+</h1></div>
                        </div>
                    </div>

                    <button onClick={this.handleStartClick}>start</button>
                </div>
            )


        }
        return (
            <GameScreen players={this.state.players} />
        )

    };
}

export default StartScreen;
