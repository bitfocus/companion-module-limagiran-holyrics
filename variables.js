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
	])
}