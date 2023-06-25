function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,   
    this.info = function() {
        bookRead = read === true ? "read the book" : "not read yet";
        const infoString = `${title} by ${author}, ${pages}, ${bookRead}`;
        return infoString;
    }
}

const firstBook = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

console.log(firstBook.info());