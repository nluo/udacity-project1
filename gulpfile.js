var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');

gulp.task('styles', function () {
  gulp.src('css/*.css')
  .pipe(minifyCss())
  .pipe(gulp.dest('./dist/'))
});

gulp.task('watch', function () {
    gulp.watch('css/*.css', ['styles'])
});

gulp.task('default', ['styles', 'watch']);