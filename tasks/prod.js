var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var del = require('del');

gulp.task('styles-prod', ['clean-prod'], function() {
  return gulp.src('./scss/**/*.scss')
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.minifyCss())
    .pipe(gulp.dest('./scss/'));
});

gulp.task('js', ['clean-prod'], function() {
  return gulp.src([
    'shared/**/*.js',
    'pages/**/*.js',
    '*.js',
    '!gulpfile.js'
  ], {base: './'})
    .pipe(plugins.uglify())
    .pipe(gulp.dest('dist/'));
});

gulp.task('html', ['clean-prod'], function() {
  return gulp.src([
    'shared/**/*.html',
    'pages/**/*.html'
  ], {base: './'})
    .pipe(gulp.dest('dist/'));
});

gulp.task('assets-prod', ['clean-prod'], function() {
  return gulp.src('assets')
    .pipe(gulp.dest('dist/'));
});

gulp.task('dependencies-prod', ['clean-prod'], function() {
  return gulp.src(['package.json', 'bower.json', '.bowercc'])
    .pipe(gulp.dest('dist/'));
});

gulp.task('clean-prod', function() {
  return del(['dist']);
});

gulp.task('build-prod', [
  'clean-prod',
  'styles-prod',
  'js',
  'html',
  'dependencies-prod'
]);