canvas_init08= ->
	canvas = document.getElementById 'js_canvas08'

	if not canvas or not canvas.getContext
		return false
		console.log 'miss'

	ctx = canvas.getContext('2d')
	ctx.globalAlpha = 0.8



	anime01 = ->

		###
		情報オブジェクトを配列にまとめる
		{
			[x: XX, y: XX, r: XX, c: XX],
			[x: XX, y: XX, r: XX, c: XX],
		}
		###
		info_arr = []
		obj_count = 50
		for i in [0...obj_count]
			obj = {}
			obj.x = _getChart(canvas).x
			obj.y = _getChart(canvas).y
			obj.r = _getR(5, 15)
			obj.c = _getClr()
			info_arr.push obj

		console.log info_arr

		

		ctx.beginPath()
		ctx.fillStyle = _getClr()
		ctx.arc _getChart(canvas).x, _getChart(canvas).y, _getR(5,10), _angle(0), _angle(360)
		ctx.fill()



	do start = ->
		# 実行関数
		setTimeout anime01(), 0
		setTimeout ->
			console.log('anime02')
		, 1500
		setTimeout ->
			console.log('anime03')
		, 3000
		@