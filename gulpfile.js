/* yevhenorlov.com gulpfile */
'use strict'

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  sassGlob = require('gulp-sass-glob'),
  autoprefixer = require('gulp-autoprefixer'),
  iconfont = require('gulp-iconfont'),
  watch = require('gulp-watch');


// sass
gulp.task('sass', function () {
  return gulp.src('css/main.scss')
    .pipe(sassGlob())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('_site/css'));
});

// Iconfont
gulp.task('Iconfont', function(){
  return gulp.src(['assets/images/icons/*.svg'])
    .pipe(iconfont({
      fontName: 'iconFont',
      prependUnicode: true,
      formats: ['ttf', 'eot', 'woff', 'svg'],
      normalize: true,
      fontWeight: '300',
      fontHeight: 100,
      fixedWidth: false,
      centerHorizontally: false
    }))
    .pipe(gulp.dest('assets/fonts/'));
});

//watch
gulp.task('watch', function() {
  gulp.watch('css/**/*.{sass,scss}', ['sass']);
  gulp.watch(['assets/images/icons/*.svg'], ['Iconfont']);
});


// Default task
gulp.task('default', ['Iconfont', 'sass', 'watch']);
