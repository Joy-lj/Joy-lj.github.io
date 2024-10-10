const getIcecream = async() => {
    try {
        return (await fetch("https://portiaportia.github.io/json/ice-creams.json")).json();
    } catch(error) {
        console.log(error);
    }
};

const showIcecream = async() => {
    const icecream = await getIcecream();

    icecream.forEach((icecream)=> {
        document.getElementById("icecream-section").append(getIcecreamSection(icecream));
    });
};

const getIcecreamSection = (icecream) => {
    const section = document.createElement("section");

    const icecreamDiv = document.createElement("div");
    icecreamDiv.classList.add("icecream");

    const img = document.createElement("img");
    img.src = `https://portiaportia.github.io/json/images/ice-creams/${icecream.image}`;
    icecreamDiv.append(img);

    const overlayDiv = document.createElement("div");
    overlayDiv.classList.add("overlay");
    overlayDiv.textContent = icecream.name;
    icecreamDiv.append(overlayDiv);

    icecreamDiv.addEventListener("mouseenter", () => {
        overlayDiv.style.opacity = "0.9";
    });

    icecreamDiv.addEventListener("mouseleave", () => {
        overlayDiv.style.opacity = "0";
    });

    section.append(icecreamDiv);
    return section;
};


showIcecream();
