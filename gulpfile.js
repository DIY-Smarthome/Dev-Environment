var gulp = require('gulp');
var install = require('gulp-install');
var path = require('path')

gulp.task('default', function () {
	gulp.src(['./kernel/package.json'])
		.pipe(gulp.dest('./dist/kernel'))
		.pipe(install({
			node: "--production"
		}));
	return gulp.src(['./lib/**/package.json', './lib/**/config.json', '!./**/node_modules/**'])
		.pipe(gulp.dest('./dist/lib/'))
		.pipe(install({
			node: "--production"
		}));
});

gulp.task('save-dev', function () {
	gulp.src(['./kernel/package.json'])
		.pipe(install({
			node: "--save-dev"
		}));
	return gulp.src(['./lib/**/package.json', '!./**/node_modules/**'])
		.pipe(install({
			node: "--save-dev"
		}));
});