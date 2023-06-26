let myLibrary = [];

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

function addBookToLibrary() {

}

function listLibraryBooks() {
    // loop through library and display all books in a list or on a card

}

function displayElement(element) {
    element.classList.remove("hideElement");
}

function hideElement(element) {
    element.classList.add("hideElement");
}

const firstBook = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

console.log(firstBook.info());

// Navigation Buttons
const newBookBtn = document.querySelector("#newBookBtn");
const viewBooks = document.querySelector("#viewBooks");
const findBook = document.querySelector("#findBook");


// Webcontent 
const form = document.querySelector("#form");
const books = document.querySelector("#books");
const searchBook = document.querySelector("#searchBook");


//eventListeners for Navigation buttons
newBookBtn.addEventListener("click", () => {
    displayElement(form);
    hideElement(books);
    hideElement(searchBook);
});

findBook.addEventListener("click", () => {
    displayElement(searchBook);
    hideElement(form);
    hideElement(books);
})

viewBooks.addEventListener("click", () => {
    displayElement(books)
    hideElement(form);
    hideElement(searchBook);
})
