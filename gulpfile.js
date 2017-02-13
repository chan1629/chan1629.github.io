var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require("gulp-util");
var browserSync = require('browser-sync').create();

var onError = function (err) {
    gutil.log(gutil.colors.red("ERROR", "sass"), err);
    this.emit("end", new gutil.PluginError("sass", err, { showStack: true }));
};   

gulp.task('sass', function() {
    return gulp.src('scss/*.scss')         
        .pipe(sass().on('error', onError))                          
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.reload({
    		stream: true
    	}));   
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'index.html'
    },
  })
})

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('scss/*.scss', ['sass']); 
  gulp.watch('index.html', browserSync.reload); 
})

