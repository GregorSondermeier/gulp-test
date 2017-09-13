var gulp = require('gulp'),
	sass = require('gulp-sass'),
	minifyCSS = require('gulp-csso');

gulp.task('sass', function() {
	return gulp.src('src/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(minifyCSS())
		.pipe(gulp.dest('target/css'))
});

gulp.task('sass:watch', function() {
	gulp.watch('./src/*.scss', ['sass']);
});

gulp.task('default', ['sass']);