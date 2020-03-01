import React, { Component } from 'react';
import '../App.css';

class Character extends Component {
    state = {
        characterSelect: 0,
        characters: this.props.characters
    }

    nextCharacter = () => {
        let index = this.state.characterSelect;
        let indexCopy = index;
        if (index < this.state.characters.length - 1) {
            index += 1;
        } else {
            index = 0;
        }
        if (this.state.characters[index].isSelect) {
            //console.log("repit")
            if (indexCopy !== 0) {
                this.props.selectCharacterStatus(indexCopy)
            }
            this.selectNextRepit();
        } else {
            if (indexCopy !== 0) {
                this.props.selectCharacterStatus(indexCopy)
            }
            if (index !== 0) {
                this.props.selectCharacterStatus(index)
            }
            this.setState({ characterSelect: index });
            this.setPlayerCharacter(this.props.index, this.state.characters[index],index);

        }
        //console.log(this.state.characters)
    }
    selectNextRepit = () => {
        let index = this.state.characterSelect;
        if (index < this.state.characters.length - 1) {
            index += 1;
        } else {
            index = 0;
        }

        if (this.state.characters[index].isSelect) {
            //console.log("repit")
            this.state.characterSelect = index
            this.setState({ characterSelect: index });
            this.selectNextRepit();

        } else {
            if (index !== 0) {
                this.props.selectCharacterStatus(index)
            }
            this.setState({ characterSelect: index });
            this.setPlayerCharacter(this.props.index, this.state.characters[index],index);
        }
    }
    previousCharacter = () => {
        let index = this.state.characterSelect;
        let indexCopy = index;
        if (index > 0) {
            index -= 1;
        } else {
            index = this.state.characters.length - 1;
        }

        if (this.state.characters[index].isSelect) {
            //console.log("repit")
            if (indexCopy !== 0) {
                this.props.selectCharacterStatus(indexCopy)
            }
            this.selectPreviousRepit();
        } else {
            if (indexCopy !== 0) {
                this.props.selectCharacterStatus(indexCopy)
            }
            if (index !== 0) {
                this.props.selectCharacterStatus(index)
            }
            this.setState({ characterSelect: index });
            this.setPlayerCharacter(this.props.index, this.state.characters[index],index);

        }

    }
    selectPreviousRepit = () => {
        let index = this.state.characterSelect;
        if (index > 0) {
            index -= 1;
        } else {
            index = this.state.characters.length - 1;
        }

        if (this.state.characters[index].isSelect) {
            //console.log("repit")
            this.state.characterSelect = index
            this.setState({ characterSelect: index });
            this.selectPreviousRepit();

        } else {
            if (index !== 0) {
                this.props.selectCharacterStatus(index)
            }
            this.setState({ characterSelect: index });
            this.setPlayerCharacter(this.props.index, this.state.characters[index],index);
        }
    }

    setPlayerCharacter = (index, date,characterIndex) => {
        if (characterIndex == 0) {
            this.props.updatePlayerCharacter(index, null);
        } else {
            this.props.updatePlayerCharacter(index, date);
        }
    }

    componentDidMount() {

    }
    render() {
        const mystyle = {
            display: "flex",
            alignItems: "center"
        }
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