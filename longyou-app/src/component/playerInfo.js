import React, { Component } from 'react';
import '../App.css';
import { Button, Modal } from 'react-bootstrap';
import PlayerDeed from './playerDeed'


class playerInfo extends Component {

    render() {
        const ModalTitle = {
            display: "flex"
        }
        const nameStyle = {
            display: "flex",
            flexDirection: "column",
            marginLeft:"20px"
        }
        return (
            <Modal show={this.props.show} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={this.props.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title style={ModalTitle}>
                        <div className="character_img_container">
                            <a href={"#" + this.props.playerInfo.id}>
                                <img className="character_img" src={process.env.PUBLIC_URL + this.props.playerInfo.character.img} />
                            </a>
                        </div>
                        <div style={nameStyle}>
                            <span>{this.props.playerInfo.name}</span>
                            <span>{this.props.playerInfo.character.name}</span>
                        </div>

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PlayerDeed playerDeed={this.props.playerInfo.deeds} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.closeModal}>
                        Close  </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default playerInfo; // Don’t forget to use export default!