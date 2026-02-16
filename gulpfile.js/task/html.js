const { src, dest} = require('gulp');

// Config
const path = require('../config/path');
const app = require('../config/app');

// Plugins
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');
const webpHtml = require('gulp-webp-html');

const html = () => {
    return src(path.html.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "HTML",
                message: error.message
            }))
        }))
        .pipe(fileinclude())
        .pipe(webpHtml())
        .pipe(size({ title: 'ДО' }))
        .pipe(htmlmin(app.htmlminlmin))
        .pipe(size({ title: 'ПОСЛЕ' }))
        .pipe(dest(path.html.dest))
        .pipe($.browserSync.stream())
}

module.exports = html;