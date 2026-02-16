const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');

const js = () => {
    return $.gulp.src($.path.js.src, { sourcemaps: $.app.isDev })
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "JavaScript",
                message: error.message
            }))
        }))
        .pipe(babel())
        .pipe(webpack($.app.webpack))
        .pipe($.gulp.dest($.path.js.dest, { sourcemaps: $.app.isDev }))
        .pipe($.browserSync.stream())
}

module.exports = js;