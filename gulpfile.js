const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const jsmin = require('gulp-jsmin');
const htmlmin = require('gulp-htmlmin');
const tinify = require('gulp-tinify');

/* Сожми и перенеси CSS файлы  */
gulp.task('minify-css', () => {
  return gulp.src('src/css/*.css')
  .pipe(cleanCSS())
  .pipe(gulp.dest('build/css/'))
});

/* Перенеси сжатые JS-файлы */
gulp.task('move-js', () => {
  return gulp.src('src/js/*.min.js')
  .pipe(gulp.dest('build/js'))
});

/* Сожми JS-файлы и перенеси в build */
gulp.task('minify-js', () => {
  return gulp.src(['src/js/*.js', '!src/js/*.min.js'])
  .pipe(jsmin())
  .pipe(gulp.dest('build/js'))
});

/* Сожми и перенеси HTML файлы  */
gulp.task('htmlmin', () =>{
  return gulp.src('src/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('build/'))
});

/* Сожми изображения и перенеси их в Build */
gulp.task('imagemin', () =>{
  return gulp.src('src/img/**/*.*')
  .pipe(tinify('JTS0htKGtb7bKZ4NBclP1yjW6hCPrCQR'))
  .pipe(gulp.dest('build/img/'))
});

gulp.task('build', gulp.series('minify-css', 'move-js', 'minify-js', 'htmlmin', 'imagemin'))