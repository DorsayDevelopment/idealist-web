var gulp = require('gulp');
var exec = require('child_process').exec;
var plugins = require('gulp-load-plugins')();


gulp.task('styles', function() {
  return gulp.src('./scss/**/*.scss')
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(gulp.dest('./scss/'))
    .pipe(plugins.livereload());
});

gulp.task('watch', function() {
  plugins.livereload.listen();
  gulp.watch('./scss/**/*.scss', ['styles']);
  gulp.watch('./pages/**/*.js', ['lint']);
  gulp.watch('./shared/**/*.js', ['lint']);
});

gulp.task('serve', function() {
  plugins.nodemon({
    script: 'server.js',
    ext: 'js html',
    env: {'NODE_ENV' : 'development'}
  })
});


gulp.task('lint', function() {
  return gulp.src([
    './pages/**/*.js',
    './shared/**/*.js'
  ])
    .pipe(plugins.jslint({
      reporter: 'default'
    }))
});


gulp.task('dev', ['styles', 'serve', 'watch']);