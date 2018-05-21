// Inits gallery
function initGallery() {
    var items = Array.from(document.querySelectorAll('.gallery-item'));

    function setThisHeight() {
        var item = items.pop();

        if(!item) { return initMasonry(); }

        var img = new Image();
        img.onload = function() {
            item.style.height = item.offsetHeight + 'px';
        };
        img.src = item.children[0].src;

        setThisHeight();
    }

    setThisHeight();
}

// Init masonry
function initMasonry() {
    setTimeout(function() {
        new Masonry(document.querySelector('.gallery-items'), {
            itemSelector: '.gallery-item',
            animate: true
        });
    }, 100);
}

initGallery();
