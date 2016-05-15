var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    clean = require('gulp-clean'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    order = require('gulp-order'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css'),
    haml = require('gulp-haml'),
    fileInclude = require('gulp-file-include'),
    webserver = require('gulp-webserver');

gulp.task('lint', function() {
    gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('clean', function () {
	gulp.src('dist/**/*', { read: false })
		.pipe(clean());
});

// Minify JS
gulp.task('scripts', function() {
    gulp.src('js/**/*')
        .pipe(order([
            'vendor/*',
            '*'
        ]))
        .pipe(concat('all.js'))
        // .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .on('error', onError)
        .pipe(rename('all.min.js'))
        .pipe(gulp.dest('dist'));
});

// Compile & minify SCSS
gulp.task('styles', function() {
    gulp.src('scss/*.scss')
        .pipe(order([
            'reset.scss',
            'base.scss',
            '*'
        ]))
        .pipe(sass())
        .on('error', onError)
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concat('all.css'))
        // .pipe(gulp.dest('dist'))
        .pipe(minifyCss())
        .pipe(rename('all.min.css'))
        .pipe(gulp.dest('dist'));
});

// Compile HAML
gulp.task('haml', function() {
    gulp.src('haml/**/*')
        .pipe(haml())
        .on('error', onError)
        .pipe(gulp.dest('html'));
});

// Compile templates
gulp.task('fileInclude', function() {
    gulp.src('html/[^_]*.html')
        .pipe(fileInclude())
        .on('error', onError)
        .pipe(gulp.dest('./'));
});

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            fallback: 'index.html',
            livereload: true,
            open: false
        }));
});

gulp.task('watch', function() {
    gulp.watch('js/**/*', ['lint', 'scripts']);
    gulp.watch('scss/**/*', ['styles']);
    gulp.watch('haml/**/*', ['haml']);
    gulp.watch('html/[^_]*.html', ['fileInclude']);
});

function onError(err) {
    console.log(err);
    this.emit('end');
}

gulp.task('default', ['lint', 'clean', 'scripts', 'styles', 'haml', 'fileInclude', 'webserver', 'watch']);
