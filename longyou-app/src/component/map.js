import React, { Component } from 'react';
import '../App.css';
import $ from "jquery";
import map from '../res/map.png';
import Cell from './cell'
import Card from './card'
import date from '../date'




class Map extends Component {
  componentDidMount() {
    $('document').ready(function () {
      const slider = $('.mapcontainer');
      let isDown = false;
      let startX;
      let startY
      let scrollLeft;
      let scrollTop;
      let fast = 2;

      slider.mouseup(function () {
        isDown = false;

      }).mousedown(function (e) {
        isDown = true;
        //holizontal
        startX = e.pageX - slider.offset().left;
        scrollLeft = slider.scrollLeft();
        //vectial
        startY = e.pageY - slider.offset().top;
        scrollTop = slider.scrollTop();


      }).mousemove(function (e) {
        if (!isDown) return;
        e.preventDefault();
        //holizontal
        const x = e.pageX - slider.offset().left;
        const walkX = (x - startX) * fast; //scroll-fast
        slider.scrollLeft(scrollLeft - walkX)  //slider.scrollLeft =  scrollLeft - walk;
        //vectial
        const y = e.pageY - slider.offset().top;
        const walkY = (y - startY) * fast; //scroll-fast
        slider.scrollTop(scrollTop - walkY);


      }).mouseleave(function () {
        isDown = false;
      })
    });
  }


  render() {
    const Cells = date.map.cells.map((cellDate) => <Cell key={"cell" + cellDate.id} players={this.props.players} cellDate={cellDate} />);
    const Cards = date.map.cards.map((cardDate, index) => <Card key={"card" + index} cardDate={cardDate} />);
    return (
      <div style={{ position: "relative" }}>
        <div className="mapcontainer" >
          <div className="map">
            <img width="100%" src={map} alt="map" />
            <div id="bottomLeft">bottomLeft</div>
            <div id="bottomRight">bottomRight</div>
            <div id="topLeft">topLeft</div>
            <div id="topRight">topRight</div>
          </div>
          <div>
            {Cells}
          </div>
          <div>
            {Cards}
          </div>
        </div>
      </div>

    );
  }
}
export default Map; // Don’t forget to use export default!