const path = require('path');

const pathSrc = './app';
const pathDest = './public';

module.exports = {
    rootFolder: path.basename(path.resolve()),

    root: pathDest,

    html: {
        src: pathSrc + '/html/*.html',
        watch: pathSrc + '/html/**/*.html',
        dest: pathDest
    },

    pug: {
        src: pathSrc + '/pug/*.pug',
        watch: pathSrc + '/pug/**/*.pug',
        dest: pathDest
    },

    css: {
        src: pathSrc + '/css/*.css',
        watch: pathSrc + '/css/**/*.css',
        dest: pathDest + '/assets/template/css'
    },

    scss: {
        src: pathSrc + '/sass/*.{sass,scss}',
        watch: pathSrc + '/sass/**/*.{sass,scss}',
        dest: pathDest + '/assets/template/css'
    },

    js: {
        src: pathSrc + '/js/*.js',
        watch: pathSrc + '/js/**/*.js',
        dest: pathDest + '/assets/template/js'
    },

    img: {
        src: pathSrc + '/img/**/*.{webp,png,jpg,jpeg,gif,svg}',
        watch: pathSrc + '/img/**/*.{webp,png,jpg,jpeg,gif,svg}',
        dest: pathDest + '/assets/template/img'
    },

    font: {
        src: pathSrc + '/font/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        watch: pathSrc + '/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
        dest: pathDest + '/assets/template/font'
    },

    fontStyle: {
        file: pathSrc + '/sass/block/fonts.scss'
    }
}