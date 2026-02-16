const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const del = require('del');
const zipPlugin = require('gulp-zip');

const zip = () => {
    del(`./${$.path.rootFolder}.zip`);
    return $.gulp.src(`${$.path.root}/**/*.*`, {})
    
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "ZIP",
                message: error.message
            }))
        }))
        .pipe(zipPlugin(`${$.path.rootFolder}.zip`))
        .pipe($.gulp.dest('./'))  
}

module.exports = zip;