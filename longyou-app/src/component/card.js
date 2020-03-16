import React, { Component } from 'react';
import '../App.css';
import Media from 'react-media';


class Card extends Component {


    render() {
        const pcStyle = {
            height: this.props.cardDate.height * this.props.scale + "px",
            width: this.props.cardDate.width * this.props.scale + "px",
            top: this.props.cardDate.top * this.props.scale + "px",
            left: this.props.cardDate.left * this.props.scale + "px",
            position: "absolute",
           // backgroundColor: "lightblue",
           // opacity: 0.5,
            border: "2px black solid",
            boxSizing: "border-box",
            transform: "rotate(-45deg)",
            //borderRadius: 40 * this.props.scale+"px"
        }
        const mobileStyle = {
            height: this.props.cardDate.height / 2 * this.props.scale + "px",
            width: this.props.cardDate.width / 2 * this.props.scale + "px",
            top: this.props.cardDate.top / 2 * this.props.scale + "px",
            left: this.props.cardDate.left / 2 * this.props.scale + "px",
            position: "absolute",
            backgroundColor: "lightblue",
            opacity: 0.5,
            border: "3px black solid",
            boxSizing: "border-box",
            transform: "rotate(-45deg)",
            borderRadius: "20px"
        }

        return (
            <Media query={{ maxWidth: 599 }}>
                {matches =>
                    matches ? (
                        //The document is less than 600px wide.
                        <div className="card" style={mobileStyle}>
                        </div>
                    ) : (
                            //The document is at least 600px wide.
                            <div className="card" style={pcStyle}>
                                <img  style={{height:"100%"}} src={process.env.PUBLIC_URL + this.props.cardDate.card.img} alt="card" />
                            </div>
                        )
                }
            </Media>
        );
    }
}
export default Card; // Don’t forget to use export default!