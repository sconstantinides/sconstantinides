var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
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

// Minify JS
gulp.task('scripts', function() {
    gulp.src('js/*.js')
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .on('error', onError)
        .pipe(gulp.dest('dist'));
});

// Compile & minify SASS
gulp.task('styles', function() {
    gulp.src('sass/*.sass')
        .pipe(order([
            'reset.sass',
            'base.sass',
            '*'
        ]))
        .pipe(sass())
        .on('error', onError)
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
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
            open: true
        }));
});

gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('sass/*.sass', ['styles']);
    gulp.watch('haml/*.haml', ['haml']);
    gulp.watch('html/[^_]*.html', ['fileInclude']);
});

function onError(err) {
    console.log(err);
    this.emit('end');
}

gulp.task('default', ['lint', 'scripts', 'styles', 'haml', 'fileInclude', 'webserver', 'watch']);
