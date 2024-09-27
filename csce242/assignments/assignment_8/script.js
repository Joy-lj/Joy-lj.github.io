// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Array of image filenames
    let imageNames = ["birthday.jpg", "clown.jpg", "party.jpg", "gifts.jpg", "friends.jpg", "cake.jpg"];
    
    // Associative array for titles and descriptions
    let imageDetails = [];
    imageDetails["birthday.jpg"] = { title: "Birthday Celebration", description: "A cheerful birthday celebration scene with a colorful cake and balloons." };
    imageDetails["clown.jpg"] = { title: "Funny Clown", description: "A playful clown performing tricks and making everyone laugh." };
    imageDetails["party.jpg"] = { title: "Party Time", description: "A fun party scene with music and dancing." };
    imageDetails["gifts.jpg"] = { title: "Gift Exchange", description: "A heartwarming gift exchange moment during the celebration." };
    imageDetails["friends.jpg"] = { title: "Friends Gathering", description: "A group of friends enjoying the day together, sharing laughter and joy." };
    imageDetails["cake.jpg"] = { title: "Cake Cutting", description: "The birthday celebrant cutting a delicious, multi-layered cake." };

    // Target the message element
    const messageElement = document.getElementById("message");

    // Loop through the array of image names
    imageNames.forEach((imageName) => {
        // Create an image element
        const imgElement = document.createElement("img");
        imgElement.src = `images/${imageName}`;
        imgElement.alt = imageDetails[imageName].title; // Alt text for accessibility
        imgElement.id = imageName; // Unique ID for the image
        imgElement.style.width = "150px";
        imgElement.style.height = "250px";
        imgElement.style.border = "darkcyan 2px solid";
        imgElement.style.margin = "10px";

        // Add click event listener to each image
        imgElement.addEventListener('click', function() {
            // Display the title and description above the images
            messageElement.innerHTML = `<h3>${imageDetails[imageName].title}</h3><p>${imageDetails[imageName].description}</p>`;
            messageElement.classList.remove("hidden"); // Show the message
        });

        // Append the image element to the picture container
        document.getElementById("picture-background").appendChild(imgElement);
    });
});
