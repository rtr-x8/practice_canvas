canvas_init01= -> 
	canvas = document.getElementById 'js_canvas01'

	if not canvas or not canvas.getContext
		return false
		console.log 'miss'

	ctx = canvas.getContext('2d')
	i = 0

	do rotate = ->
		if i > 360
			i=0
		rad=250

		ctx.clearRect 0,0,canvas.width, canvas.height

		ctx.beginPath()
		ctx.arc canvas.width/2, canvas.height/2, 100, _angle(i), _angle(i+rad)
		ctx.lineWidth = 25
		ctx.lineCap   = 'round'
		ctx.stroke()
		i++
		setTimeout(rotate, 1)