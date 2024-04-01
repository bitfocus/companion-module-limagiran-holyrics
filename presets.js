const { combineRgb } = require('@companion-module/base')

module.exports = function (self) {
    const black = combineRgb(0, 0, 0)
    const white = combineRgb(255, 255, 255)
    const red = combineRgb(255, 0, 0)
    const gray = combineRgb(64, 64, 64)

    self.setPresetDefinitions({
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
        }

    })
}