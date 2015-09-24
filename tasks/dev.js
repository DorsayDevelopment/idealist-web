var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('watch', function() {
  // styles
  // html
  // js
  gulp.watch('./scss/**/*.scss', ['styles'])
});

gulp.task('serve', function() {

});

gulp.task('dev', ['serve', 'watch']);