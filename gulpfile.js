var gulp = require('gulp');
var install = require('gulp-install');
var path = require('path')

gulp.task('default', function () {
	gulp.src(['./kernel/package.json'])
		.pipe(gulp.dest('./dist/kernel'))
		.pipe(install({
			node: "--production"
		}));
	return gulp.src(['./lib/*/package.json'])
		.pipe(gulp.dest('./dist/lib/'))
		.pipe(install({
			node: "--production"
		}));
});