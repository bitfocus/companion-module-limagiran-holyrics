const { combineRgb } = require('@companion-module/base')

module.exports = function (self) {
    const black = combineRgb(0, 0, 0)
    const white = combineRgb(255, 255, 255)
    const red = combineRgb(255, 0, 0)
    const gray = combineRgb(64, 64, 64)

    self.setPresetDefinitions({
        prev: {
            type: 'button',
            category: 'Slide controls',
            name: 'Previous',
            style: {
                text: '<\\nPrev',
                color: black,
                bgcolor: combineRgb(0, 128, 0),
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
                bgcolor: combineRgb(0, 128, 0),
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
                text: 'Hide slides',
                color: white,
                bgcolor: black
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
                text: '\u23ee',
                color: white,
                bgcolor: black,
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
            name: 'Play',
            style: {
                text: '\u23f5',
                color: white,
                bgcolor: black,
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
                        color: black,
                        bgcolor: red,
                        text: '\u23f8\\n$(holyrics:mp_time_remaining)'
                    }
                }
            ]
        },
        mp_next: {
            type: 'button',
            category: 'Media Player',
            name: 'Next',
            style: {
                text: '\u23ed',
                color: white,
                bgcolor: black,
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
        lyrics_playlist_previous: {
            type: 'button',
            category: 'Lyrics Playlist',
            name: 'Previous lyrics',
            style: {
                text: '\u23ee',
                bgcolor: black,
                color: combineRgb(0, 128, 0),
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
                color: combineRgb(0, 128, 0),
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
                color: combineRgb(0, 128, 0),
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

    })
}