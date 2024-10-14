/* Small screen */
document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("browse-aside").classList.toggle("hidden-small-aside");
    
    const aboutContent = document.getElementById("about-content");
    if (aboutContent) {
        aboutContent.classList.add("about-content");
    }

    const contactContent = document.getElementById("contact-content");
    if (contactContent) {
        contactContent.classList.add("contact-content");
    }

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
        a.href = `https://joy-lj.github.io/csce242/projects/part5/${book.descriptionUrl}`;
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

        const availability = document.createElement("p");
        availability.innerHTML = `Availability: ${book.availability}`;
        bookSection.append(availability);

        return bookSection;
    });
};

showBooks();

/*const displayBook = (bookId) => {
    // Find the book by ID using an arrow function
    const book = books.find(b => book.id === bookId);
    
    // Check if the book exists
    if (book) {
        // Example to display the book's information on the page

        const backgroundDiv = document.createElement("div");
        backgroundDiv.classList.add("background-div");
        document.getElementById("background-div").append(backgroundDiv);

        const bookDiv = document.createElement("div");
        backgroundDiv.append(bookDiv);

        bookDiv.append(img);
        bookDiv.append(cite);
        bookDiv.append(availability);

        //const borrowButton = document.createElement("button");

        const bookInfo = document.createElement("div");
        backgroundDiv.append(bookInfo);

        bookInfo.append(name);
        bookInfo.append(author);
        
        const bookSummary = document.createElement("p");
        bookSummary.innerHTML = book.summary;
        backgroundDiv.append(bookSummary);

        return backgroundDiv;

    } else {
        console.log('Book not found');
    }
};

displayBook("1");*/