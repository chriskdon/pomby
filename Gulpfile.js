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
var plumber = require('gulp-plumber');

var paths = {
    js: ['javascript/main.jsx', 'javascript/UI/**/*', 'javascript/data/**/*', 'javascript/lib/**/*'],
    min_out: "vault.min.js",

    js_login: ['javascript/login.jsx', 'javascript/UI/**/*', 'javascript/data/**/*', 'javascript/lib/**/*'],
    login_min_out: "login.min.js",

    libs: ['compiled/lib/react/react.min.js',
           'compiled/lib/qwest/qwest.min.js',
           'compiled/lib/underscore/underscore-min.js',
           'compiled/lib/route-recognizer/dist/route-recognizer.js'],
    libs_min_out: "libs.min.js",

    less: ['less/vault.less'],
    less_watch: ['less/**/*'],

    dest: 'compiled'
}

gulp.task('default', ['watch']);

gulp.task('build', ['js:login', 'js:main', 'js:lib', 'less']);

gulp.task('watch', ['js:login', 'js:main', 'less'], function(){
    livereload.listen();

    gulp.watch(paths.js, ['js:main']);
    gulp.watch(paths.js_login, ['js:login']);
    gulp.watch(paths.less_watch, ['less']);
});

gulp.task('js:login', function () {
    return gulp.src(paths.js_login)
        .pipe(plumber())
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
        .pipe(plumber())
        .pipe(sourcemaps.init())
            .pipe(react())
            .pipe(concat(paths.min_out))
            .pipe(uglify(paths.min_out))
            .pipe(size({title: paths.min_out, gzip: true}))
        .pipe(sourcemaps.write('./map'))
        .pipe(gulp.dest(paths.dest))
        .pipe(plumber.stop())
        .pipe(livereload());
});

gulp.task('js:lib', function () {
    return gulp.src(paths.libs)
        .pipe(plumber())
        .pipe(sourcemaps.init())
            .pipe(react())
            .pipe(concat(paths.libs_min_out))
            .pipe(uglify(paths.libs_min_out))
            .pipe(size({title: paths.libs_min_out, gzip: true}))
        .pipe(sourcemaps.write('./map'))
        .pipe(gulp.dest(paths.dest))
        .pipe(plumber.stop())
        .pipe(livereload());
});

gulp.task('lint', function() {
    return gulp.src(paths.js.concat(paths.js_login))
        .pipe(jshint({ linter: require('jshint-jsx').JSXHINT }))
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('less', function () {
    return gulp.src(paths.less)
        .pipe(plumber())
        .pipe(sourcemaps.init())
            .pipe(less())
            .pipe(cssmin())
            .pipe(size({title: "less", gzip: true}))
        .pipe(sourcemaps.write('./map'))
        .pipe(gulp.dest(paths.dest))
        .pipe(plumber.stop())
        .pipe(livereload());
});
