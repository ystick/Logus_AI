module.exports = () => {
    var elem = document.querySelector('.slider-ererere');
        var flkty = new Flickity( elem, {
            draggable: true,
            prevNextButtons: false,
            lazyLoad: true,
            // fade: true,
            cellAlign: 'left',
            contain: true,
            wrapAround: true,
            pageDots: false
        });

        // element argument can be a selector string
        //   for an individual element
        var flkty = new Flickity( '.slider-ererere', {
        // options
    });
}