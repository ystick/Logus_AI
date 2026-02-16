const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const webp = require('gulp-webp');
const gulpIf = require('gulp-if');

const img = () => {
    return $.gulp.src($.path.img.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "image",
                message: error.message
            }))
        }))
        .pipe(newer($.path.img.dest))
        .pipe(webp())
        .pipe($.gulp.dest($.path.img.dest))
        .pipe($.gulp.src($.path.img.src))
        .pipe(newer($.path.img.dest))
        .pipe(gulpIf($.app.isProd, imagemin($.app.imagemin)))
        .pipe($.gulp.dest($.path.img.dest))
        .pipe($.browserSync.stream())
}

module.exports = img;