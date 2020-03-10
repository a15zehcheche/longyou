import React, { Component } from 'react';
import '../App.css';
import Media from 'react-media';
import Player from './player';



class Cell extends Component {

    render() {
        const pcStyle = {
            height: this.props.cellDate.height * this.props.scale + "px",
            width: this.props.cellDate.width * this.props.scale + "px",
            top: this.props.cellDate.top * this.props.scale + "px",
            left: this.props.cellDate.left * this.props.scale + "px",
            position: "absolute",
            //backgroundColor: "lightblue",
            //opacity: 0.5,
            border: "2px black solid",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",

        }
        const mobileStyle = {
            height: this.props.cellDate.height / 2 * this.props.scale + "px",
            width: this.props.cellDate.width / 2 * this.props.scale + "px",
            top: this.props.cellDate.top / 2 * this.props.scale + "px",
            left: this.props.cellDate.left / 2 * this.props.scale + "px",
            position: "absolute",
            //backgroundColor: "lightblue",
            //opacity: 0.5,
            border: "3px black solid",
            boxSizing: "border-box",
        }

        let players = this.props.players.filter(player => player.mapPosition == this.props.cellDate.id);
        //console.log( this.props.players)
        let pieceContainerStyle = {
            width: 55 * this.props.scale + "px",
            height: 55 * this.props.scale + "px",
        }
        let piece = players.map((player, index) => <div style={pieceContainerStyle} key={index} > <a href={"#" + player.id}> <img className="piece" id={player.id} src={process.env.PUBLIC_URL + player.character.img} /></a></div>);
        //console.log(piece)

        let home = null;
        let space;
        let test = <div style={{ color: "white" }}>{this.props.cellDate.id}</div>

        let homeStyle = {
            width: "100%",
            height: "23%",
        }
        let spaceStyle = {
            width: "100%",
            height: "77%"
        }
        if (this.props.cellDate.hasOwnProperty('home')) {
            if (this.props.cellDate.home.position == "top") {
                homeStyle.marginBottom = "2px"

            } else if (this.props.cellDate.home.position == "bottom") {
                pcStyle.flexDirection = "column-reverse";

            } else if (this.props.cellDate.home.position == "left") {
                pcStyle.flexDirection = "row"
                homeStyle.width = "22%"
                homeStyle.height = "100%"
                homeStyle.marginRight= "5px"
                spaceStyle.width ="78%"
                spaceStyle.height = "100%"
            } else if (this.props.cellDate.home.position == "right") {
                pcStyle.flexDirection = "row-reverse"
                homeStyle.width = "22%"
                homeStyle.height = "100%"
                homeStyle.marginLeft= "5px"
                spaceStyle.width ="78%"
                spaceStyle.height = "100%"

            }
            // console.log("home" + this.props.cellDate.id)
            home = <div style={homeStyle} className="homeContainer">home</div>
            space = <div className="space" style={spaceStyle}>{test}{piece}</div>
        } else {
            space = <div className="space" style={{ width: "100%", height: "100%" }}>{test}{piece}</div>

        }

        return (
            <div id={"cell" + this.props.cellDate.id} className="cell" style={pcStyle}>
                {home}
                {space}
                <a href={"#cell" + this.props.cellDate.id} />
            </div>


        );
    }
}
export default Cell; // Don’t forget to use export default!  $('#cell38>a').click()

/*
   <Media query={{ maxWidth: 599 }}>
                {matches =>
                    matches ? (
                        //The document is less than 600px wide.
                        <div id={this.props.cellDate.id} className="cell" style={mobileStyle}>
                        </div>
                    ) : (
                            //The document is at least 600px wide.
                            <div id={"cell" + this.props.cellDate.id} className="cell" style={pcStyle}>
                                {home}
                                {space}
                                <a href={"#cell" + this.props.cellDate.id} />
                            </div>
                        )
                }
            </Media>
*/