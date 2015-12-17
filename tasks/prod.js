var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var del = require('del');

gulp.task('styles-prod', ['clean-prod'], function() {
  return gulp.src('./styles/**/*.scss')
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.minifyCss())
    .pipe(gulp.dest('./dist/styles/'));
});

gulp.task('js-prod', ['clean-prod'], function() {
  return gulp.src([
    'controllers/**/*.js',
    'directives/**/*.js',
    '*.js',
    '!gulpfile.js'
  ], {base: './'})
    .pipe(plugins.uglify({mangle: false}))
    .pipe(gulp.dest('dist/'));
});

gulp.task('config-prod', ['clean-prod'], function() {
  return gulp.src(['./config/config.prod.js'])
    .pipe(plugins.uglify({mangle: false}))
    .pipe(plugins.rename('config.js'))
    .pipe(gulp.dest('dist/config/'));
});

gulp.task('html-prod', ['clean-prod'], function() {
  return gulp.src([
    'views/**/*.html',
  ], {base: './'})
    .pipe(gulp.dest('dist/'));
});

gulp.task('assets-prod', ['clean-prod'], function() {
  return gulp.src('assets', {base: './'})
    .pipe(gulp.dest('dist/'));
});

gulp.task('dependencies-prod', ['clean-prod'], function() {
  return gulp.src(['package.json', 'bower.json', '.bowercc', 'index.html'])
    .pipe(gulp.dest('dist/'));
});

gulp.task('clean-prod', function() {
  return del(['dist']);
});

gulp.task('build-prod', [
  'clean-prod',
  'styles-prod',
  'assets-prod',
  'js-prod',
  'config-prod',
  'html-prod',
  'dependencies-prod'
]);