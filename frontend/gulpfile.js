var gulp = require('gulp')
var connect = require('gulp-connect')

gulp.task('default', ['serve']);

gulp.task('serve', function () {
  connect.server({
    root: '.',
    livereload: true,
    fallback: 'index.html',
    port: 4000
  })
})
