import { createStore } from 'vuex'

export default createStore({
    state: {
        games: [
            {
                id: 1, name: 'Mobile Legends', img: 'ml.webp',
                topupcats: [
                    {
                        name: "Diamonds",
                        img: '5000orMore_MLBB_Diamonds.png',
                        topups: [
                            {
                                id: 1,
                                name: "3 Diamonds",
                                price: 1468,
                                img: '50orless_MLBB_Diamonds.png'
                            },
                            {
                                id: 2,
                                name: "5 Diamonds",
                                price: 1529,
                                img: '50orless_MLBB_Diamonds.png'
                            },
                            {
                                id: 3,
                                name: "11 Diamonds + 1 Bonus",
                                price: 3574,
                                img: '50orless_MLBB_Diamonds.png'
                            },
                            {
                                id: 4,
                                name: "17 Diamonds + 2 Bonus",
                                price: 5618,
                                img: '50orless_MLBB_Diamonds.png'
                            },
                            {
                                id: 5,
                                name: "25 Diamonds + 3 Bonus",
                                price: 8184,
                                img: '50orless_MLBB_Diamonds.png'
                            },
                            {
                                id: 6,
                                name: "40 Diamonds + 4 Bonus",
                                price: 12258,
                                img: '50orless_MLBB_Diamonds.png'
                            },
                            {
                                id: 7,
                                name: "53 Diamonds + 6 Bonus",
                                price: 16359,
                                img: '50ormore_MLBB_Diamonds.png'
                            },
                            {
                                id: 8,
                                name: "77 Diamonds + 8 Bonus",
                                price: 23549,
                                img: '50ormore_MLBB_Diamonds.png'
                            },
                            {
                                id: 9,
                                name: "154 Diamonds + 16 Bonus",
                                price: 47091,
                                img: '150orMore_MLBB_Diamonds.png'
                            },
                            {
                                id: 10,
                                name: "217 Diamonds + 23 Bonus",
                                price: 66487,
                                img: '150orMore_MLBB_Diamonds.png'
                            },
                            {
                                id: 11,
                                name: "256 Diamonds + 40 Bonus",
                                price: 81828,
                                img: '150orMore_MLBB_Diamonds.png'
                            },
                            {
                                id: 12,
                                name: "367 Diamonds + 41 Bonus",
                                price: 112555,
                                img: '150orMore_MLBB_Diamonds.png'
                            },
                            {
                                id: 13,
                                name: "503 Diamonds + 65 Bonus",
                                price: 153240,
                                img: '500orMore_MLBB_Diamonds.png'
                            },
                            {
                                id: 14,
                                name: "774 Diamonds + 101 Bonus",
                                price: 235291,
                                img: '500orMore_MLBB_Diamonds.png'
                            },
                            {
                                id: 15,
                                name: "1708 Diamonds + 302 Bonus",
                                price: 512724,
                                img: '1500orMore_MLBB_Diamonds.png'
                            },
                            {
                                id: 16,
                                name: "4003 Diamonds + 827 Bonus",
                                price: 1226799,
                                img: '5000orMore_MLBB_Diamonds.png'
                            }
                        ],

                    },
                    {
                        name: "Weekly Diamond Pass",
                        img: 'MLBB_Weekly_Diamond_Pass.png',
                        topups: [
                            {
                                id: 1,
                                name: "Weekly Diamond Pass",
                                price: 29689,
                                img: 'MLBB_Weekly_Diamond_Pass.png',
                            }
                        ],
                    },
                    {
                        name: "Twilight Pass",
                        img: 'TwilightPass_MLBB.png',
                        topups: [
                            {
                                id: 1,
                                name: "Twilight Pass",
                                price: 147144,
                                img: 'TwilightPass_MLBB.png',
                            }
                        ],
                    }
                ]
            },
            {
                id: 2, name: 'Garena Free Fire', img: 'ff.webp',
                topupcats: [
                    {
                        name: 'Diamonds',
                        topups: [
                            {
                                id: 1,
                                name: '5 Diamonds',
                                price: 970
                            },
                            {
                                id: 2,
                                name: "12 Diamonds",
                                price: 1940
                            },
                            {
                                id: 3,
                                name: "50 Diamonds",
                                price: 7760
                            },
                            {
                                id: 4,
                                name: "70 Diamonds",
                                price: 9700
                            },
                            {
                                id: 5,
                                name: "140 Diamonds",
                                price: 19400
                            },
                            {
                                id: 6,
                                name: "355 Diamonds",
                                price: 48500
                            },
                            {
                                id: 7,
                                name: "720 Diamonds",
                                price: 97000
                            },
                            {
                                id: 8,
                                name: "1450 Diamonds",
                                price: 194000
                            },
                            {
                                id: 9,
                                name: "2180 Diamonds",
                                price: 291000
                            },
                            {
                                id: 10,
                                name: "3640 Diamonds",
                                price: 485000
                            },
                            {
                                id: 11,
                                name: "7290 Diamonds",
                                price: 970000
                            },
                            {
                                id: 12,
                                name: "36500 Diamonds",
                                price: 4850000
                            },
                            {
                                id: 13,
                                name: "73100 Diamonds",
                                price: 9700000
                            }
                        ],
                    }
                ]
            },
            {
                id: 3, name: 'PUBG Mobile', img: 'pubg.webp', topupcats: [
                    {
                        name: 'UC',
                        topups: [
                            {
                                id: 1,
                                name: "60 UC",
                                price: 15035
                            },
                            {
                                id: 2,
                                name: "325 UC",
                                price: 75175
                            },
                            {
                                id: 3,
                                name: "660 UC",
                                price: 150350
                            },
                            {
                                id: 4,
                                name: "1800 UC",
                                price: 362362.86
                            },
                            {
                                id: 5,
                                name: "3850 UC",
                                price: 750250
                            },
                            {
                                id: 6,
                                name: "8100 UC",
                                price: 1501500
                            }
                        ]
                    }
                ]
            }
        ],
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
});