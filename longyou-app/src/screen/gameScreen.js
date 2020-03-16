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
import Dice from '../component/dice'
import { Button, Row, Col, Container } from 'react-bootstrap';
import $ from "jquery"


class GameScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            players: this.props.players,
            //point: this.props.players.length - 1,
            point: 0,
            //players: date.players,
            dau1: 1,
            dau2: 1,
            pases: 0,
            caminarInterval: null,
            scale: 1,
            value: 10,
            show: false,
            playerInfo: null,
            go: false,
            treasuryCard: date.treasuryCards[0],
            luckCard: date.luckCards[0],
        }
    }

    next = () => {
        if (!this.state.go) {
            this.setState({ go: !this.state.go })
            this.state.dau1 = this.randomNum(6);
            this.state.dau2 = this.randomNum(6);
            this.state.pases = this.state.dau1 + this.state.dau2;
            this.state.caminarInterval = setInterval(this.caminar, 500);

            //console.log(this.state.players[this.state.point].mapPosition)
            //console.log(this.state.point)
            this.setState({ dau: this.state.dau });
        }


    }
    end = () => {
        if (this.state.go && this.state.pases === 0) {
            this.setState({ go: !this.state.go })
            let previoPoint = this.state.point;
            if (this.state.point < this.state.players.length - 1) {
                this.state.point += 1;
            } else {
                this.state.point = 0;
            }
            this.state.players[previoPoint].active = false;
            this.state.players[this.state.point].active = true;
            this.setState({ players: this.state.players })
            // let playerLink = "#playerInfo" + this.state.players[this.state.point].id;
            //$("#playerInfoPlayer1").click()
            //console.log(playerLink)
            this.setState({ luckCard: date.luckCards[0] })
            this.setState({ treasuryCard: date.treasuryCards[0] })


        }

    }
    randomNum = (number) => {
        return Math.floor(Math.random() * number) + 1

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
            this.state.pases = 0;
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
            } else if (cellAction.action == "treasuryCards") {
                this.setState({ treasuryCard: date.treasuryCards[this.randomNum(date.treasuryCards.length)] })
                Swal.fire({
                    imageUrl: process.env.PUBLIC_URL + this.state.treasuryCard.img
                })
                this.state.players[this.state.point].money += this.state.treasuryCard.value;
            } else if (cellAction.action == "luckCards") {
                this.setState({ luckCard: date.luckCards[this.randomNum(date.luckCards.length)] })
                Swal.fire({
                    imageUrl: process.env.PUBLIC_URL + this.state.luckCard.img
                })
                this.state.players[this.state.point].money += this.state.luckCard.value;

            }
            //this.setState({players:this.state.players})


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
        this.state.players[0].active = true;
    }
    updatePasos = (event) => {
        this.setState({ dau1: event.target.value })
    }

    render() {
        const players = this.state.players.map((playerDate, index) => <Player key={index} date={playerDate} showPlayerInfo={this.showPlayerInfo} />);

        let style = {
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
        }
        return (
            <div style={{ display: "flex" }}>

                <Map scale={this.state.scale} players={this.state.players} luckCard={this.state.luckCard} treasuryCard={this.state.treasuryCard} />
                <div className="sidebar">

                    <Container>
                        <Row>
                            <Col style={style}><InputRange
                                maxValue={10}
                                minValue={3}
                                value={this.state.value}
                                onChange={scale => { this.setState({ value: scale }); scale /= 10; this.setState({ scale }); }} /></Col>
                        </Row>
                    </Container>
                    <div className="playerContainer">
                        {players}
                    </div>
                    <div>

                        <Container>

                            <Row>
                                <Col style={style}><Dice number={this.state.dau1} /></Col>
                                <Col style={style}><Dice number={this.state.dau2} /></Col>

                            </Row>

                            <Row>

                                <Col style={style}><Button onClick={this.next} disabled={this.state.go}>骰子</Button></Col>
                                <Col style={style}><Button onClick={this.end} variant="danger" disabled={!this.state.go}>结束</Button></Col>
                            </Row>
                        </Container>


                    </div>
                    <PlayerInfo show={this.state.show} onHide={this.closeModal} closeModal={this.closeModal} playerInfo={this.state.playerInfo} />

                </div>
            </div>
        );
    };
}

export default GameScreen;

/*
                        <div>next player: {this.state.players[this.state.point].id}</div>

                       <input placeholder="pasos" onChange={this.updatePasos} value={this.state.dau}></input>

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