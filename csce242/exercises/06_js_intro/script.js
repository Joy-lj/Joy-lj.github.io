const doStuff = () => {
    alert("Hello World");
};

const myButton = document.getElementById("btn-click");
const secondButton = document.getElementById("btn-click2");
const thirdButton = document.getElementById("btn-click3");
const fourthButton = document.getElementById("btn-click4");
const fifthButton = document.getElementById("btn-click5");
//myButton.onclick = doStuff; //only put parenthesis when you want to immediately call things

myButton.onclick = () => {
    document.getElementById("message").innerHTML = "Hello Everyone!";
    document.getElementById("stuff").classList.add("special");
};

//document.getElementById("btn=click2").onclick = () => {
// }

secondButton.onclick = () => {
    document.getElementById("message").innerHTML = "Goodbye Everyone!";
    document.getElementById("stuff").classList.remove("special");
}

thirdButton.onclick = () => {
    document.getElementById("stuff").classList.add("hide");
}

fourthButton.onclick = () => {
    document.getElementById("stuff").classList.add("animate");
}

fifthButton.onclick = () => {
    document.getElementById("stuff").classList.remove("animate");
}

// Showing data from an input field
/* document.getElementById("txt-first-name").onkeyup = () => {
    const textBox = document.getElementById("txt-first-name");
    document.getElementById("result").innerHTML = textBox.value;
} */
document.getElementById("txt-first-name").onkeyup = (event) => {
    document.getElementById("result").innerHTML = event.target.value;
}
