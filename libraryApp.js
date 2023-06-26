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



const firstBook = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

console.log(firstBook.info());

// Navigation Buttons
const newBookBtn = document.querySelector("#newBookBtn");
const viewBooks = document.querySelector("#viewBooks");
const findBook = document.querySelector("#findBook");


// Webcontent 
const form = document.querySelector("#form");


//eventListeners for Navigation buttons
newBookBtn.addEventListener("click", () => {
    form.classList.remove("hideElement");
});

findBook.addEventListener("click", () => {
    form.classList.add("hideElement");
})

viewBooks.addEventListener("click", () => {
    form.classList.add("hideElement");
})