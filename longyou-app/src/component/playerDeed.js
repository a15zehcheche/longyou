import React, { Component } from 'react';
import '../App.css';


class playerDeed extends Component {
    render() {
        let deeds = [
            {
                "name": "shenwei",
                "img": "/images/deed/1.png",
                "Tolls": {
                    "house": {
                        0: 80,
                        1: 200,
                        2: 600,
                        3: 1400,
                        4: 1700,
                    },
                    "inn": {
                        1: 2000
                    }
                },
                "Build": {
                    "house": 200,
                    "inn": 200
                }
            },
            {
                "name": "yezun",
                "img": "/images/deed/9.png",
                "Tolls": {
                    "house": {
                        0: 75,
                        1: 175,
                        2: 500,
                        3: 1100,
                        4: 1300,
                    },
                    "inn": {
                        1: 1500
                    }
                },
                "Build": {
                    "house": 200,
                    "inn": 200
                }
            },
            {
                "name": "yezun",
                "img": "/images/deed/3.png",
                "Tolls": {
                    "house": {
                        0: 75,
                        1: 175,
                        2: 500,
                        3: 1100,
                        4: 1300,
                    },
                    "inn": {
                        1: 1500
                    }
                },
                "Build": {
                    "house": 200,
                    "inn": 200
                }
            },

        ]
        //deeds = []
        let myStyle ={
            alignSelf: "center",
            textAlign: "center",
            width: "100%",
        }
        let deedsHtml = this.props.playerDeed.map((deed, index) => <div key={index} className="deed"><img src={process.env.PUBLIC_URL + deed.img} alt="deed" /></div>);
        if(deedsHtml == ""){
            deedsHtml=<h2 style={myStyle}>您目前没有任房地产</h2>
        }
        return (
            <>
                <h2>已拥有的房产证</h2>
                <div className="deedContainer">

                    {deedsHtml}
                </div>
            </>
        );
    }
}
export default playerDeed; // Don’t forget to use export default!