/* Small screen */
document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("browse-aside").classList.toggle("hidden-small-aside");
};

/* Parsing JSON */
const getBooks = async() => {
    try {
        return (await fetch("https://joy-lj.github.io/csce242/projects/part5/books.json")).json();
    } catch(error) {
        console.log(error);
    }
};

const showBooks = async () => {
    const books = await getBooks();

    books.forEach((book) => {
        const section = document.createElement("section");
        section.classList.add("book");
        document.getElementById("books-section").append(section);

        const a = document.createElement("a");
        a.href = `https://joy-lj.github.io/csce242/projects/part5/bookdescrip.html`;  // Link to the specific page for each book
        a.target = "_blank"; // Open link in a new tab
        section.append(a);

        const h3 = document.createElement("h3");
        h3.innerHTML = book.name;
        a.append(h3);

        const author = document.createElement("p");
        author.innerHTML = `Author: ${book.author}`;
        section.append(author);

        const img = document.createElement("img");
        img.src = `https://joy-lj.github.io/csce242/projects/part5/images/bookcovers/${book.image}`;
        section.append(img);

        const availability = document.createElement("p");
        availability.innerHTML = `Availability: ${book.availability}`;
        section.append(availability);

        return section;
    });
};

showBooks();