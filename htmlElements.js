const content = document.querySelector("#contentSection");
const bottomNav = document.querySelector("#bottomNav");

const libraryBtn = document.querySelector("#libraryBtn");
const newBookBtnBtn = document.querySelector("#newBookBtn");

// provided html element structure for the content section
const newBookForm = '<form action="" method="post"><label for="author">Author</label><input id="author" type="text"></form>';


function appendElements(target, element, innerHTML) {
    // element must be a string when provided!
    const elementToCreate = document.createElement(element);
    elementToCreate.innerHTML = innerHTML;
    // elementToCreate.innerHTML = '<form action="" method="post"><label for="author">Author</label><input id="author" type="text"></form>';
    target.appendChild(elementToCreate);
}

function removeElements(element) {
    content.removeChild(element);
}

function changeContent() {
    appendElements();
    removeElements();
}

appendElements(content, "form", newBookForm);
