document.getElementById("draw-button").onclick = () => {
    const starAmount = document.getElementById("star-bar").value;
    const error = document.getElementById("error");
    const starBox = document.getElementById("star-box");
    const message = document.getElementById("message");
    starBox.innerHTML = "";
    

    if(isNaN(starAmount) || starAmount <= 0) {
        error.classList.remove("hidden")
        return;
    } else {
        error.classList.add("hidden");
    }

    for(let i = 0; i < starAmount; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        const x = Math.random() * (starBox.offsetWidth - 20);
        const y = Math.random() * (starBox.offsetHeight - 20);

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        starBox.appendChild(star);
        star.onclick = () => {
            message.innerHTML = `You are star number: ${i + 1}`;
            message.style.display = "block";
        };
        
        
    }

};