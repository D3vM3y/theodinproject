const content = document.querySelector("#contentSection");
const mainNav = document.querySelector("#mainNav");

const homeBtn = document.querySelector(".homeBtn");
const libraryBtn = document.querySelector(".libraryBtn");
const newBookBtn = document.querySelector(".newBookBtn");

// provided html element structure for the content section
const newBookForm = "<div id='form' class='grid-container'><form id='submitBook' action='' method='post'><label for='title'>what’s the books title?</label><input id='title' type='text' name='title' placeholder='What's the books title?' required><label for='author'>who is the author?</label><input id='author' type='text' name='author' placeholder='Who is the author?' required><label for='pages'>how many pages to read?</label><input id='pages' type='number' name='pages' min='1' placeholder='How many pages?' required><label for='read'>did you read it already?</label><input id='read' type='checkbox' name='finished'><label for='addBookCover'>what’s the books cover?</label><button id='addBookCover' name='addBookCover'>+</button><button id='submitBook-btn' type='submit'>Add book</button></form></div>";
const libraryList = "<ul><li>book1</li><li>book2</li><li>book3</li></ul>";
const homeScreen = "<h1>Home</h1>";


// Event Listeners
homeBtn.addEventListener("click", () => {
    changeContent(homeScreen);
})

newBookBtn.addEventListener("click", () => {
    changeContent(newBookForm);
})

libraryBtn.addEventListener("click", () => {
    changeContent(libraryList);
})

// function appendElements(element, innerHTML) {
function appendElements(contentToAdd) {
    // element must be a string when provided!
    // creating container as a dump element, which will be deleted every time the removeChild function is called
    content.innerHTML = '<div id="content-container"></div>';
    const contentContainer = document.querySelector("#content-container");

    // new element to be added to the DOM
    contentContainer.innerHTML = contentToAdd;
}

function removeElements() {
    content.removeChild(document.querySelector("#content-container"));
}

function changeContent(contentToAdd) {
    // remove all elements from content section
    removeElements();

    // append new elements to content section
    appendElements(contentToAdd);
}
