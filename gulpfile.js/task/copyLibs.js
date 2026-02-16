const copyLibs = () => {
    return $.gulp.src('./app/libs/**/*.*')
        .pipe($.gulp.dest(`./public/assets/template/libs`))
}

module.exports = copyLibs;