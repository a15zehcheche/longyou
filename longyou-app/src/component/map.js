import React, { Component } from 'react';
import '../App.css';
import $ from "jquery";
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
    const y =  e.pageY - slider.offset().top;
    const walkY = (y - startY) * fast; //scroll-fast
    slider.scrollTop(scrollTop - walkY) ;


  }).mouseleave(function () {
    isDown = false;
  })
});


class Map extends Component {

  render() {
    return (
      <div className="mapcontainer">
        <div className="map">
          <img width="100%" src={process.env.PUBLIC_URL + '/map.png'}  alt="map" />
          <div id="bottomLeft">bottomLeft</div>
          <div id="bottomRight">bottomRight</div>
          <div id="topLeft">topLeft</div>
          <div id="topRight">topRight</div>
        </div>
      </div>
    );
  }
}
export default Map; // Don’t forget to use export default!