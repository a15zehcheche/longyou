import React, { Component, useState } from 'react';
import Map from '../component/map'
import '../App.css';
import Player from '../component/player'
import date from '../date'
import $ from 'jquery';
import 'react-input-range/lib/css/index.css';
import InputRange from 'react-input-range';
import SweetAlert from 'sweetalert2-react';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import 'bootstrap/dist/css/bootstrap.min.css';




class GameScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            point: 0,
            players: this.props.players,
            //players: date.players,
            dau: 0,
            pases: 0,
            caminarInterval: null,
            scale: 1,
            value: 10,


        }
    }

    next = () => {
        if (this.state.pases == 0) {
            this.state.dau = this.randomNum();
            this.state.pases = this.state.dau;
            this.state.caminarInterval = setInterval(this.caminar, 1000);

            //console.log(this.state.players[this.state.point].mapPosition)
            //console.log(this.state.point)
            if (this.state.point < this.state.players.length - 1) {
                this.state.point += 1;
            } else {
                this.state.point = 0;
            }
            this.setState({ dau: this.state.dau });
        }


    }
    randomNum = () => {
        return Math.floor(Math.random() * 6) + 1

    }
    caminar = () => {
        if (this.state.players[this.state.point].mapPosition > 40) {
            this.state.players[this.state.point].mapPosition -= 40;
        }
        this.state.players[this.state.point].mapPosition += 1;
        this.setState({ players: this.state.players })

        // let playerLink = "#" + this.state.players[this.state.point].id;
        //$(playerLink).click()
        //console.log(playerLink);

        this.state.pases -= 1;
        if (this.state.pases == 0) {
            clearInterval(this.state.caminarInterval);
            this.checkAction();
        }
    }
    checkAction = () => {
        let playerPosition = this.state.players[this.state.point].mapPosition;
        let cellAction = date.map.cells.filter(cell => cell.id == playerPosition)
        cellAction = cellAction[0];
        console.log(cellAction)
        if (cellAction.hasOwnProperty('action')) {
            if (cellAction.action.hasOwnProperty("missage")) {
                Swal.fire({
                    title: '提醒',
                    text: cellAction.action.missage,
                    showConfirmButton: false,
                    timer: 2000
                })
                this.state.players[this.state.point].money += cellAction.action.value;
                this.setState({players : this.state.players})
            }
            if (cellAction.action.hasOwnProperty("question")) {
                const swalWithBootstrapButtons = Swal.mixin({
                    customClass: {
                        confirmButton: 'btn btn-success',
                        cancelButton: 'btn btn-danger'
                    },
                    buttonsStyling: false
                })

                swalWithBootstrapButtons.fire({
                    title: '购买发地产',
                    text: cellAction.action.question.missage,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: '购买',
                    cancelButtonText: '取消',
                    reverseButtons: true
                }).then((result) => {
                    if (result.value) {
                        Swal.fire({
                            title: '提醒',
                            text: '购买成功',
                            showConfirmButton: false,
                            timer: 1500,
                            icon: 'success',
                        })
                        this.state.players[this.state.point].money += cellAction.action.question.value;
                        this.setState({players : this.state.players})
                        /*
                        swalWithBootstrapButtons.fire(
                            '提示',
                            '购买成功',
                            'success'
                        )*/
                    } else if (
                        /* Read more about handling dismissals below */
                        result.dismiss === Swal.DismissReason.cancel
                    ) {
                        /*
                        swalWithBootstrapButtons.fire(
                            '提示',
                            '已取消',
                            'error'
                        )*/
                    }
                })
            }



        }

    }

    render() {
        const players = this.state.players.map((playerDate, index) => <Player key={index} date={playerDate} />);

        return (
            <div style={{ display: "flex" }}>

                <Map scale={this.state.scale} players={this.state.players} />
                <div style={{
                    display: "flex",
                    width: "20%",
                    flexDirection: "column",
                    height: "100vh"
                }}>
                    <div className="playerContainer">
                        {players}
                    </div>
                    <div>
                        <div>pases {this.state.dau}</div>
                        <div>next player: {this.state.players[this.state.point].id}</div>
                        <div>{this.state.scale}</div>
                        <div>{this.state.value}</div>
                        <div>

                        </div>
                        <div style={{ width: "150px" }}>
                            <InputRange
                                maxValue={10}
                                minValue={4}
                                value={this.state.value}
                                onChange={scale => { this.setState({ value: scale }); scale /= 10; this.setState({ scale }); }} />
                        </div>



                        <button onClick={this.next}>next</button>
                    </div>
                </div>
            </div>
        );
    };
}

export default GameScreen;
