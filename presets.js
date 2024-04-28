const { combineRgb } = require('@companion-module/base')
const icon = require('./icons')

module.exports = function (self) {
    const black = combineRgb(0, 0, 0)
    const white = combineRgb(255, 255, 255)
    const red = combineRgb(255, 0, 0)
    const gray = combineRgb(64, 64, 64)
    const blue = combineRgb(0, 0, 64)
    const gold = combineRgb(255, 215, 0)
    const green = combineRgb(0, 128, 0)

    var presets = {
        prev: {
            type: 'button',
            category: 'Slide controls',
            name: 'Previous',
            style: {
                text: '<\\nPrev',
                color: black,
                bgcolor: green,
            },
            steps: [
                {
                    down: [
                        {
                            actionId: 'previous',
                            options: {}
                        }
                    ],
                    up: []
                }
            ],
            feedbacks: [
                {
                    feedbackId: 'FirstSlide',
                    options: [],
                    style: {
                        color: black,
                        bgcolor: gray,
                    }
                },
                {
                    feedbackId: 'Slide',
                    options: [],
                    isInverted: true,
                    style: {
                        color: black,
                        bgcolor: gray,
                    }
                }
            ]
        },
        next: {
            type: 'button',
            category: 'Slide controls',
            name: 'Next',
            style: {
                text: '>\\nNext',
                color: black,
                bgcolor: green,
            },
            steps: [
                {
                    down: [
                        {
                            actionId: 'next',
                            options: {}
                        }
                    ],
                    up: []
                }
            ],
            feedbacks: [
                {
                    feedbackId: 'LastSlide',
                    options: [],
                    style: {
                        color: black,
                        bgcolor: gray,
                    }
                },
                {
                    feedbackId: 'Slide',
                    options: [],
                    isInverted: true,
                    style: {
                        color: black,
                        bgcolor: gray,
                    }
                }
            ]
        },
        close_presentation: {
            type: 'button',
            category: 'Slide controls',
            name: 'Hide slides',
            style: {
                text: '',
                png64: icon["black"]["274e"],
                color: black,
                bgcolor: green
            },
            steps: [
                {
                    down: [
                        {
                            actionId: 'close_presentation',
                            options: {}
                        }
                    ],
                    up: []
                }
            ],
            feedbacks: [
                {
                    feedbackId: 'Slide',
                    options: [],
                    style: {
                        color: black,
                        bgcolor: red
                    }
                }
            ]
        },
        f8: {
            type: 'button',
            category: 'F-Keys',
            name: 'Toggle Wallpaper',
            style: {
                text: 'Toggle Wallpaper',
                color: white,
                bgcolor: black
            },
            steps: [
                {
                    down: [
                        {
                            actionId: 'toggle_f8',
                            options: {}
                        }
                    ],
                    up: []
                }
            ],
            feedbacks: [
                {
                    feedbackId: 'F8',
                    options: [],
                    style: {
                        color: black,
                        bgcolor: red
                    }
                }
            ]
        },
        f9: {
            type: 'button',
            category: 'F-Keys',
            name: 'Toggle Empty Slide',
            style: {
                text: 'Toggle Empty Slide',
                color: white,
                bgcolor: black
            },
            steps: [
                {
                    down: [
                        {
                            actionId: 'toggle_f9',
                            options: {}
                        }
                    ],
                    up: []
                }
            ],
            feedbacks: [
                {
                    feedbackId: 'F9',
                    options: [],
                    style: {
                        color: black,
                        bgcolor: red
                    }
                }
            ]
        },
        f10: {
            type: 'button',
            category: 'F-Keys',
            name: 'Toggle Black Screen',
            style: {
                text: 'Toggle Black Screen',
                color: white,
                bgcolor: black
            },
            steps: [
                {
                    down: [
                        {
                            actionId: 'toggle_f10',
                            options: {}
                        }
                    ],
                    up: []
                }
            ],
            feedbacks: [
                {
                    feedbackId: 'F10',
                    options: [],
                    style: {
                        color: black,
                        bgcolor: red
                    }
                }
            ]
        },
        mp_previous: {
            type: 'button',
            category: 'Media Player',
            name: 'Previous',
            style: {
                text: '',
                png64: icon["black"]["23ee"],
                color: black,
                bgcolor: gold,
                alignment: 'center:bottom',
            },
            steps: [
                {
                    down: [
                        {
                            actionId: 'mp_previous',
                            options: {}
                        }
                    ],
                    up: []
                }
            ],
            feedbacks: []
        },
        mp_play_pause: {
            type: 'button',
            category: 'Media Player',
            name: 'Play/Pause',
            style: {
                text: '',
                png64: icon["black"]["23ef"],
                color: black,
                bgcolor: gold,
                alignment: 'center:bottom',

            },
            steps: [
                {
                    down: [
                        {
                            actionId: 'mp_play_pause',
                            options: {}
                        }
                    ],
                    up: []
                }
            ],
            feedbacks: [
                {
                    feedbackId: 'MP_Playing',
                    options: [],
                    style: {
                        png64: null,
                        color: black,
                        bgcolor: red,
                        text: '\u25b6\u23f8\\n$(holyrics:mp_time_remaining)'
                    }
                }
            ]
        },
        mp_play: {
            type: 'button',
            category: 'Media Player',
            name: 'Play',
            style: {
                text: '',
                png64: icon["black"]["25b6"],
                color: black,
                bgcolor: gold,
                alignment: 'center:bottom',

            },
            steps: [
                {
                    down: [
                        {
                            actionId: 'mp_play',
                            options: {}
                        }
                    ],
                    up: []
                }
            ],
            feedbacks: [
                {
                    feedbackId: 'MP_Playing',
                    options: [],
                    style: {
                        png64: null,
                        color: black,
                        bgcolor: red,
                        text: '\u25b6\\n$(holyrics:mp_time_remaining)'
                    }
                }
            ]
        },
        mp_pause: {
            type: 'button',
            category: 'Media Player',
            name: 'Pause',
            style: {
                text: '',
                png64: icon["black"]["23f8"],
                color: black,
                bgcolor: gold,
                alignment: 'center:bottom',

            },
            steps: [
                {
                    down: [
                        {
                            actionId: 'mp_pause',
                            options: {}
                        }
                    ],
                    up: []
                }
            ],
            feedbacks: [
                {
                    feedbackId: 'MP_Playing',
                    options: [],
                    style: {
                        png64: null,
                        color: black,
                        bgcolor: red,
                        text: '\u23f8\\n$(holyrics:mp_time_remaining)'
                    }
                }
            ]
        },
        mp_stop: {
            type: 'button',
            category: 'Media Player',
            name: 'Stop',
            style: {
                text: '',
                png64: icon["black"]["23f9"],
                color: black,
                bgcolor: gold,
                alignment: 'center:bottom',

            },
            steps: [
                {
                    down: [
                        {
                            actionId: 'mp_stop',
                            options: {}
                        }
                    ],
                    up: []
                }
            ],
            feedbacks: [
                {
                    feedbackId: 'MP_Playing',
                    options: [],
                    style: {
                        color: black,
                        bgcolor: red,
                    }
                }
            ]
        },
        mp_next: {
            type: 'button',
            category: 'Media Player',
            name: 'Next',
            style: {
                text: '',
                png64: icon["black"]["23ed"],
                color: black,
                bgcolor: gold,
                alignment: 'center:bottom',
            },
            steps: [
                {
                    down: [
                        {
                            actionId: 'mp_next',
                            options: {}
                        }
                    ],
                    up: []
                }
            ],
            feedbacks: []
        },
        mp_mute: {
            type: 'button',
            category: 'Media Player',
            name: 'Mute',
            style: {
                text: '',
                png64: icon["black"]["1f50a"],
                color: black,
                bgcolor: gold,
                alignment: 'center:bottom',
            },
            steps: [
                {
                    down: [
                        {
                            actionId: 'mp_mute',
                            options: {}
                        }
                    ],
                    up: []
                }
            ],
            feedbacks: [
                {
                    feedbackId: 'MP_Muted',
                    options: [],
                    style: {
                        color: black,
                        bgcolor: red,
                        text: '',
                        png64: icon["black"]["1f507"],
                    }
                }
            ]
        },
        mp_repeat: {
            type: 'button',
            category: 'Media Player',
            name: 'Repeat',
            style: {
                text: '',
                png64: icon["black"]["1f501"],
                color: black,
                bgcolor: gold,
                alignment: 'center:bottom',
            },
            steps: [
                {
                    down: [
                        {
                            actionId: 'mp_repeat',
                            options: {}
                        }
                    ],
                    up: []
                }
            ],
            feedbacks: [
                {
                    feedbackId: 'MP_Repeat',
                    options: [],
                    style: {
                        color: black,
                        bgcolor: red,
                    }
                }
            ]
        },
        mp_execute_single: {
            type: 'button',
            category: 'Media Player',
            name: 'Execute Single',
            style: {
                text: '',
                png64: icon["black"]["1f502"],
                color: black,
                bgcolor: gold,
                alignment: 'center:bottom',
            },
            steps: [
                {
                    down: [
                        {
                            actionId: 'mp_execute_single',
                            options: {}
                        }
                    ],
                    up: []
                }
            ],
            feedbacks: [
                {
                    feedbackId: 'MP_Execute_Single',
                    options: [],
                    style: {
                        color: black,
                        bgcolor: red,
                    }
                }
            ]
        },
        mp_fullscreen: {
            type: 'button',
            category: 'Media Player',
            name: 'Repeat',
            style: {
                text: '',
                png64: icon["black"]["26f6"],
                color: black,
                bgcolor: gold,
                alignment: 'center:bottom',
            },
            steps: [
                {
                    down: [
                        {
                            actionId: 'mp_fullscreen',
                            options: {}
                        }
                    ],
                    up: []
                }
            ],
            feedbacks: [
                {
                    feedbackId: 'MP_Fullscreen',
                    options: [],
                    style: {
                        color: black,
                        bgcolor: red,
                    }
                }
            ]
        },
        lyrics_playlist_previous: {
            type: 'button',
            category: 'Lyrics Playlist',
            name: 'Previous lyrics',
            style: {
                text: '\u23ee',
                bgcolor: black,
                color: green,
            },
            steps: [
                {
                    down: [
                        {
                            actionId: 'lyrics_playlist_show_previous',
                            options: {}
                        }
                    ],
                    up: []
                }
            ],
            feedbacks: [
                {
                    feedbackId: 'FirstLyricsPlaylist',
                    options: [],
                    style: {
                        color: black,
                        bgcolor: gray,
                    }
                },
            ]
        },
        lyrics_playlist_show_current: {
            type: 'button',
            category: 'Lyrics Playlist',
            name: 'Show current',
            style: {
                text: '$(holyrics:current_lyrics_title)',
                bgcolor: black,
                color: green,
            },
            steps: [
                {
                    down: [
                        {
                            actionId: 'show_lyrics',
                            options: [{
                                id: '$(holyrics:current_lyrics)'
                            }]
                        }
                    ],
                    up: []
                }
            ],
            feedbacks: [{
                feedbackId: 'Slide',
                options: [],
                style: {
                    color: white,
                    bgcolor: red
                }
            }]
        },
        lyrics_playlist_next: {
            type: 'button',
            category: 'Lyrics Playlist',
            name: 'Next lyrics',
            style: {
                text: '\u23ed',
                bgcolor: black,
                color: green,
            },
            steps: [
                {
                    down: [
                        {
                            actionId: 'lyrics_playlist_show_next',
                            options: {}
                        }
                    ],
                    up: []
                }
            ],
            feedbacks: [
                {
                    feedbackId: 'LastLyricsPlaylist',
                    options: [],
                    style: {
                        color: black,
                        bgcolor: gray,
                    }
                },
            ]
        },
        call_attention_cp: {
            type: 'button',
            category: 'Communication Panel',
            name: 'Call for Attention',
            style: {
                text: '',
                png64: icon["white"]["1f514"],
                color: white,
                bgcolor: blue,
            },
            steps: [
                {
                    down: [
                        {
                            actionId: 'call_attention_cp',
                            options: {},
                        }
                    ],
                    up: []
                }
            ],
        },
        stop_countdown_cp: {
            type: 'button',
            category: 'Communication Panel',
            name: 'Stop CP Countdown',
            style: {
                color: white,
                bgcolor: blue,
                text: 'Stop\\nTimer'
            },
            steps: [
                {
                    down: [{
                        actionId: 'stop_countdown_cp',
                        options: {}
                    }]
                }
            ],
            feedbacks: [{
                feedbackId: 'CPCountdown',
                options: {},
                style: {
                    color: white,
                    bgcolor: red,
                }
            }]
        },
    }

    const times = [1, 3, 5, 10, 15, 30]
    times.forEach( (time) => {
        presets['cp_countdown'+time] = {
            type: 'button',
            category: 'Communication Panel',
            name: 'Countdown, minutes='+time,
            style: {
                text: `Timer\\n${time}:00`,
                color: white,
                bgcolor: blue,
            },
            steps: [
                {
                    down: [
                        {
                            actionId: 'show_countdown_cp',
                            options: { 
                                minutes: time, 
                                seconds: 0,
                                yellow_starts_at: 30,
                                stop_at_zero: true
                            }
                        }
                    ],
                    up: []
                }
            ],
            feedbacks: [{
                feedbackId: 'CPCountdown',
                options: {},
                style: {
                    color: white,
                    bgcolor: red,
                    text: 'Timer\\n$(holyrics:cp_countdown)'
                }
            }]
        }
    })

    const tags = ['Chorus', 'Verse', 'PreChorus', 'Intro', 'Bridge', 'Tag', 'End', 
        'Verse 1', 'Verse 2', 'Verse 3', 'Verse 4', 'Verse 5', 'Verse 6', 'Verse 7', 'Verse 8', 'Verse 9', 
        'Refrão', 'Versículo 1', 'Versículo 2', 'Versículo 3', 'Versículo 4', 'Versículo 5', 'Versículo 6',
        'Versículo 7', 'Versículo 8', 'Versículo 9']

    tags.forEach( (tag) => {
        presets['Desc '+tag] = {
            type: 'button',
            category: 'Go To Site Description',
            name: tag,
            style: {
                text: tag,
                color: white,
                bgcolor: black,
                size: "18",
            },
            steps: [
                {
                    down: [{
                        actionId: 'goto_slide_description',
                        options: {
                            slide_description: tag,
                        }
                    }],
                    up: []
                }
            ],
            feedbacks: [{
                feedbackId: 'SlideDescription',
                options: {
                    slide_description: tag
                },
                style: {
                    color: black,
                    bgcolor: white,
                }
            }]
        }
    })
    self.setPresetDefinitions(presets)
}