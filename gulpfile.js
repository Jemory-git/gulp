const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const stylus = require('gulp-stylus');
const browserSync = require('browser-sync').create(); // 自动刷新浏览器
const browserify = require('browserify'); // 转换es6模块成require
const source = require('vinyl-source-stream'); // 转换require为浏览器可用模块

function copyHtml() {// 复制html
    return gulp.src('./dev/**/*.html')
        .pipe(gulp.dest('prod'));
}

function copyCss() {// 复制css
    return gulp.src('./dev/**/*.css')
        .pipe(gulp.dest('prod'));
}

function copyImg() {// 复制图片
    return gulp.src('./dev/**/*.{jpg,png,gif}')
        .pipe(gulp.dest('prod'));
}

function transformStylus() {// 转换stylus
    return gulp.src('./dev/**/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('prod'));
}

function transformJs() {// 转换scripts
    return gulp.src('./dev/dev.js', { sourcemaps: true })
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('prod'));
}

function watch() {
    gulp.watch('./dev/**/*.html', copyHtml);
    gulp.watch('./dev/**/*.css', copyCss);
    gulp.watch('./dev/**/*.styl', transformStylus);
    gulp.watch('./dev/**/*.{jpg,png,gif}', copyImg);
    gulp.watch('./dev/**/*.js', transformJs);
}

exports.default = gulp.series(gulp.parallel(copyHtml, copyCss, copyImg, transformStylus, transformJs), watch);
