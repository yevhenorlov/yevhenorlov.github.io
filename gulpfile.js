/* yevhenorlov.com gulpfile */
'use strict'

const gulp = require('gulp'),
  sass = require('gulp-sass'),
  sassGlob = require('gulp-sass-glob'),
  autoprefixer = require('gulp-autoprefixer'),
  iconfont = require('gulp-iconfont'),
  watch = require('gulp-watch'),
  child = require('child_process'),
  gutil = require('gulp-util');

const sassFiles = 'assets/sass/main.scss';
//const cssDest = 'assets/css';
const cssDest = '_site/assets/css';
const iconSource = 'assets/images/icons/*.svg';

gulp.task('jekyll', () => {
  const jekyll = child.spawn('jekyll', ['serve',
    '--watch',
    '--incremental',
    '--drafts'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

// sass
gulp.task('sass', function () {
  return gulp.src(sassFiles)
    .pipe(sassGlob())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(cssDest));
});

// Iconfont
gulp.task('Iconfont', function(){
  return gulp.src(iconSource)
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
  gulp.watch('assets/sass/**/*.{sass,scss}', ['sass']);
  gulp.watch(['assets/images/icons/*.svg'], ['Iconfont']);
});


// Default task
gulp.task('default', ['Iconfont', 'sass', 'jekyll', 'watch']);
