import React, { Component } from 'react';
import './dice.scss';
import styled, { keyframes } from 'styled-components';
class Dice extends Component {
   state = {
      nowPosition: {
         "x": 0,
         "y": 0,
      },
      rotatingSpeed: 5,
      dice: [
         {
            "number": 1,
            "x": 0,
            "y": 180,
         },
         {
            "number": 2,
            "x": 0,
            "y": 90,
         },
         {
            "number": 3,
            "x": 270,
            "y": 0,
         },
         {
            "number": 4,
            "x": 90,
            "y": 0,
         },
         {
            "number": 5,
            "x": 0,
            "y": 270,
         },
         {
            "number": 6,
            "x": 0,
            "y": 0,
         },
      ],
   }

   change = () => {
      let number = 4;
      this.setState({ nowPosition: this.state.dice[number - 1] })
   }

   render() {
      let nowPosition = this.state.dice[this.props.number - 1]
      const DiceBox = styled.div`
         width: 60px;
         height: 60px;
         position: relative;
         transform-style: preserve-3d;
         transform: rotateX(${nowPosition.x * this.state.rotatingSpeed}deg) rotateY(${nowPosition.y * this.state.rotatingSpeed}deg) translateX(0);
         transition: transform 2s;
         `



      return (
         <>
            <div className="dice-container">
               <DiceBox className="dice">
                  <div className="front">
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
                  <div className="back">
                     <span></span>
                  </div>
                  <div className="right">
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
                  <div className="left">
                     <span></span>
                     <span></span>
                  </div>
                  <div className="top">
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
                  <div className="bottom">
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                  </div>
               </DiceBox>
            </div>
           
         </>
      );
   }
}
export default Dice; // Don’t forget to use export default!