import React, { Component } from 'react';
import '../App.css';

class Cell extends Component {
    render() {
        const mystyle = {
            height: this.props.cellDate.height + "px",
            width: this.props.cellDate.width + "px",
            top:this.props.cellDate.top + "px",    
            left: this.props.cellDate.left + "px",
            position: "absolute",
            backgroundColor: "lightblue",
            opacity: 0.5,
            border: "3px black solid",
            boxSizing: "border-box",
          }
        return (
            <div className="cell" style={mystyle}>
              
            </div>
        );
    }
}
export default Cell; // Don’t forget to use export default!