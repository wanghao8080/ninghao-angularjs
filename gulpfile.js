var gulp = require('gulp');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('scripts', function () {
  return gulp.src('app/js/app.js')
  .pipe(uglify())
  .pipe(rename('app.min.js'))
  .pipe(gulp.dest('app/js/'));
});

gulp.task('server', function () {
  connect.server({root: 'app', livereload: true});
});

gulp.task('reload', function () {
  return gulp.src(['app/js/**/*.js', 'app/css/**/*.js', 'app/*.html'])
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('app/js/**/*.js', ['reload']);
  gulp.watch('app/css/**/*.css');
  gulp.watch('app/*.html', ['reload']);
});

gulp.task('default', ['server', 'watch']);
