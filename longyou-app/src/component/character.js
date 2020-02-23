import React, { Component } from 'react';
import '../App.css';

class Character extends Component {
    state = {
        characterSelect: 0,
        characters: this.props.characters
    }

    nextCharacter = () => {
        if (this.state.characterSelect < this.state.characters.length - 1) {
            this.setState({ characterSelect: this.state.characterSelect + 1 });

        }
        console.log(this.state.characterSelect)
    }
    previousCharacter = () => {
        if (this.state.characterSelect > 0) {
            this.setState({ characterSelect: this.state.characterSelect - 1 });

        }
        console.log(this.state.characterSelect)


    }
    componentDidMount() {
        console.log(this.props.characters)
    }
    render() {
        const mystyle = {
            display: "flex",
            alignItems: "center"
        }

        this.props.updatePlayerCharacter(this.props.index, this.props.index)
        const character = {
            width: "100px",
            height: "100px",
            borderRadius: "50%",
        }
        return (
            <div className="character" style={mystyle}>
                <div className="arraow" onClick={this.previousCharacter}>❮</div>
                <img style={character} src={process.env.PUBLIC_URL + this.state.characters[this.state.characterSelect].img} alt="test" />

                <div className="arraow" onClick={this.nextCharacter}>❯</div>
            </div>
        );
    }
}
export default Character; // Don’t forget to use export default!