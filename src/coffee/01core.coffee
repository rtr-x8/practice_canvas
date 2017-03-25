window.onload = -> 
	canvas_init01()
	canvas_init02()
	canvas_init03()
	canvas_init04()
	canvas_init05()
	canvas_init06()
	canvas_init07()
	canvas_init08()
	true

$(document).resize ->
	$('canvas').each ->
		h = $(this).closest('.js_in').innerWidth();
		$(this).attr('width', h)
.trigger('resize');

_angle=(num)->
	num / 180 * Math.PI

_getClr = ->
	# 色をランダムで文字列で返す 'rgba(255, 255, 255, 1)'
	r = Math.floor (Math.random() * 255)
	g = Math.floor (Math.random() * 255)
	b = Math.floor (Math.random() * 255)
	a = Math.floor(Math.random() * 100 ) / 100
	'rgba('+r+','+g+','+b+','+a+')'

_getClr02 = ->
	r = Math.floor (Math.random() * 255)
	g = Math.floor (Math.random() * 255)
	b = Math.floor (Math.random() * 255)
	a = Math.floor(Math.random() * 100 ) / 100
	arr = {r: r, g: g, b: b, a: .5}

_getChart =(canvas) ->
	# cabvas 幅内でランダムに返す
	x = Math.floor Math.random()*canvas.width
	y = Math.floor Math.random()*canvas.height
	arr = {x: x, y : y}

_getR = (min, max) ->
	# 整数
	Math.floor (Math.random()*(max-min))+min



colors = ['red', 'pink', 'yellow', 'blue', 'aqua', 'green', 'blueviolet', 'darkgoldenrod', 'gold']