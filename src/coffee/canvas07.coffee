canvas_init07= ->
	canvas = document.getElementById 'js_canvas07'

	if not canvas or not canvas.getContext
		return false
		console.log 'miss'

	ctx = canvas.getContext('2d')
	ctx.globalAlpha = 0.5

	colors = ['255,0,0,1', '255,186,182,1', '255,255,0,1', '0,0,255,1', '124,187,255,1', '0,118,0,1', '230,0,233,1']

	obj_count   = 50

	anime_counter01 = 0

	do anime01 = ->

		x01 = Math.floor Math.random()*canvas.width
		y01 = Math.floor (Math.random()*(canvas.height-canvas.height/3))+canvas.height/3
		r01 = Math.floor (Math.random()*5)+8
		c01 = colors[Math.floor Math.random()*colors.length]

		x02 = Math.floor Math.random()*canvas.width
		y02 = Math.floor (Math.random()*(canvas.height-canvas.height/3))+canvas.height/3
		r02 = Math.floor (Math.random()*5)+8
		c02 = colors[Math.floor Math.random()*colors.length]



		time = 3000
		flame= 100
		move = time / flame / 30
		move_counter = 0

		do anime02 = ->
			ctx.clearRect 0,0,canvas.width, canvas.height

			x01 = x01 + Math.sin(move_counter)
			y01 = y01 - move

			ctx.beginPath()
			ctx.fillStyle = _getClr()
			ctx.arc x01, y01, r01, _angle(0), _angle(360)
			ctx.fill()

			x02 = x02 + Math.sin(move_counter)
			y02 = y02 - move

			ctx.beginPath()
			ctx.fillStyle = _getClr()
			ctx.arc x02, y02, r02, _angle(0), _angle(360)
			ctx.fill()

			#console.log _getClr()


			move_counter++;
			if flame*move_counter < time
				setTimeout(anime02, flame)

		anime_counter01++;
		if anime_counter01 < obj_count 
			setTimeout(anime01, time)




