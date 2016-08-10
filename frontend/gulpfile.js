var gulp = require('gulp')
var connect = require('gulp-connect')
var concat = require('gulp-concat')

gulp.task('default', ['serve']);

gulp.task('concat', ['concat-css', 'concat-js']);

gulp.task('concat-css', function() {
	return gulp.src(["node_modules/bootstrap/dist/css/bootstrap.min.css", "app/styles/*.css"])
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest('dist/'));
})
gulp.task('concat-js', function() {
	return [gulp.src(["app/app.js", "app/controllers/*.js", "app/services/*.js"])
		.pipe(concat('app.js'))
		.pipe(gulp.dest('dist/')),
		gulp.src([
			"node_modules/jquery/dist/jquery.min.js", 
			"node_modules/bootstrap/dist/js/bootstrap.min.js", 
			"node_modules/angular/angular.min.js", 
			"node_modules/angular-route/angular-route.min.js"])
		.pipe(concat('dep.js'))
		.pipe(gulp.dest('dist/'))];
})

gulp.task('serve', function () {
  connect.server({
    root: '.',
    livereload: true,
    fallback: 'index.html',
    port: 4000
  })
})
