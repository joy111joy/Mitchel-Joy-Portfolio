window.onload = function() {
    var worksBoxes = document.getElementsByClassName('WorksBox');
    for (var i = 0; i < worksBoxes.length; i++) {
        worksBoxes[i].addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    }
}