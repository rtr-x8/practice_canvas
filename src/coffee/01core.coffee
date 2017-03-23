window.onload = -> 
	canvas_init01()
	canvas_init02()
	canvas_init03()
	canvas_init04()
	canvas_init05()
	canvas_init06()
	canvas_init07()
	true

$(document).resize ->
	$('canvas').each ->
		h = $(this).closest('.js_in').innerWidth();
		console.log h
		$(this).attr('width', h)
.trigger('resize');

_angle=(num)->
	num / 180 * Math.PI

_getClr = ->
	r = Math.floor (Math.random() * 255)
	g = Math.floor (Math.random() * 255)
	b = Math.floor (Math.random() * 255)
	a = Math.random()
	'rgba('+r+','+g+','+b+','+a+')'


colors = ['red', 'pink', 'yellow', 'blue', 'aqua', 'green', 'blueviolet', 'darkgoldenrod', 'gold']