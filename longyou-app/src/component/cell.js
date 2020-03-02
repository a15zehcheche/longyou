import React, { Component } from 'react';
import '../App.css';
import Media from 'react-media';
import Player from './player';



class Cell extends Component {

    render() {
        const pcStyle = {
            height: this.props.cellDate.height + "px",
            width: this.props.cellDate.width + "px",
            top: this.props.cellDate.top + "px",
            left: this.props.cellDate.left + "px",
            position: "absolute",
            backgroundColor: "lightblue",
            opacity: 0.5,
            border: "3px black solid",
            boxSizing: "border-box",
        }
        const mobileStyle = {
            height: this.props.cellDate.height / 2 + "px",
            width: this.props.cellDate.width / 2 + "px",
            top: this.props.cellDate.top / 2 + "px",
            left: this.props.cellDate.left / 2 + "px",
            position: "absolute",
            backgroundColor: "lightblue",
            opacity: 0.5,
            border: "3px black solid",
            boxSizing: "border-box",
        }
        let players = this.props.players.filter(player => player.mapPosition == this.props.cellDate.id);
        console.log( this.props.players)
        let piece = players.map((player, index) => <img className="piece" key={index} src={process.env.PUBLIC_URL + player.character.img} />);
        console.log(piece)
        return (
            
            <Media query={{ maxWidth: 599 }}>
                {matches =>
                    matches ? (
                        //The document is less than 600px wide.
                        <div id={this.props.cellDate.id} className="cell" style={mobileStyle}>
                        </div>
                    ) : (
                            //The document is at least 600px wide.
                            <div id={"cell" + this.props.cellDate.id} className="cell" style={pcStyle}>
                                {piece}
                                <a href={"#cell"+ this.props.cellDate.id}/>
                            </div>
                        )
                }
            </Media>

        );
    }
}
export default Cell; // Don’t forget to use export default!  $('#cell38>a').click()