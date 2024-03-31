module.exports = function (self) {



	self.setActionDefinitions({
		show_logo: {
			name: 'Show Logo',
			options: [ ],
			callback: async (event) => {
				self.do_command('SetLogo', {enabled: true, hide: false})
			},
		},
		hide_logo: {
			name: 'Hide Logo',
			options: [ ],
			callback: async (event) => {
				self.do_command('SetLogo', {enabled: true, hide: true})
			},
		},
		next: {
			name: 'Next',
			options: [ ],
			callback: async (event) => {
				self.do_command('ActionNext', {})
			},
		},
		previous: {
			name: 'Previous',
			options: [ ],
			callback: async (event) => {
				// console.log('Show Lo', event.options.num)
				self.do_command('ActionPrevious', {})
			},
		},
		show_verse: {
			name: 'Show Verse(s)',
			options: [
				{
					type: 'dropdown',
					label: 'Bible version',
					id: 'version',
					choices: self.CHOICES_BIBLE_VERSIONS,
					default: self.CHOICES_BIBLE_VERSIONS[0].id
				},
				{
					type: 'textinput',
					label: 'Verse(s)',
					id: 'verses',
					default: 'Rm 12:2  Gn 1:1-3 Ps 23',
				}
			],
			callback: async (event) => {
				self.do_command('ShowVerse', {version: event.options.version, references: event.options.verses})
			}
		},
		show_lyrics: {
			name: 'Show Lyrics',
			options: [
				{
					type: 'textinput',
					label: 'ID',
					id: 'id',
				}
			],
			callback: async (event) => {
				self.do_command('ShowLyrics', {id: event.options.id})
			}
		},
		show_text: {
			name: 'Show Text',
			options: [
				{
					type: 'textinput',
					label: 'ID',
					id: 'id',
				}
			],
			callback: async (event) => {
				self.do_command('ShowText', {id: event.options.id})
			}
		},
		show_quick_presentation: {
			name: 'Show Quick Presentation',
			options: [
				{
					type: 'textinput',
					label: 'Presentation text',
					id: 'text',
				},
				{
					type: 'textinput',
					label: 'Theme ID (optional)',
					id: 'themeid',
				},
			],
			callback: async (event) => {
				var options = {text: event.options.text}
				if (event.options.themeid != "") {
					options["theme"] = {id: event.options.themeid}
				}
				self.do_command("ShowQuickPresentation", options)
			}
		},
		set_f8: {
			name: 'Set F8 (wallpaper)',
			options: [
				{
					type: 'checkbox',
					label: 'Enable',
					id: 'enable'
				}
			],
			callback: async (event) => {
				self.do_command('SetF8', {enable: event.options.enable})
			}
		},
		set_f9: {
			name: 'Set F9 (empty screen)',
			options: [
				{
					type: 'checkbox',
					label: 'Enable',
					id: 'enable'
				}
			],
			callback: async (event) => {
				self.do_command('SetF9', {enable: event.options.enable==true})
			}
		},	
		set_f10: {
			name: 'Set F10 (black screen)',
			options: [
				{
					type: 'checkbox',
					label: 'Enable',
					id: 'enable'
				}
			],
			callback: async (event) => {
				self.do_command('SetF10', {enable: event.options.enable})
			}
		},
		toggle_f8: {
			name: 'Toggle F8 (wallpaper)',
			options: [],
			callback: async (event) => {
				self.do_command('ToggleF8')
			}
		},
		toggle_f9: {
			name: 'Toggle F9 (empty screen)',
			options: [],
			callback: async (event) => {
				self.do_command('ToggleF9')
			}
		},	
		toggle_f10: {
			name: 'Toggle F10 (black screen)',
			options: [],
			callback: async (event) => {
				self.do_command('ToggleF10')
			}
		},	
		show_alert: {
			name: 'Show Alert',
			options: [
				{
					type: 'textinput',
					label: 'Alert text',
					id: 'text',
				},
			],
			callback: async (event) => {
				self.do_command('SetAlert', {text: event.options.text, show: true})
			}
		},
		hide_alert: {
			name: 'Hide Alert',
			options: [],
			callback: async (event) => {
				self.do_command('SetAlert', {show: false})
			}
		},
		toggle_alert: {
			name: 'Toggle Alert',
			options: [
				{
					type: 'textinput',
					label: 'Alert text',
					id: 'text',
				},
			],
			callback: async (event) => {
				var alert = JSON.parse(await self.do_command('GetAlert'))
				self.do_command('SetAlert', {text: event.options.text, show: !alert.data.show})
			}
		},
		show_countdown: {
			name: 'Show Countdown',
			options: [
				{
					type: 'textinput',
					label: 'Time',
					id: 'time',
					default: '10:00',
					regex: '/^[0-9]?[0-9]:[0-5][0-9]$/'
				},
				{
					type: 'dropdown',
					label: 'Type',
					id: 'exact_time',
					choices: [
						{id: 'true', label: 'Time of day, HH:MM'},
						{id: 'false', label: 'Countdown minutes, MM:SS'}
					],
					default: 'true'
				},
				{
					type: 'textinput',
					label: 'Text displayed at the top of the countdown',
					id: 'text_before',
				},
				{
					type: 'textinput',
					label: 'Text displayed at the bottom of the countdown',
					id: 'text_after',
				},
				{
					type: 'textinput',
					label: 'Theme ID (optional)',
					id: 'themeid',
				},
			],
			callback: async (event) => {
				var options = {
					time: event.options.time, 
					exact_time: event.options.exact_time=='true',
					text_before: event.options.text_before,
					text_after: event.options.text_after,
				}
				if (event.options.themeid != "") {
					options["theme"] = {id: event.options.themeid}
				}
				self.do_command("ShowCountdown", options)
			}
		},
		close_presentation: {
			name: 'Close Presentation',
			options: [],
			callback: async (event) => {
				self.do_command('CloseCurrentPresentation')
			}
		}
	})
}
