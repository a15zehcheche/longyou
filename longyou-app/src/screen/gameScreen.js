import React, { Component } from 'react';
import Map from '../component/map'
import '../App.css';
import Player from '../component/player'
import date from '../date'
import 'react-input-range/lib/css/index.css';
import InputRange from 'react-input-range';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayerInfo from '../component/playerInfo';
import { queryAllByAltText } from '@testing-library/react';

class GameScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            players: this.props.players,
            point: this.props.players.length - 1,
            //players: date.players,
            dau: 0,
            pases: 0,
            caminarInterval: null,
            scale: 1,
            value: 10,
            show: false,
            playerInfo: null,
        }
    }

    next = () => {
        if (this.state.pases === 0) {
            //this.state.dau = this.randomNum();
            this.state.pases = this.state.dau;
            this.state.caminarInterval = setInterval(this.caminar, 500);

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

        this.state.players[this.state.point].mapPosition += 1;

        // let playerLink = "#" + this.state.players[this.state.point].id;
        //$(playerLink).click()
        //console.log(playerLink);

        if (this.state.players[this.state.point].mapPosition > 40) {
            this.state.players[this.state.point].mapPosition -= 40;
        }
        this.state.pases -= 1;
        if (this.state.pases <= 0) {
            clearInterval(this.state.caminarInterval);
            this.checkAction();
            this.setState({ pases: 0 })
        }

        this.setState({ players: this.state.players })


    }
    checkAction = () => {
        let playerPosition = this.state.players[this.state.point].mapPosition;
        //  console.log(playerPosition)
        let cellAction = date.map.cells.filter(cell => cell.id === playerPosition)
        cellAction = cellAction[0];
        //  console.log(cellAction)
        if (cellAction.hasOwnProperty('action')) {
            if (cellAction.action.hasOwnProperty("missage")) {
                this.simperNotification('提醒', cellAction.action.missage, 2000)
                this.state.players[this.state.point].money += cellAction.action.value;
                this.setState({ players: this.state.players })
            }
            if (cellAction.hasOwnProperty("home")) {
                if (cellAction.home.propietario === false) {
                    this.shoppingDeedNotifi(cellAction);
                } else {
                    if (cellAction.home.propietario !== this.state.players[this.state.point].id) {
                        this.payTolls(cellAction)
                    } else {
                        this.buyHouse(this.state.players[this.state.point], cellAction)
                    }
                }

            }

        }

    }
    buyHouse = (player, cell) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            text: '是否盖建房子?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: '是',
            cancelButtonText: '取消',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                Swal.fire({
                    title: '提醒',
                    text: '盖建成功',
                    showConfirmButton: false,
                    timer: 1500,
                    icon: 'success',
                })
                let deed = player.deeds.filter(deed => deed.name === cell.home.name);
                deed = deed[0]
                player.money -= deed.Build.house;
                cell.home.house += 1;
                this.setState({ players: this.state.players })
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                /*
                swalWithBootstrapButtons.fire(
                    '提示',
                    '已取消',
                    'error'
                )*/
            }
        })

    }
    payTolls = (cellAction) => {
        let countHouse = cellAction.home.house;
        let countInn = cellAction.home.inn;
        let playerPropetariId = cellAction.home.propietario;
        let deed = date.deeds.filter(deed => deed.name === cellAction.home.name);
        deed = deed[0]
        //console.log("countHouse:" + countHouse + "count inn:" + countInn)
        let payMoney = deed.Tolls.house[countHouse] + deed.Tolls.inn[countInn];
        let payer = this.state.players[this.state.point];
        let beneficiary = this.state.players.filter(player => player.id === playerPropetariId)
        beneficiary = beneficiary[0];
        this.putMoney(payMoney, payer, beneficiary)
        this.simperNotification('提醒', payer.name + "支付　《" + payMoney + "》　给" + beneficiary.name, 3000)
        //console.log(payMoney)
    }
    getMoney = (quantity, beneficiary) => {
        beneficiary.money += quantity
        this.setState({ player: this.state.payer })
    }
    putMoney = (quantity, payer, beneficiary) => {
        payer.money -= quantity;
        this.getMoney(quantity, beneficiary)
    }
    shoppingDeedNotifi = (cellAction) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: '购买房地产',
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
                this.giveDeed(cellAction);
                this.setState({ players: this.state.players })
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
    simperNotification = (title, content, time, icon = null) => {
        Swal.fire({
            title: title,
            text: content,
            showConfirmButton: false,
            timer: time,
            icon: icon
        })
    }
    questionNotification = () => {

    }
    giveDeed = (cellAction) => {
        cellAction.home.propietario = this.state.players[this.state.point].id;

        let deed = date.deeds.filter(deed => deed.name === cellAction.home.name)

        this.state.players[this.state.point].deeds.push(deed[0]);
        //console.log(this.state.players[this.state.point].deeds)

    }

    closeModal = () => {
        this.state.show = false;
        this.setState({ show: this.state.show })
    }
    showModal = () => {
        this.state.show = true;
        this.setState({ show: this.state.show })
    }
    showPlayerInfo = (playerId) => {

        this.state.playerInfo = this.state.players.filter(player => player.id === playerId);
        this.state.playerInfo = this.state.playerInfo[0];
        this.state.show = true;
        this.setState({ show: this.state.show })

        console.log(this.state.playerInfo);
    }

    componentWillMount = () => {
        this.state.playerInfo = this.state.players[0];
    }
    updatePasos = (event) => {
        this.setState({ dau: event.target.value })
    }
    render() {
        const players = this.state.players.map((playerDate, index) => <Player key={index} date={playerDate} showPlayerInfo={this.showPlayerInfo} />);

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
                        <div>

                        </div>
                        <div style={{ width: "150px" }}>
                            <InputRange
                                maxValue={10}
                                minValue={4}
                                value={this.state.value}
                                onChange={scale => { this.setState({ value: scale }); scale /= 10; this.setState({ scale }); }} />
                        </div>

                        <PlayerInfo show={this.state.show} onHide={this.closeModal} closeModal={this.closeModal} playerInfo={this.state.playerInfo} />
                        <input placeholder="pasos" onChange={this.updatePasos} value={this.state.dau}></input>
                        <button onClick={this.next}>next</button>
                    </div>
                </div>
            </div>
        );
    };
}

export default GameScreen;

/*
  <Modal show={this.state.show} size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            onHide={this.closeModal}>
                            <Modal.Header closeButton>
                                <Modal.Title></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>


                                Woohoo, you're reading this text in a modal!

                                </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.closeModal}>
                                    Close  </Button>
                            </Modal.Footer>
                        </Modal>

*/