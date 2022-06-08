const gulp = require ('gulp'); //! Gulp ( npm i --save-dev gulp )
/* const { series } = require ( 'gulp' ) //!! Série de tarefas a serem executadas */
const concat = require ( "gulp-concat" ) //! Junta os arquivos (npm i --save-dev gulp-concat)
const strip = require ( "gulp-strip-comments" ) //! Remove os comentários ( npm i --save-dev gulp-strip-comments )
const stripCss = require('gulp-strip-css-comments');
const cssmin = require ( "gulp-cssmin" ) //! Minifica o arquivo css (npm i --save-dev gulp-cssmin)
const rename = require ( "gulp-rename" ) //! Renomeia os arquivos ( npm i --save-dev gulp-rename )
const uglify = require ( "gulp-uglify" ) //! Deixa o arquivo JS feio diminuindo ele e deixando mais performático ( npm i --save-dev gulp-uglify )
const images = require ( "gulp-imagemin" ) //! Minifica as imagens (  npm i --save-dev gulp-imagemin )
const htmlmin = require ( "gulp-htmlmin" ) //! Minifica o arquivo HTML ( npm i --save gulp-htmlmin)
const babel = require ( 'gulp-babel' ) //! Deixa o código JS mais compatível e seguro ( npm i --save-dev gulp-babel @babel/core @babel/preset-env )
const sass = require("gulp-sass")(require("node-sass")); //! Transpilar o código de SCSS para CSS
const browserSync = require ( 'browser-sync' ).create()
const reload = browserSync.reload

gulp.task( 'server', function() {
   browserSync.init({ //! Inicia o BrowserSync
      server: { //! Define a pasta do servidor 
         baseDir: "./dist"
      }
   })
   gulp.watch('./assets/scss/*').on('change', build);
   gulp.watch('./assets/js/*').on('change', build);
   gulp.watch('./dist/scss/*').on('change', reload)
   gulp.watch('./dist/js/*').on('change', reload)
})

let paths = {
   styles: {
      dest: 'dist/css'
   },
   scripts: {
      dest: 'dist/js'
   },
   images: {
      dest: 'dist/images'
   },
   html: {
      dest: 'dist'
   },
   sass: {
      src: 'assets/scss/style.scss',
      dest: 'assets/css'
   }
}

//! Bootstrap
//? npm i bootstrap

//! jQuery
//? npm i jquery

function css() {

   return gulp.src([
      "./node_modules/bootstrap/dist/css/bootstrap.css",
      "./assets/css/style.css",
   ])
   .pipe(concat("style.css")) //? Junta os arquivos em um só
   .pipe(cssmin()) //? Minifica o arquivo
   .pipe(rename({ suffix: ".min" })) //? Adiciona o sufixo '.min' no arquivo
   .pipe(stripCss({preserve: false})) //? Remove os comentários 
   .pipe(gulp.dest (paths.styles.dest)) //? Define a pasta destino do arquivo final
}

function sassf() {
   return gulp.src (paths.sass.src)
   .pipe(sass()) //? Transforma o arquivo sass para css
   .pipe(gulp.dest(paths.sass.dest))
}

function js() {
   return gulp.src([
      "./node_modules/jquery/dist/jquery.js",
      "./node_modules/bootstrap/dist/js/bootstrap.js",
      "./assets/js/custom.js",
      ])
      .pipe(babel({
         comments: false,
         presets: ["@babel/env"],
         compact: true
      }))
      .pipe(strip())
      .pipe(concat("scripts.js"))
      .pipe(uglify())
      .pipe(rename({ suffix: ".min" }))
      .pipe(gulp.dest(paths.scripts.dest))
}

function img() {
   return gulp
		.src("./assets/images/*")
		.pipe(
			images({
				pngquant: true,
				optipng: false,
				zopfling: true,
				jpegRecompress: false,
				mozjpeg: true,
				gifsicle: true,
				svgo: true,
				concurrent: 10,
				quiet: true,
			})
		)
		.pipe(gulp.dest(paths.images.dest));
}

function html() {
   return gulp.src('./assets/index.html')
   .pipe(strip())
   .pipe(htmlmin( { collapseWhitespace: true } ))
   .pipe(gulp.dest(paths.html.dest))
}

let build = gulp.series ( sassf, css, js, html )
let fullbuild = gulp.series ( sassf, css, js, html, img )

exports.sassf = sassf;
exports.html = html;
exports.img = img;
exports.js = js;
exports.css = css;

exports.fbuild = fullbuild;
exports.default = build