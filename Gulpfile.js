var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var cssmin = require('gulp-cssmin');
var sourcemaps = require('gulp-sourcemaps');
var jshint = require('gulp-jshint');
var livereload = require('gulp-livereload');
var size = require('gulp-size');

var paths = {
    js: ['javascript/main.jsx', 'javascript/UI/**/*', 'javascript/data/**/*'],
    min_out: "vault.min.js",

    js_login: ['javascript/login.jsx', 'javascript/UI/**/*', 'javascript/data/**/*'],
    login_min_out: "login.min.js",

    libs: ['compiled/react/react.min.js'],
    libs_min_out: "libs.min.js",

    less: ['less/vault.less'],
    less_watch: ['less/**/*'],

    dest: 'compiled'
}

gulp.task('default', ['watch']);

gulp.task('watch', ['js:login', 'js:main', 'less'], function(){
    livereload.listen();

    gulp.watch(paths.js, ['js:main']);
    gulp.watch(paths.js_login, ['js:login']);
    gulp.watch(paths.less_watch, ['less']);
});

gulp.task('js:login', function () {
    return gulp.src(paths.js_login)
        .pipe(sourcemaps.init())
            .pipe(react())
            .pipe(concat(paths.login_min_out))
            .pipe(uglify(paths.login_min_out))
            .pipe(size({title: paths.login_min_out, gzip: true}))
        .pipe(sourcemaps.write('./map'))
        .pipe(gulp.dest(paths.dest))
        .pipe(livereload());
});

gulp.task('js:main', function () {
    return gulp.src(paths.js)
        .pipe(sourcemaps.init())
            .pipe(react())
            .pipe(concat(paths.min_out))
            .pipe(uglify(paths.min_out))
            .pipe(size({title: paths.min_out, gzip: true}))
        .pipe(sourcemaps.write('./map'))
        .pipe(gulp.dest(paths.dest))
        .pipe(livereload());
});

gulp.task('lint', function() {
    return gulp.src(paths.js.concat(paths.js_login))
        .pipe(jshint({ linter: require('jshint-jsx').JSXHINT }))
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('less', function () {
    return gulp.src(paths.less)
        .pipe(sourcemaps.init())
            .pipe(less())
            .pipe(cssmin())
            .pipe(size({title: "less", gzip: true}))
        .pipe(sourcemaps.write('./map'))
        .pipe(gulp.dest(paths.dest))
        .pipe(livereload());
});
