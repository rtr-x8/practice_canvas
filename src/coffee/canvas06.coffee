canvas_init06= ->
	###
	3秒置きにランダム個所に表示。
	2.5秒間アニメーション
	0.5秒間かけて消滅
	###
	canvas = document.getElementById 'js_canvas06'

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


	anime_counter01 = 0
	anime_counter02 = 0
	do anime01 = ->

		x = x_arr[anime_counter01]
		y = y_arr[anime_counter01]
		r = r_arr[anime_counter01]
		c = c_arr[anime_counter01]

		ctx.beginPath()
		ctx.fillStyle = 'rgba('+c+')'
		ctx.arc x, y, r, _angle(0), _angle(360)
		ctx.fill()

		anime_counter01++;
		if anime_counter01 < obj_count 
			setTimeout(anime01, 300)

	do anime02 = ->

		x = x_arr[obj_count-anime_counter02]
		y = y_arr[obj_count-anime_counter02]
		r = r_arr[obj_count-anime_counter02]
		c = c_arr[obj_count-anime_counter02]


		ctx.beginPath()
		ctx.strokeStyle = 'rgba('+c+')'
		ctx.arc x, y, r, _angle(0), _angle(360)
		ctx.stroke()

		anime_counter02++;
		if anime_counter02 < obj_count 
			setTimeout(anime02, 450)



