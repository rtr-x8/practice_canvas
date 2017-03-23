
//変数設定
//-------------------------------------------------------------------------------

//パス
var siteRoot          = 'docs/';
var srcRoot           = 'src/';
var cmnDir            = '';
var tempPass          = 'src/_template/';

//sass系
var inputSass01       = srcRoot  + cmnDir + 'scss/';					//sassのパス
var inputSass02       = srcRoot  + cmnDir + 'scss/06_module/';			//
var compareScss01     = 'reset.scss';									//圧縮するsass
var sassSourceRoot    = '../../../scss';								//ソースマップの相対パス
var dstCss01          = siteRoot + cmnDir + 'css/';						//CSSの出力先

//スタイルガイド系
var styleguideDir     = siteRoot + 'styleguide/';						//スタイルガイド出力先
var styleguideOv      = srcRoot + 'ov.md';								//ov.mdの場所
var styleguideCss     = ['/' + cmnDir + 'css/reset.css', '/' + cmnDir + 'css/common.css'];		//読み込むcssファイル
var styleguideScript  = ['/' + cmnDir + 'js/lib.min.js', '/' + cmnDir + 'js/common.min.js'];	//読み込むJSファイル
var styleguideTitle   = 'スタイルガイド';								//タイトル

//JS系
var inputJs01         = srcRoot  + cmnDir + 'js/library/';				//ライブラリJS
var inputJs02         = srcRoot  + cmnDir + 'js/work/';					//直書きJS
var waitJs01          = 'common.js';
var waitJs02          = 'lib.js';
var inputJs03         = srcRoot  + cmnDir + 'js/' + waitJs01;			//一回おくJS
var inputJs04         = srcRoot  + cmnDir + 'js/' + waitJs02;			//一回おくJS

var dstJs01           = srcRoot  + cmnDir + 'js/';						//一回置くので間違ってません
var dstJs02           = siteRoot + cmnDir + 'js/';						//最終的に格納するjs

//pug系
var inputPug01        = srcRoot;										//pugのルート
var dstPug01          = siteRoot;										//pugの出力先

//php to htmlの設定
var php2html          = false;											//php -> html変換を有効にするか
var negativephpDir    = siteRoot + cmnDir + 'inc/';						//有効にした時の無視するディレクトリ

//スプライト系
var spriteSrc         = srcRoot + '_sprite/';							//スプライト画像のディレクトリ。
																		//直下にディレクトリを配置し、その直下に画像
var cmnPrefix         = 'c_';											//共通パーツの接頭詞
var cmnBetween        = '-';											//共通クラスの側瀬と名前の間
var scssTmplate01     = tempPass + 'sprite-sample.scss';				//テンプレートscssの場所
var scssTmplate02     = tempPass + 'sprite-import01.scss';				//テンプレートscssの場所
var scssTmplate03     = tempPass + 'sprite-mixin.scss';					//テンプレートscssの場所
var scssTmplate04     = tempPass + 'sprite-import02.scss';				//テンプレートscssの場所
var imgSprPrefix      = 'sprites_';										//生成されたスプライト画像の接頭詞
var imgSprPath01      = siteRoot + '/common/img/module/';				//スプライト画像の生成先
var imgSprPath02      = '/common/img/module/';							//cssで読み込むスプライト画像のパス
var scssSprPrefix     = '_sprite-';										//スプライト定義scssファイルの接頭詞
var scssSprDst01      = srcRoot + cmnDir + 'scss/06_module/';			//スプライト定義scssファイルの保存先
var scssSprDst02      = srcRoot + cmnDir + 'scss/02_tool/';				//スプライト定義scssファイルの保存先

//favicon
var sitename = 'サイトの名前';
var siteUrl  = 'http://www.a.com';
var favPath  = '/img/favicons/';		//metaタグ内のパス
var favDst01 = srcRoot+cmnDir+'img/favicons';	//_src内に一回出す
var favDst02 = siteRoot+cmnDir+'img/favicons';	//圧縮後に出す場所

//監視タスク前に実行するタスク群
var watchTask = ['connectSync', 'sass-comp','imagemin','bs-reload','html','js'];


