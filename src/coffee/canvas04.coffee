canvas_init04= ->
	canvas = document.getElementById 'js_canvas04'
	###
	とりあえず動かしてみる
	###

	if not canvas or not canvas.getContext
		return false
		console.log 'miss'

	ctx = canvas.getContext('2d')
	ctx.globalAlpha = 0.5

	i = 0
	diff = 50

	do anime = ->
		if i*diff-10 > canvas.height
			i = 0.01
		y = canvas.height - i*diff
		x = canvas.width/2 - (Math.sin(i))*diff
		ctx.clearRect 0,0,canvas.width, canvas.height

		ctx.beginPath()
		ctx.arc x, y, 10, _angle(0), _angle(360)
		ctx.fill()

		i=i+0.01
		console.log i
		setTimeout(anime, 10)

	