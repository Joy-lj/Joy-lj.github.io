document.getElementById("count-section").onclick = () => {
    var countElement = document.getElementById("count");
    var count = parseInt(countElement.textContent); 
    count += 1;
    countElement.textContent = count;
};


document.getElementById("image-section").onclick = () => {
    var imageElement = document.getElementById("image");
    var image = location.reload();
    imageElement.location.reload() = image;

};
document.getElementById("mySlider").oninput = function() {
    var sliderValue = this.value;
    var sliderImage = document.getElementById("slider-image");
    sliderImage.style.left = (sliderValue * 2) + "px";
};