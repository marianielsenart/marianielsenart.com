// Inits gallery
function initGallery() {
    var items = Array.prototype.slice.call(document.querySelectorAll('.gallery-item') || []);

    function next() {
        function onLoaded() {
            item.classList.toggle('loaded', true);
            next();
        }

        var item = items.pop();

        if(!item) { return initMasonry(); }

        var img = new Image();
        
        img.src = item.children[0].src;

        if(img.complete) {
            onLoaded();

        } else {
            img.onload = onLoaded;
        }
    }

    next();
}

// Init masonry
function initMasonry() {
    setTimeout(function() {
        new Masonry(document.querySelector('.gallery-items'), {
            itemSelector: '.gallery-item',
            animate: true
        });
    
        document.querySelector('.gallery-items').classList.toggle('loaded', true);

    }, 100);
}

initGallery();
