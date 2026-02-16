global.$ = {
    gulp: require("gulp"),
    gp: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create(),
    chalk: require('chalk'),

    path: require('./config/path'),
    app: require('./config/app')
}

// tasks
const requireDir = require('require-dir');
const task = requireDir('./task', { recurse: true })

// watch
const watcher = () => {
    $.gulp.watch($.path.html.watch, task.html);
    $.gulp.watch($.path.scss.watch, task.scss);
    $.gulp.watch($.path.js.watch, task.js);
    $.gulp.watch($.path.img.watch, task.img);
    $.gulp.watch($.path.font.watch, task.font);
}

const copy = $.gulp.series(
    task.copyManifest,
    task.copyLibs
)

const build = $.gulp.series(
    task.clear,
    $.gulp.parallel(task.html, task.scss, task.js, task.img, task.font),
    task.fontStyle,
    copy
);

const dev = $.gulp.series(
    build,
    $.gulp.parallel(watcher, task.server)
);

// tasks
exports.html = task.html;
exports.pug = task.pug;
exports.css = task.css;
exports.scss = task.scss;
exports.js = task.js;
exports.img = task.img;
exports.font = task.font;
exports.fontStyle = task.fontStyle;
exports.zip = task.zip;
exports.deploy = task.deploy;
exports.copyManifest = task.copyManifest;
exports.copyLibs = task.copyLibs;

exports.deployZIP = $.gulp.series(
    build,
    task.zip
)

exports.deployFTP = $.gulp.series(
    build,
    task.deploy
)

exports.default = $.app.isProd
    ? build
    : dev;