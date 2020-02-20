import React, { Component } from 'react';
import '../App.css';

class Card extends Component {
    render() {
        const mystyle = {
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
        return (
            <div className="cell" style={mystyle}>
              
            </div>
        );
    }
}
export default Card; // Don’t forget to use export default!