import React, { Component } from 'react';
import '../App.css';
import Media from 'react-media';


class Card extends Component {
    
    
    render() {
        const pcStyle = {
            height: this.props.cardDate.height + "px",
            width: this.props.cardDate.width + "px",
            top:this.props.cardDate.top + "px",    
            left: this.props.cardDate.left + "px",
            position: "absolute",
            backgroundColor: "lightblue",
            opacity: 0.5,
            border: "3px black solid",
            boxSizing: "border-box",
            transform: "rotate(-45deg)",
            borderRadius: "40px"
        }
        const mobileStyle = {
            height: this.props.cardDate.height / 2 + "px",
            width: this.props.cardDate.width / 2 + "px",
            top: this.props.cardDate.top / 2 + "px",
            left: this.props.cardDate.left / 2 + "px",
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
                        </div>
                    )
            }
        </Media>
        );
    }
}
export default Card; // Don’t forget to use export default!