/* Exercise */
document.querySelector("#exercise1").onclick = (e) => {
    e.preventDefault();
    document.getElementById("color-div").classList.remove("hidden");
    document.getElementById("picture-div").classList.add("hidden");
};

document.querySelector("#exercise2").onclick = (e) => {
    e.preventDefault();
    document.getElementById("color-div").classList.add("hidden");
    document.getElementById("picture-div").classList.remove("hidden");
};

document.querySelector("#toggle-div").onclick = () => {
    document.getElementById("toggle-div").classList.toggle("arrowdown-toggle");
    document.getElementById("toggle-div").classList.toggle("arrowup-toggle");
    document.getElementById("exercise-div").classList.toggle("hidden-small");
    document.getElementById("exercise1").classList.toggle("exercise");
    document.getElementById("exercise2").classList.toggle("exercise");
};

document.getElementById("mySlider").onchange = (e) => {
    document.getElementById("color-div").style.setProperty("background-color", `rgb(${e.target.value}, 0, 0)`);
    
    const message = document.getElementById("message");
    
    if (e.target.value < 75) {
        message.innerHTML = "Cool";
    } else if (e.target.value >= 75 && e.target.value < 180) {
        message.innerHTML = "Getting warmer";
    } else {
        message.innerHTML = "Very hot";
    }
};

document.getElementById("buttons").onclick = (event) => {
    const button = event.target.closest("button");
    if (button) {
        const size = button.getAttribute("data-size");
        document.getElementById("image").src = `https://picsum.photos/${size}`;
    }
};