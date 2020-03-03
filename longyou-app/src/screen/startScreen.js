import React, { Component } from 'react';
//import logo from './logo.svg';
import Map from '../component/map'
import '../App.css';
import Player from '../component/initPlayer'
import date from '../date'
import GameScreen from './gameScreen'


class StartScreen extends Component {

    state = {
        //jump this page
        start: false,
        players: [],
        characters: [],
    }

    handleStartClick = () => {
        console.log(this.state.players)
        this.setState({ players: this.state.players })
        this.checkDate();
        this.setState({ start: true });
    }
    checkDate = () => {
        this.state.players.map((player, index) => {
            if (player.name == "") {
                player.name = this.randomName(index);
            }
            if (player.character == null) {
                player.character = this.randomCharacter();
            }
            player.id = this.randomName(index);
            player.mapPosition = 1;

        })
    }
    randomName = (index) => {
        return "Player" + (index + 1);
    }
    randomCharacter = () => {
        let characterAvailable = this.state.characters.filter(character => character.isSelect == false && character.id != 0);
        let index = Math.floor(Math.random() * characterAvailable.length)
        this.state.characters = characterAvailable;
        this.selectCharacterStatus(index)
        //console.log(characterAvailable);
        return characterAvailable[index];
    }

    addPlayer = () => {
        if (this.state.players.length < 7) {
            let player = {
                "name": "",
                "money": null,
                "id": null,
                "color": null,
                "character": null,
                "mapPosition": null,
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
        //console.log("remove player " + index);

    }
    updatePlayerName = (index, playerName) => {
        this.state.players[index].name = playerName;
        this.setState({ players: this.state.players })
    }
    updatePlayerCharacter = (index, character) => {
        this.state.players[index].character = character;
        //this.setState({ players: this.state.players })

    }
    selectCharacterStatus = (index) => {
        this.state.characters[index].isSelect = !this.state.characters[index].isSelect
    }
    componentDidMount() {
        this.addPlayer();
        this.addPlayer();
        this.state.characters = date.characters.map((character) => ({ ...character, isSelect: false }));
        //console.log(this.state.characters)


    }
    render() {
        let removePlayer = this.removePlayer;
        let updatePlayerName = this.updatePlayerName;
        let players = this.state.players;
        let updatePlayerCharacter = this.updatePlayerCharacter;
        const htmlPlayers = players.map((player, index) =>
            <Player key={index} player={player} index={index} removePlayer={removePlayer} updatePlayerName={updatePlayerName} updatePlayerCharacter={updatePlayerCharacter} characters={this.state.characters} selectCharacterStatus={this.selectCharacterStatus} />
        );


        if (!this.state.start) {
            return (
                <div className="initGame">
                    <h1 style={{ margin: "10px" }}>欢迎来到龙游</h1>
                    <div className="playerContainerInit">
                        {htmlPlayers}
                        <div className="initPlayerBox" >
                            <div style={{ margin: "20px", backgroundColor: "white", width: "50px", borderRadius: "50%", height: "50px", justifyContent: "center", alignItems: "center", display: "flex" }} onClick={this.addPlayer}>
                                <h1 style={{ fontSize: "50px", cursor: "pointer" }}>+</h1></div>
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
