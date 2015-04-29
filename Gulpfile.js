var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
    js: ['javascript/main.jsx', 'javascript/UI/**/*'],
    min_out: "vault.min.js",

    js_login: ['javascript/login.jsx', 'javascript/UI/**/*'],
    login_min_out: "login.min.js",

    libs: ['compiled/react/react.min.js'],
    libs_min_out: "libs.min.js",

    dest: 'compiled'
}

gulp.task('default', ['watch']);

gulp.task('watch', ['js:login', 'js:main'], function(){
    gulp
        .watch(paths.js, ['js:login', 'js:main']);
});

gulp.task('js:login', function () {
    return gulp.src(paths.js)
        .pipe(sourcemaps.init())
            .pipe(react())
            .pipe(concat(paths.login_min_out))
            .pipe(uglify(paths.login_min_out))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.dest));
});

gulp.task('js:main', function () {
    return gulp.src(paths.js)
        .pipe(sourcemaps.init())
            .pipe(react())
            .pipe(concat(paths.min_out))
            .pipe(uglify(paths.min_out))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.dest));
});
