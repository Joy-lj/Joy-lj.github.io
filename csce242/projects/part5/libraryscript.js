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
        const bookSection = document.createElement("section");
        bookSection.classList.add("book");
        document.getElementById("book-div").append(bookSection);

        const a = document.createElement("a");
        a.href = book.bookUrl;
        a.classList.add("book-content");
        bookSection.append(a);

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
        bookSection.append(cite);

        const expiration = document.createElement("p");
        expiration.classList.add("expire");
        expiration.innerHTML = "Expires in " + book.expiration + "!";
        bookSection.append(expiration);

        return bookSection;
    });
};

showBooks();