canvas_init08= ->
	canvas = document.getElementById 'js_canvas08'

	if not canvas or not canvas.getContext
		return false
		console.log 'miss'

	ctx = canvas.getContext('2d')
	ctx.globalAlpha = 0.8


	###
	情報オブジェクトを配列にまとめる
	{
		[x: XX, y: XX, r: XX, c: XX],
		[x: XX, y: XX, r: XX, c: XX],
	}
	###
	info_arr01      = []
	info_arr02      = []
	info_arr03      = []
	obj_count       = 10
	anime01_counter = 0
	anime02_counter = 0
	anime03_counter = 0
	move_length     = 30
	move_length02   = 60
	move_length03   = 60
	opacity_start   = 25

	for i in [0...obj_count]
		obj = {}
		obj.x = _getChart(canvas).x
		obj.y = _getChart(canvas).y
		obj.r = _getR(5, 15)
		obj.c = _getClr02()
		info_arr01.push obj

	for i in [0...obj_count]
		obj = {}
		obj.x = _getChart(canvas).x
		obj.y = _getChart(canvas).y
		obj.r = _getR(5, 15)
		obj.c = _getClr02()
		info_arr02.push obj

	for i in [0...obj_count]
		obj = {}
		obj.x = _getChart(canvas).x
		obj.y = _getChart(canvas).y
		obj.r = _getR(5, 15)
		obj.c = _getClr02()
		info_arr03.push obj

	anime01 = ->
		ctx.clearRect 0,0,canvas.width, canvas.height

		for i in [0...obj_count]

			if anime01_counter > move_length
				anime01_counter = 0

			x = info_arr01[i].x+Math.sin(anime01_counter)
			y = info_arr01[i].y-anime01_counter
			r = info_arr01[i].r
			if anime01_counter > opacity_start
				a = info_arr03[i].c.a - (0.1 * (anime01_counter - opacity_start))
			else
				a = info_arr03[i].c.a
			c = 'rgba(' + info_arr03[i].c.r + ', ' + info_arr03[i].c.g + ', ' + info_arr03[i].c.b + ', ' + a + ')'
			

			ctx.beginPath()
			ctx.fillStyle = c
			ctx.arc x, y, r, _angle(0), _angle(360)
			ctx.fill()


		anime01_counter++;
		setTimeout(anime01, 100)

	anime02 = ->

		for i in [0...obj_count]

			if anime02_counter > move_length02
				anime02_counter = 0

			x = info_arr02[i].x+Math.sin(anime02_counter)*2
			y = info_arr02[i].y-anime02_counter*0.6
			r = info_arr02[i].r*0.8
			if anime02_counter > opacity_start
				a = info_arr03[i].c.a - (0.1 * (anime02_counter - opacity_start))
			else
				a = info_arr03[i].c.a
			c = 'rgba(' + info_arr03[i].c.r + ', ' + info_arr03[i].c.g + ', ' + info_arr03[i].c.b + ', ' + a + ')'
			

			ctx.beginPath()
			ctx.fillStyle = c
			ctx.arc x, y, r, _angle(0), _angle(360)
			ctx.fill()


		anime02_counter++;
		setTimeout(anime02, 100)

	anime03 = ->

		for i in [0...obj_count]

			if anime03_counter > move_length03
				anime03_counter = 0

			x = info_arr03[i].x+Math.sin(anime03_counter)*3
			y = info_arr03[i].y-anime03_counter*1.6
			r = info_arr03[i].r*1.2
			if anime03_counter > opacity_start
				a = info_arr03[i].c.a - (0.1 * (anime03_counter - opacity_start))
			else
				a = info_arr03[i].c.a
			c = 'rgba(' + info_arr03[i].c.r + ', ' + info_arr03[i].c.g + ', ' + info_arr03[i].c.b + ', ' + a + ')'
			

			ctx.beginPath()
			ctx.fillStyle = c
			ctx.arc x, y, r, _angle(0), _angle(360)
			ctx.fill()


		anime03_counter++;
		setTimeout(anime03, 100)





	do start = ->
		# 実行関数
		setTimeout anime01(), 1500
		setTimeout anime02(), 3000
		setTimeout anime03(), 4500
		@