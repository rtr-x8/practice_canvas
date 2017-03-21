window.onload = -> 
	canvas_init01()
	canvas_init02()
	canvas_init03()
	canvas_init04()
	true



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





_angle=(num)->
	num / 180 * Math.PI





canvas_init02= ->
	canvas = document.getElementById 'js_canvas02'

	if not canvas or not canvas.getContext
		return false
		console.log 'miss'

	ctx = canvas.getContext('2d')
	ctx.globalAlpha = 0.5


	max = 100
	colors = ['red', 'pink', 'yellow', 'blue', 'aqua', 'green', 'blueviolet', 'darkgoldenrod']

	for i in [1...max]
		x = Math.floor Math.random()*canvas.width
		y = Math.floor Math.random()*canvas.height
		color = colors[Math.floor Math.random()*colors.length]

		ctx.beginPath()
		ctx.fillStyle = color
		ctx.arc x, y, 10, 0, _angle 360
		ctx.fill()



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


canvas_init04= ->
	