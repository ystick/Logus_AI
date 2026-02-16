const del = require('del');

// del direct
const clear = () => {
    return del($.path.root);
}


module.exports = clear;