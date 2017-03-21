canvas_init02= ->
	canvas = document.getElementById 'js_canvas02'

	if not canvas or not canvas.getContext
		return false
		console.log 'miss'

	ctx = canvas.getContext('2d')
	ctx.globalAlpha = 0.5


	max = 100

	for i in [1...max]
		x = Math.floor Math.random()*canvas.width
		y = Math.floor Math.random()*canvas.height
		color = colors[Math.floor Math.random()*colors.length]

		ctx.beginPath()
		ctx.fillStyle = color
		ctx.arc x, y, 10, 0, _angle 360
		ctx.fill()
