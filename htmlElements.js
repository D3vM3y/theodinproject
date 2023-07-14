const content = document.querySelector("#contentSection");
const bottomNav = document.querySelector("#bottomNav");

const libraryBtn = document.querySelector("#libraryBtn");
const newBookBtn = document.querySelector("#newBookBtn");

// provided html element structure for the content section
const newBookForm = '<form action="" method="post"><label for="author">Author</label><input id="author" type="text"></form>';


// Event Listeners
newBookBtn.addEventListener("click", () => {
    const innerHTML = newBookForm;
    // element must be a string when provided!
    changeContent("form", innerHTML);
})

libraryBtn.addEventListener("click", () => {
    changeContent();
})

function appendElements(element, innerHTML) {
    // element must be a string when provided!
    // creating container as a dump element, which will be deleted every time the removeChild function is called
    content.innerHTML = '<div id="content-container"></div>';
    const contentContainer = document.querySelector("#content-container");

    const elementToCreate = document.createElement(element);
    elementToCreate.innerHTML = innerHTML;

    contentContainer.appendChild(elementToCreate);
}

function removeElements() {
    content.removeChild(document.querySelector("#content-container"));
}

function changeContent(element, innerHTML) {
    // remove all elements from content section
    removeElements();

    // append new elements to content section
    appendElements(element, innerHTML);
}

// appendElements(content, "form", newBookForm);
