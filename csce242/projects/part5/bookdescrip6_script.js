const getBooks = async() => {
    try {
        return (await fetch("https://joy-lj.github.io/csce242/projects/part5/books.json")).json();
    } catch(error) {
        console.log(error);
    }
};

const displayBook = async (bookId) => {
    const books = await getBooks();
    window.books = books;

    const book = window.books.find(b => b.id === bookId);
    
    if (book) {
        const backgroundDiv = document.createElement("div");
        backgroundDiv.classList.add("background-div");
        document.getElementById("background-div").append(backgroundDiv);

        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book-div");
        backgroundDiv.append(bookDiv);

        const img = document.createElement("img");
        img.src = `https://joy-lj.github.io/csce242/projects/part5/images/bookcovers/${book.image}`;
        bookDiv.append(img);

        const cite = document.createElement("p");
        cite.classList.add("cite");
        cite.innerHTML = book.cite;
        bookDiv.append(cite);

        const availability = document.createElement("p");
        availability.classList.add("available-books");
        availability.innerHTML = "" + book.availability + " available";
        bookDiv.append(availability);

        const aBorrow = document.createElement("a");
        aBorrow.href = "borrowedbook.html";
        bookDiv.append(aBorrow);

        const borrowButton = document.createElement("button");
        borrowButton.innerHTML = "Borrow";
        aBorrow.append(borrowButton);

        const bookInfo = document.createElement("div");
        backgroundDiv.append(bookInfo);

        const name = document.createElement("h1");
        name.innerHTML = book.name;
        bookInfo.append(name);

        const author = document.createElement("h2");
        author.innerHTML = book.author;
        bookInfo.append(author);
        
        const bookSummary = document.createElement("p");
        bookSummary.innerHTML = book.summary;
        bookInfo.append(bookSummary);

        const themes = document.createElement("h3");
        themes.innerHTML = "Themes: ";
        bookInfo.append(themes);
        
        book.themes.forEach((theme)=> {
            const bookThemes = document.createElement("p");
            bookThemes.innerHTML = theme;
            bookInfo.append(bookThemes);
        });
    } else {
        console.log('Book not found');
    }
};

displayBook("6");