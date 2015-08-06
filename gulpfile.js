
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    haml = require('gulp-haml'),
    minifyCss = require('gulp-minify-css'),
    fileinclude = require('gulp-file-include'),
    webserver = require('gulp-webserver');

// Check JS for errors
gulp.task('lint', function() {
  gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Concatenate & minify JS
gulp.task('scripts', function() {
  gulp.src('js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

// Compile & minify SASS
gulp.task('styles', function() {
  gulp.src('sass/*.sass')
    .pipe(sass())
    .pipe(concat('all.css'))
    .pipe(gulp.dest('dist'))
    .pipe(minifyCss())
    .pipe(rename('all.min.css'))
    .pipe(gulp.dest('dist'));
});

// Compile HAML
gulp.task('haml', function() {
  gulp.src('haml/*.haml')
    .pipe(haml())
    .pipe(gulp.dest('html'));
});

// Compile templates
gulp.task('fileinclude', function() {
  gulp.src('html/[^_]*.html')
    .pipe(fileinclude())
    .pipe(gulp.dest('./'));
});

// Server
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      fallback: 'index.html',
      livereload: true,
      open: true
    }));
});

// Watch for changes
gulp.task('watch', function() {
  gulp.watch('js/*.js', ['lint', 'scripts']);
  gulp.watch('sass/*.sass', ['styles']);
  gulp.watch('haml/*.haml', ['haml']);
  gulp.watch('html/[^_]*.html', ['fileinclude']);
});

// Run tasks
gulp.task('default', ['lint', 'scripts', 'styles', 'haml', 'fileinclude', 'webserver', 'watch']);
