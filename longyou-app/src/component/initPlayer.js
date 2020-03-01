import React, { Component } from 'react';
import '../App.css';
import Character from './character';


class initPlayer extends Component {
    constructor(props) {
        super(props)
        this.updatePlayerName = this.updatePlayerName.bind(this)
    }
    updatePlayerName = (event) => {
        // let player = this.state.player; 
        //console.log( this.state.player)
        this.setState({ name: event.target.value })
        this.props.updatePlayerName(this.props.index, event.target.value);
    }

    render() {
        const mystyle = {
            backgroundColor: "peachpuff",
            height: "100px",
            width: "100px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
        };
        const inputStyle = {
            width: "100px",
            marginTop: "10px"
        }
        const styleX = {
            position: "absolute",
            top: 0,
            right: 0,
            backgroundColor: "red",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            textAlign: "center",
            color: "white",
            cursor: "pointer",

        }
        const character = {
            width: "100%",
            height: "100%",
            borderRadius: "50%",
        }
        let removePlayer = this.props.removePlayer;
        let name = this.props.player.name;
        return (
            <div className="initPlayerBox">
                <div className="initPlayer" style={mystyle} >
                    <div style={styleX} onClick={() => removePlayer(this.props.index)}><samp>x</samp></div>
                    <Character selectCharacterStatus={this.props.selectCharacterStatus} characters={this.props.characters} updatePlayerCharacter={this.props.updatePlayerCharacter} index={this.props.index} />
                </div>
                <input placeholder="玩家名称" style={inputStyle} onChange={this.updatePlayerName} value={name}></input>
            </div>

        );
    }
}
export default initPlayer; // Don’t forget to use export default! <img src="" alt={"character" + this.props.index} />