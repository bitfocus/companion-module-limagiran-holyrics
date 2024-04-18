const { combineRgb } = require('@companion-module/base')

module.exports = async function (self) {
	const black = combineRgb(0, 0, 0)
    const white = combineRgb(255, 255, 255)
    const red = combineRgb(255, 0, 0)
    const gray = combineRgb(64, 64, 64)

	self.setFeedbackDefinitions({
		Alert: {
			name: 'Alert active',
			type: 'boolean',
			//label: 'Alert active',
			defaultStyle: {
				bgcolor: red,
				color: black,
			},
			options: [
			],
			callback: async (feedback) => {
				return self.state['show_alert']
			},
		},
		Countdown: {
			name: 'Countdown active',
			type: 'boolean',
			//label: 'Countdown active',
			defaultStyle: {
				bgcolor: red,
				color: black,
			},
			options: [],
			callback: async (feedback) => {
				return self.state['countdown'] != ""
			}
		},
		CPCountdown: {
			name: 'Communication Panel: Countdown active',
			type: 'boolean',
			defaultStyle: {
				bgcolor: red,
				color: black,
			},
			options: [],
			callback: async (feedback) => {
				return self.state['cp_countdown_show']
			}
		},
		Slide: {
			name: 'Any slide active',
			type: 'boolean',
			//label: 'Any slide active',
			defaultStyle: {
				bgcolor: red,
				color: black,
			},
			options: [],
			callback: async (feedback) => {
				return self.state['slide_type'] != undefined
			}
		},
		F8: {
			name: 'F8 (wallpaper) active',
			type: 'boolean',
			defaultStyle: {
				bgcolor: red,
				color: black,
			},
			options: [],
			callback: async (feedback) => {
				return self.state['f8_active']
			}
		},
		F9: {
			name: 'F9 (empty slide) active',
			type: 'boolean',
			defaultStyle: {
				bgcolor: red,
				color: black,
			},
			options: [],
			callback: async (feedback) => {
				return self.state['f9_active']
			}
		},
		F10: {
			name: 'F10 (black screen) active',
			type: 'boolean',
			defaultStyle: {
				bgcolor: red,
				color: black,
			},
			options: [],
			callback: async (feedback) => {
				return self.state['f10_active']
			}
		},
		MP_Playing: {
			name: 'MediaPlayer plays a file',
			type: 'boolean',
			defaultStyle: {
				bgcolor: red,
				color: black
			},
			options: [],
			callback: async (feedback) => {
				return self.state['mp_playing']
			}
		},
		MP_Muted: {
			name: 'MediaPlayer muted',
			type: 'boolean',
			defaultStyle: {
				bgcolor: red,
				color: black
			},
			options: [],
			callback: async (feedback) => {
				return self.state['mp_mute']
			}
		},
		MP_Repeat: {
			name: 'MediaPlayer repeat',
			type: 'boolean',
			defaultStyle: {
				bgcolor: red,
				color: black
			},
			options: [],
			callback: async (feedback) => {
				return self.state['mp_repeat']
			}
		},
		MP_Execute_Single: {
			name: 'MediaPlayer execute single',
			type: 'boolean',
			defaultStyle: {
				bgcolor: red,
				color: black
			},
			options: [],
			callback: async (feedback) => {
				return self.state['mp_execute_single']
			}
		},
		MP_Fullscreen: {
			name: 'MediaPlayer fullscreen',
			type: 'boolean',
			defaultStyle: {
				bgcolor: red,
				color: black
			},
			options: [],
			callback: async (feedback) => {
				return self.state['mp_fullscreen']
			}
		},
		FirstSlide: {
			name: "First slide of the presentation",
			type: 'boolean',
			defaultStyle: {
				bgcolor: gray
			},
			options: [],
			callback: async (feedback) => {
				if (self.state['slide_number'] != undefined) {
					return self.state["slide_number"] == 1
				}
				return false
			}
		},
		LastSlide: {
			name: "Last slide of the presentation",
			type: 'boolean',
			defaultStyle: {
				bgcolor: gray
			},
			options: [],
			callback: async (feedback) => {
				if (self.state['slide_number'] != undefined) {
					return self.state["slide_number"] == self.state["slide_count"]
				}
				return false
			}
		},
		FirstLyricsPlaylist: {
			name: "First lyrics from the playlist",
			type: 'boolean',
			defaultStyle: {
				bgcolor: gray
			},
			options: [],
			callback: async (feedback) => {
				return self.state["playlist_first_lyrics"] == true
			}
		},
		LastLyricsPlaylist: {
			name: "Last lyrics from the playlist",
			type: 'boolean',
			defaultStyle: {
				bgcolor: gray
			},
			options: [],
			callback: async (feedback) => {
				return self.state["playlist_last_lyrics"] == true
			}
		},
	})
}
