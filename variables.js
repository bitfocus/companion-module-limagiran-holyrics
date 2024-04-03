module.exports = async function (self) {
	self.setVariableDefinitions([
		{ variableId: 'slide_id', name: 'Holyrics: ID of the current slide' },
		{ variableId: 'slide_type', name: 'Holyrics: Type of the current slide' },
		{ variableId: 'slide_name', name: 'Holyrics: Type of the current slide' },
		{ variableId: 'song_id', name: 'Holyrics: ID of the current song' },
		{ variableId: 'text_id', name: 'Holyrics: ID of the current text' },
		{ variableId: 'reference_id', name: 'Holyrics: Reference ID' },
		{ variableId: 'slide_number', name: 'Holyrics: Number of the current slide' },
		{ variableId: 'slide_count', name: 'Holyrics: Total number of slides' },
		{ variableId: 'show_alert', name: 'Holyrics: Whether an alert is being shown' },
		{ variableId: 'countdown', name: 'Holyrics: Countdown time remaining'},
		{ variableId: 'f8_active', name: 'F8 (wallpaper) active'},
		{ variableId: 'f9_active', name: 'F9 (empty slide) active'},
		{ variableId: 'f10_active', name: 'F10 (black screen) active'},
		{ variableId: 'mp_playing', name: 'MediaPlayer: playing'},
		{ variableId: 'mp_time_elapsed', name: 'MediaPlayer: Elapsed time'},
		{ variableId: 'mp_time_remaining', name: 'MediaPlayer: Remaining time'},
	])
}