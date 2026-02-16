module.exports = () => {
    var elem = document.querySelector('.header_slider');
        var flkty = new Flickity( elem, {
            draggable: true,
            prevNextButtons: false,
            autoPlay: 5000,
            lazyLoad: true,
            fade: true,
            cellAlign: 'left',
            contain: true
        });

        // element argument can be a selector string
        //   for an individual element
        var flkty = new Flickity( '.header_slider', {
        // options
    });
}