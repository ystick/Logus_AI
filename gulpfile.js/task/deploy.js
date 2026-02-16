const configFTP = require('../config/ftp');
const ftp       = require('vinyl-ftp');

function deploy() {
    const conn = ftp.create(
        configFTP
    );

    return $.gulp.src('public/assets/template/**/*')
        .pipe( conn.dest('gulp/www/assets/template/') );
}

module.exports = deploy;