//パッケージ群
var gulp         = require('gulp');					//gulp
var sass         = require('gulp-sass');			//sass
var csscomb      = require('gulp-csscomb');			//csscomb
var autoprefixer = require('gulp-autoprefixer');	//css最適化
var plumber      = require('gulp-plumber');			//停止制御
var notify       = require('gulp-notify');			//通知
var browserSync  = require('browser-sync');			//ローカルホスト
var connect      = require('gulp-connect-php');		//ローカルホスト（php
var runSequence  = require('run-sequence');			//直列処理
var imagemin     = require('gulp-imagemin');		//画像圧縮
var cache        = require('gulp-cached');			//変更したものだけ rename_ok(for_sass)
var changed      = require('gulp-changed'); 		//変更したものだけ rename_NG(for_img)
var sourcemaps   = require('gulp-sourcemaps');		//sass用ソースマップ
var pug          = require('gulp-pug');				//pug
var prettify 	 = require('gulp-html-beautify');		//html整形
var CleanCSS     = require('gulp-clean-css');		//CSS 整形
var frontNote    = require('gulp-frontnote');		//スタイルガイド
var rename       = require('gulp-rename');			//リネーム
var fs           = require("fs");					//ファイルシステム
var path 		 = require('path');					//
var uglify       = require('gulp-uglify');			//js 圧縮
var concat       = require('gulp-concat');			//結合
var spritesmith  = require('gulp.spritesmith');		//CSSスプライト
var consolidate  = require('gulp-consolidate');		//templateエンジンを作成
var favicon      = require('gulp-favicons');
var iconfont     = require('gulp-iconfont');
var coffee       = require('gulp-coffee');

//npm i -D gulp gulp-sass gulp-csscomb gulp-autoprefixer gulp-plumber gulp-notify browser-sync gulp-connect-php run-sequence gulp-imagemin gulp-cached gulp-changed  gulp-sourcemaps gulp-pug gulp-html-beautify gulp-clean-css gulp-frontnote gulp-rename fs path gulp-uglify gulp-concat gulp.spritesmith gulp-consolidate gulp-favicons gulp-iconfont 

gulp.task('sprite', function() {
	var folders = getFolders('./' + spriteSrc);
	//
	console.log(folders)
	//mixin, sampleのインポートを作成
	gulp.src(scssTmplate02)
	.pipe(consolidate('lodash', {data: folders, prefix: scssSprPrefix}))
	.pipe(rename({
		basename: '_sprite'
	}))
	.pipe(gulp.dest(scssSprDst02));

	gulp.src(scssTmplate04)
	.pipe(consolidate('lodash', {data: folders, prefix: scssSprPrefix}))
	.pipe(rename({
		basename: '_sprite'
	}))
	.pipe(gulp.dest(scssSprDst01));

	folders.forEach(function(folder){
		var spriteData = gulp.src(spriteSrc + folder + '/*.{png,jpg,gif,jpeg}')
			.pipe(spritesmith({
				imgName: 'sprites_' + folder + '.png',
				imgPath: 'sprites_' + folder + '.png',
				cssName: '_' + folder + '.scss',
				cssFormat: 'scss',
				padding: 10,


				//ratina対応はひとまず置き

				
				cssTemplate: function(data) {

					// Sprite CSS Sample Create
					gulp.src(scssTmplate01)
					.pipe(consolidate('lodash', {
						spriteName: folder,
						data: data,
						classNamePre: cmnPrefix + folder + cmnBetween,
						imgName: imgSprPrefix + folder + '.png',
						imgPath : imgSprPath02
					}))
					.pipe(rename({
						basename: scssSprPrefix + folder
					}))
					.pipe(gulp.dest(scssSprDst01));
					
					//mixin作成
					gulp.src(scssTmplate03)
					.pipe(consolidate('lodash', {
						spriteName: folder,
						data: data,
						classNamePre: cmnPrefix + folder + cmnBetween,
						imgName: imgSprPrefix + folder + '.png',
						imgPath : imgSprPath02
					}))
					.pipe(rename({
						basename: scssSprPrefix + folder
					}))
					.pipe(gulp.dest(scssSprDst02));
					return '';
				}
			}));
		spriteData.img.pipe(gulp.dest(imgSprPath01));
		//spriteData.css.pipe(gulp.dest(scssSprDst02));
	})
});
//ディレクトリ階層を取得する　/_sprite直下のディレクトリ名
//-------------------------------------------------------------------------------
var getFolders = function(dir_path) {
	return fs.readdirSync(dir_path).filter(function(file) {
		return fs.statSync(path.join(dir_path, file)).isDirectory();
	});
};

