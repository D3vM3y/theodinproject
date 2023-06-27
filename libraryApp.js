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

function displayElement(element) {
    element.classList.remove("hideElement");
}

function hideElement(element) {
    element.classList.add("hideElement");
}

const firstBook = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const secondBook = new Book("Just Like You", "Nick Hornby", 506, true);  
const thirdBook = new Book("Gutes Webdesign", "Someone", 608, true);

// placeholder. delete if page works
myLibrary.push(firstBook);
myLibrary.push(secondBook);
myLibrary.push(thirdBook);

// Navigation Buttons
const newBookBtn = document.querySelector("#newBookBtn");
const viewBooks = document.querySelector("#viewBooks");
const findBook = document.querySelector("#findBook");


// Webcontent 
const form = document.querySelector("#form");
const books = document.querySelector("#books");
const searchBook = document.querySelector("#searchBook");
const bookList = document.querySelector("#bookList");
const submitBook = document.querySelector("#submitBook");


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
    listLibraryBooks();
    displayElement(books)
    hideElement(form);
    hideElement(searchBook);
})

submitBook.addEventListener("submit", (newBook) => {
    newBook.preventDefault();
    addBookToLibrary(newBook);
})


function listLibraryBooks() {
    // clean the bookList before loading it
    bookList.innerHTML = "";

    // adding all books from myLibrary to the website
    myLibrary.map((book) => {
        const li = document.createElement("li");
        li.textContent = book.info();
        bookList.append(li);
    })
}



function addBookToLibrary(newBook) {
    const bookInfo = newBook.target;
    // const title = newBook.target.title.value;
    // const author = newBook.target.author.value;
    // const pages = newBook.target.pages.value;
    // const read = newBook.target.read.checked;
    const bookToAdd = new Book(bookInfo.title.value, bookInfo.author.value, bookInfo.pages.value, bookInfo.read.checked);
    myLibrary.push(bookToAdd);
}

function app() {
    listLibraryBooks();
}

app();