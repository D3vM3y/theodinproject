// array to store all the books
let myLibrary = [];

// book object to add or display a book
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





// get page elements
// Navigation Buttons
// navigation bars
const displayLibraryBtn = document.querySelectorAll(".displayLibraryBtn");
const addBookBtn = document.querySelectorAll(".addBookBtn");
// const findBookBtn = document.querySelectorAll(".findBookBtn");
const homeBtn = document.querySelectorAll(".homeBtn");

// Get screens
const bottomNav = document.querySelector("#bottomNav");
const landingPageScreen = document.querySelector("#landingPageScreen");
const displayLibraryScreen = document.querySelector("#displayLibraryScreen");
const addBookScreen = document.querySelector("#addBookScreen");


// Event Listeners
homeBtn.forEach(element => {
    element.addEventListener("click", () => {
        hideElement(addBookScreen);
        hideElement(displayLibraryScreen);
        hideElement(bottomNav);
        displayElement(landingPageScreen);
        isHidden();
    })
})

displayLibraryBtn.forEach(element => {
    element.addEventListener("click", () => {
        console.log("display library");
        hideElement(landingPageScreen);
        hideElement(addBookScreen);
        hideElement(bottomNav);
        displayElement(displayLibraryScreen);
        displayElement(bottomNav);
        isHidden();
    })
})

addBookBtn.forEach(element => {
    element.addEventListener("click", () => {
        console.log("display add a book screen");
        hideElement(landingPageScreen);
        hideElement(displayLibraryScreen);
        hideElement(bottomNav);
        displayElement(addBookScreen);
        displayElement(bottomNav);
        isHidden();
    })
})

// ===============
// ===============
// test function delete later
function isHidden() {
    if(bottomNav.classList === "hideElement"){
        console.log("hidden");
    }else {
        console.log("not hidden");
    }
}
// ===============
// ===============


// Functions
// Helper functions to display or hide screen elements
function displayElement(element) {
    element.classList.remove("hideElement");
}

function hideElement(element) {
    element.classList.add("hideElement");
}


function app() {
    // running the app on page load
    listLibraryBooks();
}

app();











const firstBook = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const secondBook = new Book("Just Like You", "Nick Hornby", 506, true);  
const thirdBook = new Book("Gutes Webdesign", "Someone", 608, true);

// placeholder. delete if page works
myLibrary.push(firstBook);
myLibrary.push(secondBook);
myLibrary.push(thirdBook);




// Webcontent 
// const landingPage = document.querySelector("#landingPage");
// const addBookScreen = document.querySelector("#addBook");
// const form = document.querySelector("#form");
// const books = document.querySelector("#books");
// const searchBook = document.querySelector("#searchBook");
// const bookList = document.querySelector("#bookList");
// const submitBook = document.querySelector("#submitBook");
// const displayLibraryScreen = document.querySelector("displayLibraryScreen");


//eventListeners for Navigation buttons
// newBookBtn.addEventListener("click", () => {
//     displayElement(addBookScreen);
//     hideElement(displayLibraryScreen);
//     // hideElement(searchBook);
//     hideElement(landingPage);
// });

// findBook.addEventListener("click", () => {
//     displayElement(searchBook);
//     hideElement(form);
//     hideElement(books);
//     hideElement(landingPage);
// })

// displayLibraryBtn.addEventListener("click", () => {
//     listLibraryBooks();
//     displayElement(displayLibraryScreen)
//     hideElement(addBookScreen);
//     hideElement(searchBook);
// })

// submitBook.addEventListener("submit", (newBook) => {
//     newBook.preventDefault();
//     addBookToLibrary(newBook);
// })


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
    const bookToAdd = new Book(bookInfo.title.value, bookInfo.author.value, bookInfo.pages.value, bookInfo.read.checked);
    myLibrary.push(bookToAdd);
}

