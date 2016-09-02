var watchify = require('watchify');
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash.assign');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var react = require('react');
var gulpif = require('gulp-if');
var autoClose = require('browser-sync-close-hook');


// setup node enviorment (development or production)
var env = process.env.NODE_ENV;

// ////////////////////////////////////////////////
// Browser-Sync Tasks
// ////////////////////////////////////////////////

gulp.task('browserSync', function() {
    browserSync.use({
        plugin() {},
        hooks: {
            'client:js': autoClose,
        },
    });
    browserSync({
        server: {
            baseDir: './',
            browser: ["google chrome", "safari"]
        },
        browser: ["google chrome", "safari"]
    });
});

// ////////////////////////////////////////////////
// HTML Tasks
// ////////////////////////////////////////////////

gulp.task('html', function() {
    return gulp.src('./**/*.html')
        .pipe(browserSync.reload({
            stream: true
        }));
});

// ////////////////////////////////////////////////
// Scripts Tasks
// ////////////////////////////////////////////////

gulp.task('scripts', function() {
    return gulp.src('./js/**/*.js')
        .pipe(browserSync.reload({
            stream: true
        }));
});

// ////////////////////////////////////////////////
// Styles Tasks
// ///////////////////////////////////////////////

gulp.task('styles', function() {
    gulp.src('./css/**/*.css')
        .pipe(browserSync.reload({
            stream: true
        }));

});

// ////////////////////////////////////////////////
// Watch Tasks
// ////////////////////////////////////////////////

gulp.task('watch', function() {
    gulp.watch('./**/*.html', ['html']);
    // gulp.watch('src/scss/**/*.scss', ['styles']);
    gulp.watch('./css/**/*.css', ['styles']);
    gulp.watch('./js/**/*.js', ['scripts']);

});

gulp.task('default', ['scripts', 'styles', 'browserSync', 'watch']);