gulp.task('coffee', function() {
	gulp.src(['./src/coffee/*.coffee'])
	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	.pipe(concat({ path: '*.coffee', stat: { mode: 0666 }}))
	.pipe(coffee())
	.pipe(rename({
		basename: 'script',
	}))
	//.pipe(uglify())
	.pipe(gulp.dest('./docs/js/'));

	gulp.src(['./src/coffee/*.coffee'])
	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	.pipe(concat({ path: '*.coffee', stat: { mode: 0666 }}))
	.pipe(coffee())
	.pipe(rename({
		basename: 'script',
		suffix  : '.min',
	}))
	.pipe(uglify())
	.pipe(gulp.dest('./docs/js/'));
});
//iconfont
//-------------------------------------------------------------------------------
gulp.task('iconfont', function(){
	gulp.src(['src/_fontsvg/*.svg'])
	.pipe(svgmin())
	.pipe(iconfontCss({  // アイコンフォントのscssを生成する
        fontName: 'iconfont',
        path: 'develop/scss/iconsTemplate.scss',  // icons.scssのテンプレート
        targetPath: '../scss/setting/icons.scss',  // 生成するscssのパス
        fontPath: '../fonts/'  //scssからfontファイルへのパス。最終的にrelease配下に置かれた際に読み込めるパスにする
    }))
    .pipe(iconfont({  // アイコンフォントを生成する
        fontName: 'iconfont',
        formats: ['ttf', 'eot', 'woff', 'svg'],
        appendCodepoints:false
    }))
    .pipe(gulp.dest('/font')) //develop配下にscssとiconfontを生成
    .on('end', function(){  // iconfont-hogeが完了してからiconfontを実行
        callback();
    });
});
//favicon
//-------------------------------------------------------------------------------
gulp.task('favicon01', function(){
	return gulp.src('src/**/favicon.{jpg,jpeg,png,gif}')
	.pipe(favicon({
		appName: sitename,
		appDescription: sitename,
		developerName: sitename,
		developerURL: siteUrl,
		background: "#fff",
		url: siteUrl,
		path: '/common/img/favicons/',
		display: "browser",
		orientation: "portrait",
		version: 1.0,
		logging: false,
		online: false,
		html: "favicons.html",
		pipeHTML: true,
		replace: true,
		icons: {
			android: false,
			appleIcon: true,
			appleStartup: false,
			favicons: true,
			firefox: false,
			windows: true,
			yandex: false
		}
	}
	))
	.pipe(gulp.dest("src/common/img/favicons/"));
})

gulp.task('favicon', ['favicon01'], function(){
	gulp.src('src/common/img/favicons/*.ico').pipe(gulp.dest('docs/common/img/favicons/'));
	gulp.src('src/common/img/favicons/browserconfig.xml').pipe(gulp.dest('docs/'));
})


//javascript系の処理
//-------------------------------------------------------------------------------
//JSを圧縮する
gulp.task('js-uglify', ['js-concat-lib','js-concat-work'] ,function(){
	gulp.src(inputJs03)
	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	//.pipe(uglify({preserveComments: 'all'}))
	.pipe(rename({
		extname: '.min.js'
	}))
	.pipe(gulp.dest(dstJs02));

	gulp.src(inputJs04)
	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	.pipe(uglify({preserveComments: 'all'}))
	.pipe(rename({
		extname: '.min.js'
	}))
	.pipe(gulp.dest(dstJs02));
});
//library内のJSを結合する
gulp.task('js-concat-lib', function(){
	return gulp.src([inputJs01 + '*.js', '!' + inputJs01 + '_*.js'])
	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	.pipe(concat({ path: waitJs02, stat: { mode: 0666 }}))
	.pipe(gulp.dest(dstJs01));
});
//work内のJSを結合する
gulp.task('js-concat-work', function(){
	return gulp.src([inputJs02 + '*.js', '!' + inputJs02 + '_*.js'])
	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	.pipe(concat({ path: waitJs01, stat: { mode: 0666 }}))
	.pipe(gulp.dest(dstJs01));
});

