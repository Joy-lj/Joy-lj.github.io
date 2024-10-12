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
        a.href = book.url;
        a.classList.add("book-content");
        section.append(a);

        const name = document.createElement("h3");
        name.innerHTML = book.name;
        a.append(name);

        const author = document.createElement("p");
        author.innerHTML = book.author;
        a.append(author);

        const img = document.createElement("img");
        img.src = `https://joy-lj.github.io/csce242/projects/part5/images/bookcovers/${book.image}`;
        a.append(img);

        const cite = document.createElement("p");
        cite.classList.add("cite");
        cite.innerHTML = book.cite;
        section.append(cite);

        const availability = document.createElement("p");
        availability.innerHTML = `Availability: ${book.availability}`;
        section.append(availability);

        return section;
    });
};

showBooks();