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

    var slide = JSON.parse(await self.do_command('GetCurrentPresentation', { include_slides: true }))
    var alert = JSON.parse(await self.do_command('GetAlert'))
    self.state['show_alert'] = alert.data?.show
    self.state['slide_id'] = slide.data?.id
    self.state['slide_type'] = slide.data?.type
    self.state['slide_name'] = slide.data?.name
    self.state['song_id'] = slide.data?.song_id
    self.state['reference_id'] = slide.data?.reference_id
    self.state['slide_number'] = slide.data?.slide_number
    self.state['slide_count'] = slide.data?.total_slides
    
    if (slide.data?.slide_type != undefined) {
        self.state['f8_active'] = slide.data?.slide_type == 'wallpaper'
        self.state['f9_active'] = slide.data?.slide_type == 'blank'
        self.state['f10_active'] = slide.data?.slide_type == 'black'
    } else {
        var f9    = JSON.parse(await self.do_command('GetF9'))
        var f8    = JSON.parse(await self.do_command('GetF8'))
        var f10   = JSON.parse(await self.do_command('GetF10'))

        self.state['f8_active'] = f8?.data
        self.state['f9_active'] = f9?.data
        self.state['f10_active'] = f10?.data
    }

    if (slide.data !== undefined) {
        var t = extractCountdownTimeFromPresentation(slide.data)
        if (t==null) {
            self.state['countdown'] = ''
        } else {
            self.state['countdown'] = t
        }
    } else {
        self.state['countdown'] = ''
    }
    
    self.setVariableValues(self.state)
    self.checkFeedbacks()
}