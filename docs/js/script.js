(function() {
  var _angle, canvas_init01, canvas_init02, canvas_init03, canvas_init04;

  window.onload = function() {
    canvas_init01();
    canvas_init02();
    canvas_init03();
    canvas_init04();
    return true;
  };

  canvas_init01 = function() {
    var canvas, ctx, i, rotate;
    canvas = document.getElementById('js_canvas01');
    if (!canvas || !canvas.getContext) {
      return false;
      console.log('miss');
    }
    ctx = canvas.getContext('2d');
    i = 0;
    return (rotate = function() {
      var rad;
      if (i > 360) {
        i = 0;
      }
      rad = 250;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 100, _angle(i), _angle(i + rad));
      ctx.lineWidth = 25;
      ctx.lineCap = 'round';
      ctx.stroke();
      i++;
      return setTimeout(rotate, 1);
    })();
  };

  _angle = function(num) {
    return num / 180 * Math.PI;
  };

  canvas_init02 = function() {
    var canvas, color, colors, ctx, i, j, max, ref, results, x, y;
    canvas = document.getElementById('js_canvas02');
    if (!canvas || !canvas.getContext) {
      return false;
      console.log('miss');
    }
    ctx = canvas.getContext('2d');
    ctx.globalAlpha = 0.5;
    max = 100;
    colors = ['red', 'pink', 'yellow', 'blue', 'aqua', 'green', 'blueviolet', 'darkgoldenrod'];
    results = [];
    for (i = j = 1, ref = max; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
      x = Math.floor(Math.random() * canvas.width);
      y = Math.floor(Math.random() * canvas.height);
      color = colors[Math.floor(Math.random() * colors.length)];
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.arc(x, y, 10, 0, _angle(360));
      results.push(ctx.fill());
    }
    return results;
  };

  canvas_init03 = function() {
    var canvas, colors, ctx, max, start01;
    canvas = document.getElementById('js_canvas03');
    if (!canvas || !canvas.getContext) {
      return false;
      console.log('miss');
    }
    ctx = canvas.getContext('2d');
    ctx.globalAlpha = 0.5;
    max = 100;
    colors = ['red', 'pink', 'yellow', 'blue', 'slyblue', 'green'];
    return (start01 = function() {
      var color, i, j, ref, scale, x, y;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (i = j = 1, ref = max; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
        x = Math.floor(Math.random() * canvas.width);
        y = Math.floor(Math.random() * canvas.height);
        scale = (Math.floor(Math.random() * 15) + 5) / 10;
        color = colors[Math.floor(Math.random() * colors.length)];
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(x, y, 10 * scale, 0, _angle(360));
        ctx.fill();
      }
      return setTimeout(start01, 1500);
    })();
  };

  canvas_init04 = function() {};

}).call(this);
