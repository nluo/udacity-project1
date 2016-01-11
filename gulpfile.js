var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var static = require('node-static');
var fileServer = new static.Server('./');
var http = require('http');

gulp.task('styles', function () {
    gulp.src('css/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist/'))
});

gulp.task('watch', function () {
    gulp.watch('css/*.css', ['styles'])
});


gulp.task('server', function () {
    http.createServer(function (request, response) {
        request.addListener('end', function() {
            fileServer.serve(request, response);
        }).resume();
    }).listen(8080);
});

gulp.task('default', ['styles', 'server', 'watch']);