(function() {
  var _angle, _getChart, _getClr, _getR, canvas_init01, canvas_init02, canvas_init03, canvas_init04, canvas_init05, canvas_init06, canvas_init07, canvas_init08, colors;

  window.onload = function() {
    canvas_init01();
    canvas_init02();
    canvas_init03();
    canvas_init04();
    canvas_init05();
    canvas_init06();
    canvas_init07();
    canvas_init08();
    return true;
  };

  $(document).resize(function() {
    return $('canvas').each(function() {
      var h;
      h = $(this).closest('.js_in').innerWidth();
      return $(this).attr('width', h);
    });
  }).trigger('resize');

  _angle = function(num) {
    return num / 180 * Math.PI;
  };

  _getClr = function() {
    var a, b, g, r;
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    a = Math.random();
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  };

  _getChart = function(canvas) {
    var arr, x, y;
    x = Math.floor(Math.random() * canvas.width);
    y = Math.floor(Math.random() * canvas.height);
    return arr = {
      x: x,
      y: y
    };
  };

  _getR = function(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
  };

  colors = ['red', 'pink', 'yellow', 'blue', 'aqua', 'green', 'blueviolet', 'darkgoldenrod', 'gold'];

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
    colors = ['red', 'pink', 'yellow', 'blue', 'slyblue', 'green'];
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
    var canvas, colors01, ctx, max, start01;
    canvas = document.getElementById('js_canvas03');
    if (!canvas || !canvas.getContext) {
      return false;
      console.log('miss');
    }
    ctx = canvas.getContext('2d');
    ctx.globalAlpha = 0.5;
    max = 100;
    colors01 = ['red', 'pink', 'yellow', 'blue', 'slyblue', 'green'];
    return (start01 = function() {
      var color, i, j, ref, scale, x, y;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (i = j = 1, ref = max; 1 <= ref ? j < ref : j > ref; i = 1 <= ref ? ++j : --j) {
        x = Math.floor(Math.random() * canvas.width);
        y = Math.floor(Math.random() * canvas.height);
        scale = (Math.floor(Math.random() * 15) + 5) / 10;
        color = colors01[Math.floor(Math.random() * colors01.length)];
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
      return setTimeout(anime, 10);
    })();
  };

  canvas_init05 = function() {

    /*
    	3秒置きにランダム個所に表示。
    	2.5秒間アニメーション
    	0.5秒間かけて消滅
     */
    var anime01, c_arr, canvas, ctx, i, j, move_counter, obj_count, r_arr, ref, x_arr, y_arr;
    canvas = document.getElementById('js_canvas05');
    if (!canvas || !canvas.getContext) {
      return false;
      console.log('miss');
    }
    ctx = canvas.getContext('2d');
    ctx.globalAlpha = 0.5;
    colors = ['255,0,0,1', '255,186,182,1', '255,255,0,1', '0,0,255,1', '124,187,255,1', '0,118,0,1', '230,0,233,1'];
    x_arr = [];
    y_arr = [];
    c_arr = [];
    r_arr = [];
    obj_count = 50;
    for (i = j = 0, ref = obj_count; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      x_arr.push(Math.floor(Math.random() * canvas.width));
      y_arr.push(Math.floor(Math.random() * canvas.height));
      c_arr.push(colors[Math.floor(Math.random() * colors.length)]);
      r_arr.push(Math.floor((Math.random() * 5) + 8));
    }
    move_counter = 0;
    return (anime01 = function() {
      var c, index, k, l, r, ref1, x, y;
      if (move_counter > 20) {
        move_counter = 0;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (i = k = 0; k < 10; i = ++k) {
        x = x_arr[i] + Math.sin(move_counter);
        y = y_arr[i] - move_counter;
        r = r_arr[i];
        c = c_arr[i];
        if (move_counter > 15) {
          index = c.length - c.lastIndexOf(',');
          for (i = l = 1, ref1 = index; 1 <= ref1 ? l < ref1 : l > ref1; i = 1 <= ref1 ? ++l : --l) {
            c = c.substr(0, c.length - 1);
          }
          c += 0.2 * (20 - move_counter);
        }
        ctx.beginPath();
        ctx.fillStyle = 'rgba(' + c + ')';
        ctx.arc(x, y, r, _angle(0), _angle(360));
        ctx.fill();
      }
      move_counter++;
      return setTimeout(anime01, 100);
    })();
  };

  canvas_init06 = function() {

    /*
    	3秒置きにランダム個所に表示。
    	2.5秒間アニメーション
    	0.5秒間かけて消滅
     */
    var anime01, anime02, anime_counter01, anime_counter02, c_arr, canvas, ctx, i, j, obj_count, r_arr, ref, x_arr, y_arr;
    canvas = document.getElementById('js_canvas06');
    if (!canvas || !canvas.getContext) {
      return false;
      console.log('miss');
    }
    ctx = canvas.getContext('2d');
    ctx.globalAlpha = 0.5;
    colors = ['255,0,0,1', '255,186,182,1', '255,255,0,1', '0,0,255,1', '124,187,255,1', '0,118,0,1', '230,0,233,1'];
    x_arr = [];
    y_arr = [];
    c_arr = [];
    r_arr = [];
    obj_count = 50;
    for (i = j = 0, ref = obj_count; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      x_arr.push(Math.floor(Math.random() * canvas.width));
      y_arr.push(Math.floor(Math.random() * canvas.height));
      c_arr.push(colors[Math.floor(Math.random() * colors.length)]);
      r_arr.push(Math.floor((Math.random() * 5) + 8));
    }
    anime_counter01 = 0;
    anime_counter02 = 0;
    (anime01 = function() {
      var c, r, x, y;
      x = x_arr[anime_counter01];
      y = y_arr[anime_counter01];
      r = r_arr[anime_counter01];
      c = c_arr[anime_counter01];
      ctx.beginPath();
      ctx.fillStyle = 'rgba(' + c + ')';
      ctx.arc(x, y, r, _angle(0), _angle(360));
      ctx.fill();
      anime_counter01++;
      if (anime_counter01 < obj_count) {
        return setTimeout(anime01, 300);
      }
    })();
    return (anime02 = function() {
      var c, r, x, y;
      x = x_arr[obj_count - anime_counter02];
      y = y_arr[obj_count - anime_counter02];
      r = r_arr[obj_count - anime_counter02];
      c = c_arr[obj_count - anime_counter02];
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(' + c + ')';
      ctx.arc(x, y, r, _angle(0), _angle(360));
      ctx.stroke();
      anime_counter02++;
      if (anime_counter02 < obj_count) {
        return setTimeout(anime02, 450);
      }
    })();
  };

  canvas_init07 = function() {
    var anime01, anime_counter01, canvas, ctx, obj_count;
    canvas = document.getElementById('js_canvas07');
    if (!canvas || !canvas.getContext) {
      return false;
      console.log('miss');
    }
    ctx = canvas.getContext('2d');
    ctx.globalAlpha = 0.5;
    colors = ['255,0,0,1', '255,186,182,1', '255,255,0,1', '0,0,255,1', '124,187,255,1', '0,118,0,1', '230,0,233,1'];
    obj_count = 50;
    anime_counter01 = 0;
    return (anime01 = function() {
      var anime02, c01, c02, flame, move, move_counter, r01, r02, time, x01, x02, y01, y02;
      x01 = Math.floor(Math.random() * canvas.width);
      y01 = Math.floor((Math.random() * (canvas.height - canvas.height / 3)) + canvas.height / 3);
      r01 = Math.floor((Math.random() * 5) + 8);
      c01 = colors[Math.floor(Math.random() * colors.length)];
      x02 = Math.floor(Math.random() * canvas.width);
      y02 = Math.floor((Math.random() * (canvas.height - canvas.height / 3)) + canvas.height / 3);
      r02 = Math.floor((Math.random() * 5) + 8);
      c02 = colors[Math.floor(Math.random() * colors.length)];
      time = 3000;
      flame = 100;
      move = time / flame / 30;
      move_counter = 0;
      (anime02 = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        x01 = x01 + Math.sin(move_counter);
        y01 = y01 - move;
        ctx.beginPath();
        ctx.fillStyle = _getClr();
        ctx.arc(x01, y01, r01, _angle(0), _angle(360));
        ctx.fill();
        x02 = x02 + Math.sin(move_counter);
        y02 = y02 - move;
        ctx.beginPath();
        ctx.fillStyle = _getClr();
        ctx.arc(x02, y02, r02, _angle(0), _angle(360));
        ctx.fill();
        move_counter++;
        if (flame * move_counter < time) {
          return setTimeout(anime02, flame);
        }
      })();
      anime_counter01++;
      if (anime_counter01 < obj_count) {
        return setTimeout(anime01, time);
      }
    })();
  };

  canvas_init08 = function() {
    var anime01, canvas, ctx, start;
    canvas = document.getElementById('js_canvas08');
    if (!canvas || !canvas.getContext) {
      return false;
      console.log('miss');
    }
    ctx = canvas.getContext('2d');
    ctx.globalAlpha = 0.8;
    anime01 = function() {

      /*
      		情報オブジェクトを配列にまとめる
      		{
      			[x: XX, y: XX, r: XX, c: XX],
      			[x: XX, y: XX, r: XX, c: XX],
      		}
       */
      var i, info_arr, j, obj, obj_count, ref;
      info_arr = [];
      obj_count = 50;
      for (i = j = 0, ref = obj_count; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        obj = {};
        obj.x = _getChart(canvas).x;
        obj.y = _getChart(canvas).y;
        obj.r = _getR(5, 15);
        obj.c = _getClr();
        info_arr.push(obj);
      }
      console.log(info_arr);
      ctx.beginPath();
      ctx.fillStyle = _getClr();
      ctx.arc(_getChart(canvas).x, _getChart(canvas).y, _getR(5, 10), _angle(0), _angle(360));
      return ctx.fill();
    };
    return (start = function() {
      setTimeout(anime01(), 0);
      setTimeout(function() {
        return console.log('anime02');
      }, 1500);
      setTimeout(function() {
        return console.log('anime03');
      }, 3000);
      return this;
    })();
  };

}).call(this);