gulp.task('js', function(callback) {
	return runSequence(
		'js-uglify',
		'bs-reload',
		callback
	);
});

//pug系の処理
//-------------------------------------------------------------------------------
//pug
gulp.task('pug', function(){
	gulp.src([inputPug01 + '**/*.pug', '!' + inputPug01 + '**/_*.pug'])
	.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
	.pipe(pug({
		basedir: inputPug01,
		doctype: 'html'
	}))		//{pretty: true}
	.pipe(prettify({	//https://github.com/beautify-web/js-beautify
		indent_size: 1,
		indent_char: '\t',
		indent_inner_html: false,
		indent_scripts: 'normal',	//sepatate, mnormal keep
		extra_liners: '',
		brace_style: 'collapse',	// collapse|expand|end-expand 
		wrap_line_length: 0,
		wrap_attributes: 'force-aligned',
	}))
	.pipe(rename({
		extname: '.html'
	}))
	.pipe(gulp.dest(dstPug01))
	//.pipe(notify("【pug】 complate!!"));
});

//処理順　pugコンパイル -> 整形 -> ブラウザリロード
gulp.task('html', function(callback) {
	return runSequence(
		'pug',
		'php2html',
		'bs-reload',
		callback
	);
});
//.php => .html
gulp.task('php2html', function(){
	if (php2html == true) {
		gulp.src(['docs/**/*.php', '!' + negativephpDir + '*.php'])
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
		.pipe(rename({
			extname: '.html'
		}))
		.pipe(gulp.dest(dstPug01))
	}
})
//CSS系の処理
//-------------------------------------------------------------------------------
//sassコンパイル(圧縮するファイル以外)
gulp.task('sass', function(){
	gulp.src([inputSass01 + '**/*.scss', '!' + inputSass01 + '**/' + compareScss01], {base: inputSass01})
	.pipe(plumber({
		errorHandler: notify.onError("Error: <%= error.message %>")
	}))
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'expanded'}))
	.pipe(autoprefixer({
		browsers: 'last 5 version, > 5%',
		cascade: false
	}))
	.pipe(CleanCSS({
		advanced:false,
		keepBreaks:true,
		sourceMap:true,
	}))
	.pipe(sourcemaps.write('maps', {sourceRoot: sassSourceRoot}))
//	.pipe(csscomb())
	.pipe(gulp.dest(dstCss01))
	//.pipe(notify({ message: "【sass】 complate!!", wait: false}))
});
//圧縮するサスファイルをコンパイルする
gulp.task('sass-comp', function(){
	gulp.src([srcRoot + '**/' + compareScss01], {base: inputSass01})
	.pipe(plumber({
		errorHandler: notify.onError("Error: <%= error.message %>")
	}))
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(gulp.dest(dstCss01))
})



//スタイルガイド（重い。スプライト作成が前提タスク）
//-------------------------------------------------------------------------------
gulp.task('styleguide', ['sprite', 'css'] ,function(){
	gulp.src(inputSass02 + '*.scss')
	.pipe(plumber({
		errorHandler: notify.onError("Error: <%= error.message %>")
	}))
	.pipe(frontNote({
		out: styleguideDir,
		css: styleguideCss,
		overview: styleguideOv,
		title: styleguideTitle,
		//script: styleguideScript,
	}))
	//.pipe(notify("【styleguide】 ok"))
})
gulp.task('css', function(callback) {
	return runSequence(
		'sass',
		'bs-reload',
		callback
	);
});

