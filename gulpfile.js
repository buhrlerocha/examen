var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');


gulp.task('script', function(cb){
	gulp.src("src/js/*.js")
	.pipe(jshint())
	.pipe(jshint.reporter("default"))
	.pipe(concat("script.min.js"))
	.pipe(uglify())
	.pipe(gulp.dest("dist/js"));

	// tarea script
});

gulp.task('style', function() {
	// tarea style
	gulp.src("src/sass/main.scss")
	.pipe(sass().on("error", sass.logError))
	.pipe(minifyCSS())
	.pipe(concat("main.min.css"))
	.pipe(gulp.dest("dist/css"));
});

gulp.task('images', function() {
	// tarea images
	gulp.src("src/img/*")
	.pipe(gulp.dest("dist/img"));
});


gulp.task('default', ['images', 'style', 'script']);