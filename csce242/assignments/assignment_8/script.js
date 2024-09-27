let images = ["birthday.jpg", "clown.jpg", "rain.jpg", "read.jpg", "shovel.jpg", "work.jpg"];

let imageMessage = [];
imageMessage["birthday.jpg"] = {title:"birthday", description:"celebrating birthday"};
imageMessage["clown.jpg"] = {title:"clown", description:"clown making people laugh"};
imageMessage["rain.jpg"] = {title:"rain", description:"it's rainy, bring your umbrella"};
imageMessage["read.jpg"] = {title:"read", description:"enjoy this good book"};
imageMessage["shovel.jpg"] = {title:"shovel", description:"get to work shoveling"};
imageMessage["work.jpg"] = {title:"work", description:"doing homework"};

const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");
const message = document.getElementById("message");

images.forEach((image, index)=> {
    const img = document.createElement("img");
    img.src = `images/${image}`;
    img.alt = imageMessage[image].title;
    img.id = image;
    img.classList.add("img");

    img.onclick = () => {
        message.innerHTML = `<h3>${imageMessage[image].title}</h3><p>${imageMessage[image].description}</p>`;
        message.classList.remove("hidden");
    };

    if (index < 3) {
        row1.appendChild(img);
    } else {
        row2.appendChild(img);
    }
});