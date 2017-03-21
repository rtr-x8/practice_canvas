(function() {
  var _angle, canvas_init01, canvas_init02, canvas_init03, canvas_init04, colors;

  window.onload = function() {
    canvas_init01();
    canvas_init02();
    canvas_init03();
    canvas_init04();
    return true;
  };

  _angle = function(num) {
    return num / 180 * Math.PI;
  };

  colors = ['red', 'pink', 'yellow', 'blue', 'aqua', 'green', 'blueviolet', 'darkgoldenrod'];

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

  canvas_init02 = function() {
    var canvas, color, ctx, i, j, max, ref, results, x, y;
    canvas = document.getElementById('js_canvas02');
    if (!canvas || !canvas.getContext) {
      return false;
      console.log('miss');
    }
    ctx = canvas.getContext('2d');
    ctx.globalAlpha = 0.5;
    max = 100;
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
    var canvas, ctx, max, start01;
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

  canvas_init04 = function() {
    var anime, canvas, ctx, diff, i;
    canvas = document.getElementById('js_canvas04');

    /*
    	とりあえず動かしてみる
     */
    if (!canvas || !canvas.getContext) {
      return false;
      console.log('miss');
    }
    ctx = canvas.getContext('2d');
    ctx.globalAlpha = 0.5;
    i = 0;
    diff = 50;
    return (anime = function() {
      var x, y;
      if (i * diff - 10 > canvas.height) {
        i = 0.01;
      }
      y = canvas.height - i * diff;
      x = canvas.width / 2 - (Math.sin(i)) * diff;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(x, y, 10, _angle(0), _angle(360));
      ctx.fill();
      i = i + 0.01;
      console.log(i);
      return setTimeout(anime, 10);
    })();
  };

}).call(this);
