module.exports = () => {
    var elem = document.querySelector('.slider-ratata');
        var flkty = new Flickity( elem, {
            draggable: true,
            prevNextButtons: true,
            autoPlay: 5000,
            lazyLoad: true,
            // fade: true,
            wrapAround: true,
            cellAlign: 'center',
            pageDots: false,
            contain: true
        });

        // element argument can be a selector string
        //   for an individual element
        var flkty = new Flickity( '.slider-ratata', {
        // options
    });
}