const copyManifest = () => {
    return $.gulp.src('./app/img/favicon/*.*')
        .pipe($.gulp.dest(`${$.path.img.dest}/favicon`))
}

module.exports = copyManifest;
