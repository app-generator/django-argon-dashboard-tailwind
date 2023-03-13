const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
    return gulp.src('static/assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('static/assets/css'));
}

exports.compileSass = compileSass;

function watchSass() {
    gulp.watch('static/assets/scss/**/*.scss', compileSass);
}

exports.watchSass = watchSass;
