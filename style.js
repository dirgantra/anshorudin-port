function filterGallery(category) {
    var items = document.getElementsByClassName('gallery-item');
    for (var i = 0; i < items.length; i++) {
        if (items[i].className.indexOf(category) > -1) {
            items[i].style.display = 'block';
        } else {
            items[i].style.display = 'none';
        }
    }

    // Update active class on buttons
    var btns = document.getElementsByClassName('tab-button');
    for (var j = 0; j < btns.length; j++) {
        btns[j].className = btns[j].className.replace(' active', '');
    }
    event.currentTarget.className += ' active';
}