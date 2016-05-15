var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    clean = require('gulp-clean'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    order = require('gulp-order'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    pug = require('gulp-pug'),
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

gulp.task('scripts', function() {
    gulp.src('js/**/*')
        .pipe(order([
            'vendor/*',
            '*'
        ]))
        .pipe(concat('all.js'))
        .pipe(uglify())
        .on('error', onError)
        .pipe(rename('all.min.js'))
        .pipe(gulp.dest('dist'));
});

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
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(rename('all.min.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('templates', function() {
    gulp.src('templates/index.pug')
        .pipe(pug())
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
    gulp.watch('templates/**/*', ['templates']);
});

function onError(err) {
    console.log(err);
    this.emit('end');
}

gulp.task('default', ['lint', 'clean', 'scripts', 'styles', 'templates', 'webserver', 'watch']);
