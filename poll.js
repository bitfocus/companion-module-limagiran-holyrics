module.exports = async function (self) {
	function safeParse(value) {
		if (!value) return null
		try {
			return JSON.parse(value)
		} catch (e) {
			return null
		}
	}

	function extractCountdownTimeFromPresentation(p) {
		if (
			p == null ||
			(p.type != 'unknown' && p.type != 'countdown') ||
			p.slide_number != 1 ||
			p.total_slides != 1 ||
			p.slides == null
		) {
			return null
		}

		var rows = p.slides[0].text.split('\n')
		if (rows.length != 2 && rows.length != 3) {
			return null
		}
		var row = rows.length == 2 ? rows[0] : rows[1]
		var regex = /^[\d:.]*$/
		return regex.test(row) ? row : null
	}

	function formatTime(seconds) {
		if (seconds == undefined || seconds == null || seconds == 0) {
			return '0:00'
		}
		var sign = ''
		if (seconds < 0) {
			sign = '-'
			seconds = -seconds
		}
		const hours = Math.floor(seconds / 3600)
		const minutes = Math.floor((seconds % 3600) / 60)
		const remainingSeconds = seconds % 60

		const formattedHours = hours < 10 ? '0' + hours : hours
		const formattedMinutes = minutes < 10 ? '0' + minutes : minutes
		const formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds

		if (hours === 0) {
			return `${sign}${formattedMinutes}:${formattedSeconds}`
		} else {
			return `${sign}${formattedHours}:${formattedMinutes}:${formattedSeconds}`
		}
	}

	var slide = safeParse(await self.do_command('GetCurrentPresentation', { include_slides: true }))
	var alert = safeParse(await self.do_command('GetAlert'))
	var mediaPlayer = safeParse(await self.do_command('GetMediaPlayerInfo'))
	var controlPanel = safeParse(await self.do_command('GetCPInfo'))
	var slideData = slide?.data ?? null
	var slideNumber = slideData?.slide_number
	var slideIndex = Number.isInteger(slideNumber) ? slideNumber - 1 : -1
	var slides = Array.isArray(slideData?.slides) ? slideData.slides : []
	var currentSlide = slideIndex >= 0 && slideIndex < slides.length ? slides[slideIndex] : null

	self.state['show_alert'] = alert?.data?.show
	self.state['slide_id'] = slideData?.id
	self.state['slide_type'] = slideData?.type
	self.state['slide_name'] = slideData?.name
	self.state['song_id'] = slideData?.song_id
	self.state['text_id'] = slideData?.text_id
	self.state['reference_id'] = slideData?.reference_id
	self.state['slide_number'] = slideData?.slide_number
	self.state['slide_count'] = slideData?.total_slides
	self.state['slide_description'] = currentSlide?.slide_description ?? ''
	self.state['current_text'] = currentSlide?.text ?? slideData?.text ?? slideData?.reference_id ?? slideData?.name ?? ''

	if (slideData?.slide_type != undefined) {
		self.state['f8_active'] = slideData.slide_type == 'wallpaper'
		self.state['f9_active'] = slideData.slide_type == 'blank'
		self.state['f10_active'] = slideData.slide_type == 'black'
	} else {
		var f9 = safeParse(await self.do_command('GetF9'))
		var f8 = safeParse(await self.do_command('GetF8'))
		var f10 = safeParse(await self.do_command('GetF10'))

		self.state['f8_active'] = f8?.data
		self.state['f9_active'] = f9?.data
		self.state['f10_active'] = f10?.data
	}

	if (slideData !== undefined && slideData !== null) {
		var t = extractCountdownTimeFromPresentation(slideData)
		if (t == null) {
			self.state['countdown'] = ''
		} else {
			self.state['countdown'] = t
		}
	} else {
		self.state['countdown'] = ''
	}

	self.state['mp_playing'] = mediaPlayer?.data?.playing == true
	self.state['mp_time_elapsed'] = mediaPlayer?.data?.time_elapsed
	self.state['mp_time_remaining'] = mediaPlayer?.data?.time_remaining
	self.state['mp_mute'] = mediaPlayer?.data?.mute == true
	self.state['mp_repeat'] = mediaPlayer?.data?.repeat == true
	self.state['mp_execute_single'] = mediaPlayer?.data?.execute_single == true
	self.state['mp_fullscreen'] = mediaPlayer?.data?.fullscreen == true

	self.state['cp_countdown_show'] = controlPanel?.data?.countdown_show == true
	self.state['cp_countdown_seconds'] = controlPanel?.data?.countdown_time
	self.state['cp_countdown'] = formatTime(controlPanel?.data?.countdown_time)

	self.setVariableValues(self.state)
	self.checkFeedbacks()
}
