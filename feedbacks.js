const { combineRgb } = require('@companion-module/base')

module.exports = async function (self) {
	self.setFeedbackDefinitions({
		Alert: {
			name: 'Alert active',
			type: 'boolean',
			//label: 'Alert active',
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(0, 0, 0),
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
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(0, 0, 0),
			},
			options: [],
			callback: async (feedback) => {
				return self.state['countdown'] != ""
			}
		},
		Slide: {
			name: 'Any slide active',
			type: 'boolean',
			//label: 'Any slide active',
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(0, 0, 0),
			},
			options: [],
			callback: async (feedback) => {
				console.log('slide',self.state['slide_type'], self.state['slide_type'] != "")
				return self.state['slide_type'] != undefined
			}
		},
		F8: {
			name: 'F8 (wallpaper) active',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(0, 0, 0),
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
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(0, 0, 0),
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
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(0, 0, 0),
			},
			options: [],
			callback: async (feedback) => {
				return self.state['f10_active']
			}
		},
	})
}