//画像圧縮系の処理
//-------------------------------------------------------------------------------
//gif の圧縮
gulp.task('imagemin-gif', function () {
	gulp.src([srcRoot + '**/*.gif', '!' + spriteSrc + '**/*.gif'])
	.pipe(plumber({
		errorHandler: notify.onError("Error: <%= error.message %>")
	}))
	.pipe(changed(siteRoot))
	.pipe(imagemin({ interlaced: false }))
	.pipe(gulp.dest(siteRoot))
	.pipe(notify("gif圧縮ok"));
});
//jpegの圧縮
gulp.task('imagemin-jpeg', function () {
	gulp.src([srcRoot + '**/*.jpeg', '!' + spriteSrc + '**/*.jpeg'])
	.pipe(plumber({
		errorHandler: notify.onError("Error: <%= error.message %>")
	}))
	.pipe(changed(siteRoot))
	.pipe(imagemin({ progressive: true }))
	.pipe(gulp.dest(siteRoot))
	.pipe(notify("jpeg圧縮ok"));
});
//jpgの圧縮
gulp.task('imagemin-jpg', function () {
	gulp.src([srcRoot + '**/*.jpg', '!' + spriteSrc + '**/*.jpg'])
	.pipe(plumber({
		errorHandler: notify.onError("Error: <%= error.message %>")
	}))
	.pipe(changed(siteRoot))
	.pipe(imagemin({ progressive: true }))
	.pipe(gulp.dest(siteRoot))
	.pipe(notify("jpg圧縮ok"));
});
//pngの圧縮
gulp.task('imagemin-png', function () {
	gulp.src([srcRoot + '**/*.png', '!' + spriteSrc + '**/*.png'])
	.pipe(plumber({
		errorHandler: notify.onError("Error: <%= error.message %>")
	}))
	.pipe(changed(siteRoot))
	.pipe(imagemin({ optimizationLevel: 5 }))
	.pipe(gulp.dest(siteRoot))
	.pipe(notify("png圧縮ok"));
});

//処理順 画像圧縮 -> ブラウザリロード
gulp.task('imagemin', function(callback) {
	return runSequence(
		'imagemin-gif', 
		'imagemin-jpeg',
		'imagemin-jpg', 
		'imagemin-png', 
		'bs-reload',
		callback
	);
});

//ローカルホスト
//-------------------------------------------------------------------------------
//ローカルホスト
//gulp.task('browser-sync', function() {
//	browserSync({
//		server: {
//			baseDir: "./docs/"       //対象ディレクトリ
//			,index  : "index.html"     //インデックスファイル	
//		},
//		ghostMode: {
//			clicks: false,
//			forms: false,
//			scroll: false
//		}
//	});
//});
//リロード処理
gulp.task('bs-reload', function () {
	return browserSync.reload();
});

//監視
//-------------------------------------------------------------------------------
//全て監視
gulp.task('default', watchTask, function(){
	gulp.watch(inputPug01 + '**/*.pug',                   										 ['html']);
	gulp.watch([inputSass01 + '**/*.scss', '!' + inputSass01 + '**/' + compareScss01],    ['css']);
	gulp.watch([srcRoot + '**/' + compareScss01],    						 ['sass-comp']);
	gulp.watch([inputJs01 + '*.js',inputJs02 + '*.js'],							 ['js']);
	gulp.watch(srcRoot + '**/*.{png,jpg,gif,jpeg}',							  					 ['imagemin']);
	gulp.watch(srcRoot + '**/*.coffee',	['coffee', 'bs-reload']);
//	gulp.watch("./www/**/*.php",["reload"]);
});


//phpの動作(syuusei)
gulp.task('connectSync', function() {
	connect.server({
		port:8080,
		base: 'docs',
		bin: 'C:/xampp02/php/php.exe',
		//bin: 'C:/php/5_6/php.exe',
		ini: 'C:/xampp02/php/php.ini',
		//ini: 'C:/php/5_6/php.ini',
		stdio: 'ignore'
	}, function (){
		browserSync({
			proxy: '127.0.0.1:8080',
			ghostMode: false,
			logConnections: true,
			logFileChanges: false
		});
	});
});