
var gulp = require('gulp');

var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var haml = require('gulp-haml');

// Check JS for errors
gulp.task('lint', function() {
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Concatenate & minify JS
gulp.task('scripts', function() {
  return gulp.src('js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

// Compile SASS
gulp.task('sass', function() {
  return gulp.src('sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

// Compile index.html
gulp.task('index', function () {
  gulp.src('index.haml')
    .pipe(haml())
    .pipe(gulp.dest('./'));
});

// Watch for changes
gulp.task('watch', function() {
  gulp.watch('js/*.js', ['lint', 'scripts']);
  gulp.watch('sass/*.sass', ['sass']);
  gulp.watch('index.haml', ['index']);
});

// Run tasks
gulp.task('default', ['lint', 'sass', 'scripts', 'index', 'watch']);
