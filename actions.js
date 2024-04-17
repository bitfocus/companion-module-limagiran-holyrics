module.exports = function (self) {

    const PLAY_MEDIA_SETTINGS = [
		{
			type: 'textinput',
			label: 'Volume (optional)',
			id: 'volume',
			default: '',
                        regex: '/(^$|^[0-9]*$)/'
		},
		{
			type: 'checkbox',
			label: 'Repeat',
			id: 'repeat',
			default: false
		},
		{
			type: 'textinput',
			label: 'Start time (optional, SS, MM:SS or HH:MM:SS format)',
			id: 'start',
			regex: '/(^$|^[0-9]?[0-9]$|^[0-9][0-9]:[0-5][0-9]$|^[0-9][0-9]:[0-5][0-9]:[0-5][0-9]$)/'
		},
		{
			type: 'textinput',
			label: 'Stop time (optional, SS, MM:SS or HH:MM:SS format)',
			id: 'stop',
			regex: '/(^$|^[0-9]?[0-9]$|^[0-9][0-9]:[0-5][0-9]$|^[0-9][0-9]:[0-5][0-9]:[0-5][0-9]$)/'
		}
	]

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
					useVariables: true,
				}
			],
			callback: async (action) => {
				var id = await self.parseVariablesInString(action.options.id)
				self.do_command('ShowLyrics', {id: id})
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
		play_audio: {
			name: "Play Audio",
			options: [
				{
					type: 'textinput',
					label: 'Audio file name',
					id: 'file',
				},
			].concat(PLAY_MEDIA_SETTINGS),
			callback: async (event) => {
				var settings = {
					repeat: event.options.repeat,
				}
                                if (event.options.volume != '') {
					settings.volume = parseInt(event.options.volume)
                                }
				var file = event.options.file
				if (file.charAt(0) === '"' && file.charAt(file.length - 1) === '"') {
					// Remove the first and last characters (quotes)
					file =  file.slice(1, -1);
				}
				if (event.options.start != "") { settings.start_time = event.options.start }
				if (event.options.stop != "") { settings.stop_time = event.options.stop }
				self.do_command('PlayAudio',{file: file, settings: settings})
			}
		},
		play_video: {
			name: "Play Video",
			options: [
				{
					type: 'textinput',
					label: 'Video file name',
					id: 'file',
				},
			].concat(PLAY_MEDIA_SETTINGS),
			callback: async (event) => {
				var settings = {
					repeat: event.options.repeat,
				}
                                if (event.options.volume != '') {
					settings.volume = parseInt(event.options.volume)
                                }
				var file = event.options.file
				if (file.charAt(0) === '"' && file.charAt(file.length - 1) === '"') {
					// Remove the first and last characters (quotes)
					file = file.slice(1, -1);
				}
				if (event.options.start != "") { settings.start_time = event.options.start }
				if (event.options.stop != "") { settings.stop_time = event.options.stop }
				self.do_command('PlayVideo',{file: file, settings: settings})
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
		mp_pause: {
			name: 'MediaPlayer Pause',
			options: [],
			callback: async (event) => {
				self.do_command('MediaPlayerAction', {action: 'pause'})
			}
		},
		mp_play: {
			name: 'MediaPlayer Play',
			options: [],
			callback: async (event) => {
				self.do_command('MediaPlayerAction', {action: 'play'})
			}
		},
		mp_play_pause: {
			name: 'MediaPlayer Play/Pause',
			options: [],
			callback: async (event) => {
				var action='play'
				if (self.state['mp_playing']) {
					action='pause'
				}
				self.do_command('MediaPlayerAction', {action: action})
			}
		},
		mp_stop: {
			name: 'MediaPlayer Stop',
			options: [],
			callback: async (event) => {
				self.do_command('MediaPlayerAction', {action: 'stop'})
			}
		},
		mp_next: {
			name: 'MediaPlayer Next',
			options: [],
			callback: async (event) => {
				self.do_command('MediaPlayerAction', {action: 'next'})
			}
		},
		mp_previous: {
			name: 'MediaPlayer Previous',
			options: [],
			callback: async (event) => {
				self.do_command('MediaPlayerAction', {action: 'previous'})
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
		},
		lyrics_playlist_show_next: {
			name: 'Lyrics Playlist: Show next',
			options: [],
			callback: async (event) => {
				var playlist = JSON.parse(await self.do_command('GetLyricsPlaylist'))?.data
				var idx = 0
				if (self.state['current_lyrics'] != undefined) {
					idx = playlist.findIndex(
						(e) => e.id == self.state['current_lyrics']
					)
					idx = idx + 1 // "next"
				}
				if (idx < playlist.length) {
					self.state['current_lyrics'] = playlist[idx].id
					self.state['current_lyrics_title'] = playlist[idx].title
					self.state['playlist_first_lyrics'] = (idx == 0)
					self.state['playlist_last_lyrics'] = (idx == playlist.length-1)
				}
				self.do_command('ShowLyrics', {id: self.state['current_lyrics']})
			}
		},
		lyrics_playlist_show_previous: {
			name: 'Lyrics Playlist: Show previous',
			options: [],
			callback: async (event) => {
				var playlist = JSON.parse(await self.do_command('GetLyricsPlaylist'))?.data
				var idx = 0
				if (self.state['current_lyrics'] != undefined) {
					idx = playlist.findIndex(
						(e) => e.id == self.state['current_lyrics']
					)
					idx = idx - 1 // "previous"
				}
				if (idx >= 0) {
					self.state['current_lyrics'] = playlist[idx].id
					self.state['current_lyrics_title'] = playlist[idx].title
					self.state['playlist_first_lyrics'] = (idx == 0)
					self.state['playlist_last_lyrics'] = (idx == playlist.length-1)
				}				
				self.do_command('ShowLyrics', {id: self.state['current_lyrics']})
			}
		},
	})
}
