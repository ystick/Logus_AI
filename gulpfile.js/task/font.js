const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const newer = require('gulp-newer');
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');

const font = () => {
    return $.gulp.src($.path.font.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "Font",
                message: error.message
            }))
        }))
        .pipe(newer($.path.font.dest))
        .pipe(fonter($.app.fonter))
        .pipe($.gulp.dest($.path.font.dest))
        .pipe(ttf2woff2())
        .pipe($.gulp.dest($.path.font.dest))
        .pipe($.browserSync.stream())
}

module.exports = font;