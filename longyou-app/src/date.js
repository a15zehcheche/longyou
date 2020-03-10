
const Dates = {
    "characters": [
        {
            "id": 0,
            "name": "随机包",
            "img": "/images/0.jpg",
        },
        {
            "id": 1,
            "name": "豆沙包",
            "img": "/images/1.png",
        },
        {
            "id": 2,
            "name": "柠檬包",
            "img": "/images/2.png",
        },
        {
            "id": 3,
            "name": "蔬菜包",
            "img": "/images/3.png",
        },
        {
            "id": 4,
            "name": "海盐包",
            "img": "/images/4.png",
        },
        {
            "id": 5,
            "name": "眼影包",
            "img": "/images/5.png",
        },
        {
            "id": 6,
            "name": "可乐包",
            "img": "/images/6.png",
        },
        {
            "id": 7,
            "name": "非洲包",
            "img": "/images/7.png",
        },
    ],
    "deed":[
        {
            "name":"shenwei",
            "Tolls":{
                "house":{
                    0:80,
                    1:200,
                    2:600,
                    3:1400,
                    4:1700,
                },
                "inn":{
                    1:2000
                }
            },
            "Build":{
                "house":200,
                "inn":200
            }
        },
        {
            "name":"yezun",
            "Tolls":{
                "house":{
                    0:75,
                    1:175,
                    2:500,
                    3:1100,
                    4:1300,
                },
                "inn":{
                    1:1500
                }
            },
            "Build":{
                "house":200,
                "inn":200
            }
        },
        {
            "name":"xiaojing",
            "Tolls":{
                "house":{
                    0:70,
                    1:150,
                    2:450,
                    3:1000,
                    4:1200,
                },
                "inn":{
                    1:1400
                }
            },
            "Build":{
                "house":200,
                "inn":200
            }
        },
        {
            "name":"qiheng",
            "Tolls":{
                "house":{
                    0:65,
                    1:130,
                    2:390,
                    3:900,
                    4:1100,
                },
                "inn":{
                    1:1275
                }
            },
            "Build":{
                "house":200,
                "inn":200
            }
        },
        {
            "name":"luofusheng",
            "Tolls":{
                "house":{
                    0:65,
                    1:130,
                    2:390,
                    3:900,
                    4:1100,
                },
                "inn":{
                    1:1275
                }
            },
            "Build":{
                "house":200,
                "inn":200
            }
        },
        {
            "name":"chou",
            "Tolls":{
                "house":{
                    0:60,
                    1:120,
                    2:360,
                    3:850,
                    4:1025,
                },
                "inn":{
                    1:1200
                }
            },
            "Build":{
                "house":150,
                "inn":150
            }
        },
        {
            "name":"chirui",
            "Tolls":{
                "house":{
                    0:55,
                    1:110,
                    2:330,
                    3:800,
                    4:975,
                },
                "inn":{
                    1:1150
                }
            },
            "Build":{
                "house":150,
                "inn":150
            }
        },
        {
            "name":"wuxie",
            "Tolls":{
                "house":{
                    0:55,
                    1:110,
                    2:330,
                    3:800,
                    4:975,
                },
                "inn":{
                    1:1150
                }
            },
            "Build":{
                "house":150,
                "inn":150
            }
        },
        {
            "name":"lianchengbi",
            "Tolls":{
                "house":{
                    0:50,
                    1:100,
                    2:300,
                    3:750,
                    4:925,
                },
                "inn":{
                    1:1100
                }
            },
            "Build":{
                "house":150,
                "inn":150
            }
        },
    ],
    "player": {
        "character": null,
        "name": null,
        "money": null,
        "id": null,
    },
    "players": [
        {
            "character": {
                "id": 2,
                "name": "柠檬包",
                "img": "/images/2.png",
            },
            "name": "Joan",
            "money": 1000,
            "id": "Player1",
            "color": "white",
            "mapPosition": 1,
        },
        {
            "character": {
                "id": 4,
                "name": "海盐包",
                "img": "/images/4.png",
            },
            "name": "David",
            "money": 2000,
            "id": "Player2",
            "color": "white",
            "mapPosition": 1,
        },
        {
            "character": {
                "id": 4,
                "name": "海盐包",
                "img": "/images/4.png",
            },
            "name": "David",
            "money": 2000,
            "id": "Player3",
            "color": "white",
            "mapPosition": 1,
        },
        {
            "character": {
                "id": 4,
                "name": "海盐包",
                "img": "/images/4.png",
            },
            "name": "David",
            "money": 2000,
            "id": "Player4",
            "color": "white",
            "mapPosition": 1,
        },
        {
            "character": {
                "id": 4,
                "name": "海盐包",
                "img": "/images/4.png",
            },
            "name": "David",
            "money": 2000,
            "id": "Player5",
            "color": "white",
            "mapPosition": 1,
        },
        {
            "character": {
                "id": 4,
                "name": "海盐包",
                "img": "/images/4.png",
            },
            "name": "David",
            "money": 2000,
            "id": "Player6",
            "color": "white",
            "mapPosition": 1,
        },
        {
            "character": {
                "id": 4,
                "name": "海盐包",
                "img": "/images/4.png",
            },
            "name": "David",
            "money": 2000,
            "id": "Player7",
            "color": "white",
            "mapPosition": 1,
        },
    ],
    "map": {
        "cells": [
            //top
            {
                "id": 21,
                "height": 304,
                "width": 304,
                "top": 45,
                "left": 45,
                "action": {
                    "missage": "待开发",
                    "value": 0,
                }
            },
            {
             
                "id": 22,
                "height": 304,
                "width": 182,
                "top": 45,
                "left": 352,
                "action": {
                    "question": {
                        "missage": "购买此地220两",
                        "value": -220,
                    }
                },
                "home": {
                    "fangzhi": 0,
                    "kezhang": 0,
                    "propietario": false,
                    "position":"bottom"
                },
            },
            {
                "id": 23,
                "height": 304,
                "width": 182,
                "top": 45,
                "left": 537,
                "action": {
                    "missage": "待开发",
                    "value": 0,
                }
            },
            {
                "id": 24,
                "height": 304,
                "width": 182,
                "top": 45,
                "left": 722,
                "action": {
                    "question": {
                        "missage": "购买此地220两",
                        "value": -220,
                    }
                },
                "home": {
                    "fangzhi": 0,
                    "kezhang": 0,
                    "propietario": false,
                    "position":"bottom"
                },
            },
            {
                "id": 25,
                "height": 304,
                "width": 182,
                "top": 45,
                "left": 907,
                "action": {
                    "question": {
                        "missage": "购买此地240两",
                        "value": -240,
                    }
                },
                "home": {
                    "fangzhi": 0,
                    "kezhang": 0,
                    "propietario": false,
                    "position":"bottom"
                },
            },
            {
                "id": 26,
                "height": 304,
                "width": 182,
                "top": 45,
                "left": 1092,
                "action": {
                    "missage": "暂停费用200两",
                    "value": -200,
                }
            },
            {
                "id": 27,
                "height": 304,
                "width": 182,
                "top": 45,
                "left": 1277,
                "action": {
                    "question": {
                        "missage": "购买此地260两",
                        "value": -260,
                    }
                },
                "home": {
                    "fangzhi": 0,
                    "kezhang": 0,
                    "propietario": false,
                    "position":"bottom"
                },
            },
            {
                "id": 28,
                "height": 304,
                "width": 182,
                "top": 45,
                "left": 1462,
                "action": {
                    "question": {
                        "missage": "购买此地260两",
                        "value": -260,
                    }
                },
                "home": {
                    "fangzhi": 0,
                    "kezhang": 0,
                    "propietario": false,
                    "position":"bottom"
                },
            },
            {
                "id": 29,
                "height": 304,
                "width": 182,
                "top": 45,
                "left": 1647,
                "action": {
                    "missage": "待开发",
                    "value": 0,
                }
            },
            {
                "id": 30,
                "height": 304,
                "width": 182,
                "top": 45,
                "left": 1832,
                "action": {
                    "question": {
                        "missage": "购买此地280两",
                        "value": -280,
                    }
                },
                "home": {
                    "fangzhi": 0,
                    "kezhang": 0,
                    "propietario": false,
                    "position":"bottom"
                },
            },
            //right

            {
                "id": 31,
                "height": 304,
                "width": 304,
                "top": 45,
                "left": 2018,
                "action": {
                    "missage": "待开发",
                    "value": 0,
                }
            },
            {
                "id": 32,
                "height": 182,
                "width": 304,
                "top": 351,
                "left": 2018,
                "action": {
                    "question": {
                        "missage": "购买此地300两",
                        "value": -300,
                    }
                },
                "home": {
                    "fangzhi": 0,
                    "kezhang": 0,
                    "propietario": false,
                    "position":"left"
                },
            },
            {
                "id": 33,
                "height": 182,
                "width": 304,
                "top": 536,
                "left": 2018,
                "action": {
                    "question": {
                        "missage": "购买此地300两",
                        "value": -300,
                    }
                },
                "home": {
                    "fangzhi": 0,
                    "kezhang": 0,
                    "propietario": false,
                    "position":"left"
                },
            },
            {
                "id": 34,
                "height": 182,
                "width": 304,
                "top": 721,
                "left": 2018,
                "action": {
                    "missage": "待开发",
                    "value": 0,
                }
            },
            {
                "id": 35,
                "height": 182,
                "width": 304,
                "top": 906,
                "left": 2018,
                "action": {
                    "question": {
                        "missage": "购买此地320两",
                        "value": -320,
                    }
                },
                "home": {
                    "fangzhi": 0,
                    "kezhang": 0,
                    "propietario": false,
                    "position":"left"
                },
            },
            {
                "id": 36,
                "height": 182,
                "width": 304,
                "top": 1091,
                "left": 2018,
                "action": {
                    "missage": "暂停费用200两",
                    "value": -200,
                }
            },
            {
                "id": 37,
                "height": 182,
                "width": 304,
                "top": 1276,
                "left": 2018,
                "action": {
                    "missage": "征税总费160两",
                    "value": -160,
                }
            },
            {
                "id": 38,
                "height": 182,
                "width": 304,
                "top": 1461,
                "left": 2018,
                "action": {
                    "question": {
                        "missage": "购买此地350两",
                        "value": -350,
                    }
                },
                "home": {
                    "fangzhi": 0,
                    "kezhang": 0,
                    "propietario": false,
                    "position":"left"
                },
            },
            {
                "id": 39,
                "height": 182,
                "width": 304,
                "top": 1646,
                "left": 2018,
                "action": {
                    "missage": "待开发",
                    "value": 0,
                }
            },
            {
                "id": 40,
                "height": 182,
                "width": 304,
                "top": 1831,
                "left": 2018,
                "action": {
                    "question": {
                        "missage": "购买此地400两",
                        "value": -400,
                    }
                },
                "home": {
                    "fangzhi": 0,
                    "kezhang": 0,
                    "propietario": false,
                    "position":"left"
                },
            },
            //bottom

            {
                "id": 11,
                "height": 304,
                "width": 304,
                "top": 2017,
                "left": 45,
            },
            {
                "id": 10,
                "home": {
                    "fangzhi": 0,
                    "kezhang": 0,
                    "propietario": false,
                    "position":"top"
                },
                "height": 304,
                "width": 182,
                "top": 2017,
                "left": 352,
                "action": {
                    "question": {
                        "missage": "购买此地120两",
                        "value": -120,
                    }
                }
            },
            {
                "id": 9,
                "home": {
                    "fangzhi": 0,
                    "kezhang": 0,
                    "propietario": false,
                    "position":"top"
                },
                "height": 304,
                "width": 182,
                "top": 2017,
                "left": 537,
                "action": {
                    "question": {
                        "missage": "购买此地100两",
                        "value": -100,
                    }
                }
            },
            {
                "id": 8,
                "height": 304,
                "width": 182,
                "top": 2017,
                "left": 722,
                "action": {
                    "missage": "待开发",
                    "value": 0,
                }
            },
            {
                "id": 7,
                "home": {
                    "fangzhi": 0,
                    "kezhang": 0,
                    "propietario": false,
                    "position":"top"
                },
                "height": 304,
                "width": 182,
                "top": 2017,
                "left": 907,
                "action": {
                    "question": {
                        "missage": "购买此地100两",
                        "value": -100,
                    }
                }

            },
            {
                "id": 6,
                "height": 304,
                "width": 182,
                "top": 2017,
                "left": 1092,
                "action": {
                    "missage": "暂停费用200两",
                    "value": -200,
                }
            },
            {
                "id": 5,
                "height": 304,
                "width": 182,
                "top": 2017,
                "left": 1277,
                "action": {
                    "missage": "日常费用200两",
                    "value": -200,
                }
            },
            {
                "id": 4,
                "home": {
                    "fangzhi": 0,
                    "kezhang": 0,
                    "propietario": false,
                    "position":"top"
                },
                "height": 304,
                "width": 182,
                "top": 2017,
                "left": 1462,
                "action": {
                    "question": {
                        "missage": "购买此地60两",
                        "value": -60,
                    }
                }
            },
            {
                "id": 3,
                "height": 304,
                "width": 182,
                "top": 2017,
                "left": 1647,
                "action": {
                    "missage": "待开发",
                    "value": 0,
                }
            },
            {
                "id": 2,
                "home": {
                    "fangzhi": 0,
                    "kezhang": 0,
                    "propietario": false,
                    "position":"top"
                },
                "height": 304,
                "width": 182,
                "top": 2017,
                "left": 1832,
                "action": {
                    "question": {
                        "missage": "购买此地60两",
                        "value": -60,
                    }
                }
            },
            {
                "id": 1,
                "height": 304,
                "width": 304,
                "top": 2017,
                "left": 2018,
            },
            //left
            {
              
                "id": 20,
                "height": 182,
                "width": 304,
                "top": 351,
                "left": 45,
                "action": {
                    "question": {
                        "missage": "购买此地200两",
                        "value": -200,
                    }
                },
                "home": {
                    "fangzhi": 0,
                    "kezhang": 0,
                    "propietario": false,
                    "position":"right"
                },
            },
            {
               
                "id": 19,
                "height": 182,
                "width": 304,
                "top": 536,
                "left": 45,
                "action": {
                    "question": {
                        "missage": "购买此地180两",
                        "value": -180,
                    }
                },
                "home": {
                    "fangzhi": 0,
                    "kezhang": 0,
                    "propietario": false,
                    "position":"right"
                },
            },
            {
                "id": 18,
                "height": 182,
                "width": 304,
                "top": 721,
                "left": 45,
                "action": {
                    "missage": "待开发",
                    "value": 0,
                }
            },
            {
                
                "id": 17,
                "height": 182,
                "width": 304,
                "top": 906,
                "left": 45,
                "action": {
                    "question": {
                        "missage": "购买此地180两",
                        "value": -180,
                    }
                },
                "home": {
                    "fangzhi": 0,
                    "kezhang": 0,
                    "propietario": false,
                    "position":"right"
                },
            },
            {
                "id": 16,
                "height": 182,
                "width": 304,
                "top": 1091,
                "left": 45,
                "action": {
                    "missage": "暂停费用200两",
                    "value": -200,
                }
            },
            {
               
                "id": 15,
                "height": 182,
                "width": 304,
                "top": 1276,
                "left": 45,
                "action": {
                    "question": {
                        "missage": "购买此地160两",
                        "value": -160,
                    }
                },
                "home": {
                    "fangzhi": 0,
                    "kezhang": 0,
                    "propietario": false,
                    "position":"right"
                },
            },
            {
              
                "id": 14,
                "height": 182,
                "width": 304,
                "top": 1461,
                "left": 45,
                "action": {
                    "question": {
                        "missage": "购买此地140两",
                        "value": -140,
                    }
                },
                "home": {
                    "fangzhi": 0,
                    "kezhang": 0,
                    "propietario": false,
                    "position":"right"
                },
            },
            {
                "id": 13,
                "height": 182,
                "width": 304,
                "top": 1646,
                "left": 45,
                "action": {
                    "missage": "待开发",
                    "value": 0,
                }
            },
            {
               
                "id": 12,
                "height": 182,
                "width": 304,
                "top": 1831,
                "left": 45,
                "action": {
                    "question": {
                        "missage": "购买此地140两",
                        "value": -140,
                    }
                },
                "home": {
                    "fangzhi": 0,
                    "kezhang": 0,
                    "propietario": false,
                    "position":"right"
                },
            },
        ],
        "cards": [
            {
                "height": 312,
                "width": 455,
                "top": 550,
                "left": 474,
            },
            {
                "height": 312,
                "width": 455,
                "top": 1510,
                "left": 1428,
            }
        ]
    }
};

export default Dates;