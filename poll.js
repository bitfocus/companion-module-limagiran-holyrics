module.exports = async function (self) {
    function extractCountdownTimeFromPresentation(p) {
        if (p == null 
            || (p.type != 'unknown' && p.type != 'countdown') 
            || (p.slide_number != 1 || p.total_slides != 1)
            || p.slides == null ) {
          return null
        }
        
        var rows = p.slides[0].text.split("\n")
        if (rows.length != 2 && rows.length != 3) {
          return null
        }
        var row = (rows.length == 2) ? rows[0] : rows[1]
        var regex = /^[\d:.]*$/
        return regex.test(row) ? row : null
    }

    function formatTime(seconds) {
        if (seconds==undefined || seconds==null || seconds==0) {
            return '0:00'
        }
        var sign = ''
        if (seconds<0) {
            sign = '-'
            seconds = -seconds
        }
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
    
        const formattedHours = hours < 10 ? '0' + hours : hours;
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        const formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
    
        if (hours === 0) {
            return `${sign}${formattedMinutes}:${formattedSeconds}`;
        } else {
            return `${sign}${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
        }
    }

    var slide = JSON.parse(await self.do_command('GetCurrentPresentation', { include_slides: true }))
    var alert = JSON.parse(await self.do_command('GetAlert'))
    var mediaPlayer = JSON.parse(await self.do_command('GetMediaPlayerInfo'))
    var controlPanel = JSON.parse(await self.do_command('GetCPInfo'))

    self.state['show_alert'] = alert?.data?.show
    self.state['slide_id'] = slide?.data?.id
    self.state['slide_type'] = slide?.data?.type
    self.state['slide_name'] = slide?.data?.name
    self.state['song_id'] = slide?.data?.song_id
    self.state['reference_id'] = slide?.data?.reference_id
    self.state['slide_number'] = slide?.data?.slide_number
    self.state['slide_count'] = slide?.data?.total_slides
    
    if (slide?.data?.slide_type != undefined) {
        self.state['f8_active'] = slide.data.slide_type == 'wallpaper'
        self.state['f9_active'] = slide.data.slide_type == 'blank'
        self.state['f10_active'] = slide.data.slide_type == 'black'
    } else {
        var f9    = JSON.parse(await self.do_command('GetF9'))
        var f8    = JSON.parse(await self.do_command('GetF8'))
        var f10   = JSON.parse(await self.do_command('GetF10'))

        self.state['f8_active'] = f8?.data
        self.state['f9_active'] = f9?.data
        self.state['f10_active'] = f10?.data
    }

    if (slide?.data !== undefined) {
        var t = extractCountdownTimeFromPresentation(slide.data)
        if (t==null) {
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

/* 
{
  "status": "ok",
  "data": {
    "name": "Sternengeschichten Folge 592: Killersatelliten und Weltraumwaffen",
    "path": "C:\\Holyrics\\Holyrics\\files\\media\\audio\\1399936-m-0a446e841422777d8492a441644d6968.mp3",
    "playing": true,
    "duration_ms": 662282,
    "time_ms": 244577,
    "time_elapsed": "04:04",
    "time_remaining": "06:57",
    "volume": 90,
    "mute": false,
    "repeat": false,
    "execute_single": true,
    "shuffle": false,
    "fullscreen": false
  }
}
*/