canvas_init05= ->
	###
	3秒置きにランダム個所に表示。
	2.5秒間アニメーション
	0.5秒間かけて消滅
	###
	canvas = document.getElementById 'js_canvas05'

	if not canvas or not canvas.getContext
		return false
		console.log 'miss'

	ctx = canvas.getContext('2d')
	ctx.globalAlpha = 0.5

	colors = ['255,0,0,1', '255,186,182,1', '255,255,0,1', '0,0,255,1', '124,187,255,1', '0,118,0,1', '230,0,233,1']


	x_arr = []
	y_arr = []
	c_arr = []
	r_arr = []
	obj_count   = 50
	for i in [0...obj_count]
		x_arr.push Math.floor Math.random()*canvas.width
		y_arr.push Math.floor Math.random()*canvas.height
		c_arr.push colors[Math.floor Math.random()*colors.length]
		r_arr.push Math.floor (Math.random()*5)+8 ;



	move_counter = 0
	do anime01 = ->
		if move_counter > 20
			move_counter = 0

		ctx.clearRect 0,0,canvas.width, canvas.height

		for i in [0...10]
			x = x_arr[i]+Math.sin(move_counter)
			y = y_arr[i]-move_counter
			r = r_arr[i]
			c = c_arr[i]

			# 透過度
			if move_counter > 15
				index = c.length - c.lastIndexOf ','
				for i in [1...index]
					c = c.substr( 0, c.length-1 ) 
				c += 0.2*(20-move_counter)

			ctx.beginPath()
			ctx.fillStyle = 'rgba('+c+')'
			ctx.arc x, y, r, _angle(0), _angle(360)
			ctx.fill()


		move_counter++;
		setTimeout(anime01, 100)

