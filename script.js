function nextSlide() {
    document.getElementById('slide1').style.left = '-100%';
    document.getElementById('slide2').style.left = '0';
}

function prevSlide() {
    document.getElementById('slide1').style.left = '0';
    document.getElementById('slide2').style.left = '100%';
}
