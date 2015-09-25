var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var del = require('del');

gulp.task('styles-prod', ['clean'], function() {
  return gulp.src('./scss/**/*.scss')
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.minifyCss())
    .pipe(gulp.dest('./scss/'));
});

gulp.task('clean-prod', function() {
  return del(['dist']);
});


gulp.task('build-prod', ['clean-prod', 'styles-prod']);