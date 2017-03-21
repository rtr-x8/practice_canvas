canvas_init03= ->
	canvas = document.getElementById 'js_canvas03'

	if not canvas or not canvas.getContext
		return false
		console.log 'miss'

	ctx = canvas.getContext('2d')
	ctx.globalAlpha = 0.5


	max = 100
	colors = ['red', 'pink', 'yellow', 'blue', 'slyblue', 'green']

	do start01 = ->
		ctx.clearRect 0,0,canvas.width, canvas.height
		for i in [1...max]
			x = Math.floor Math.random()*canvas.width
			y = Math.floor Math.random()*canvas.height
			scale = (Math.floor(Math.random()*15)+5)/10
			color = colors[Math.floor Math.random()*colors.length]

			ctx.beginPath()
			ctx.fillStyle = color
			ctx.arc x, y, 10*scale, 0, _angle 360
			ctx.fill()
		setTimeout(start01, 1500)