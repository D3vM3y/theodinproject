// library
let library = [
    {
        title: "a game of thrones",
        author: "George R. R. Martin",
        pages: 694,
        cover: "https://m.media-amazon.com/images/I/51RbpshZ-LL._SY445_SX342_.jpg",
        read: false,
    },
    {
        title: "just like you",
        author: "nick hornby",
        pages: 294,
        cover: "https://m.media-amazon.com/images/I/71GFfaWbcZL._SY522_.jpg",
        read: false,
    }
];

// book object
function book(title, author, pages, cover, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.cover = cover;
    this.read = read;
}


const content = document.querySelector("#contentSection");
const navbar = document.querySelector(".navbar");

const homeBtn = document.querySelector(".homeBtn");
const libraryBtn = document.querySelector(".libraryBtn");
// const newBookBtn = document.querySelector(".newBookBtn");

// provided html element structure for the content section
// const newBookForm = "<div id='form' class='grid-container'><form id='submitBook' action='' method='post'><label for='title'>what’s the books title?</label><input id='title' type='text' name='title' placeholder='What's the books title?' required><label for='author'>who is the author?</label><input id='author' type='text' name='author' placeholder='Who is the author?' required><label for='pages'>how many pages to read?</label><input id='pages' type='number' name='pages' min='1' placeholder='How many pages?' required><label for='read'>did you read it already?</label><input id='read' type='checkbox' name='finished'><label for='addBookCover'>what’s the books cover?</label><button id='addBookCover' name='addBookCover'>+</button><button id='submitBook-btn' type='submit'>Add book</button></form></div>";
const libraryList = "<ul class='bookList'><li class='bookCard'>book1</li><li class='bookCard'>book2</li><li class='bookCard'>book3</li></ul>";
const homeScreen = "<div class='welcome-note'><div class='banner'></div><span>hello,</span><span>username</span><div class='horizontalDivider'></div></div>";
const scrollBox = document.querySelector(".scroll-box");




// book card btns
const bookBtns = document.querySelectorAll(".read-btn");


// Event Listeners
homeBtn.addEventListener("click", () => {
    const contentContainer = document.querySelector("#contentContainer");
    loadPage(contentContainer, homeScreen);
    navbar.classList.add("homeNavbar");
})

libraryBtn.addEventListener("click", () => {
    const contentContainer = document.querySelector("#contentContainer");
    loadPage(contentContainer, libraryList);
    navbar.classList.remove("homeNavbar");
})



// newBookBtn.addEventListener("click", () => {
//     changeContent(newBookForm);
// })

bookBtns.forEach(btn => {
    btn.addEventListener("click", (event) => {
        // on click change icon and color
        if(btn.classList.contains("done")){
            console.log("yellow");
            btn.classList.remove("done");
            btn.removeChild(btn.firstChild);
            btn.innerHTML = "<span class='material-symbols-outlined'>auto_stories</span>";
            btn.setAttribute("style", "background-color: #FFCA3C;");
        }else {
            console.log("green");
            btn.classList.add("done")
            btn.removeChild(btn.firstChild);
            btn.innerHTML = "<span class='material-symbols-outlined'>done</span>";
            btn.setAttribute("style", "background-color: #9CE5B0;");
        }
    })
});


// helper functions 
function loadPage(target, contentToLoad) {
    // remove current content inside the scroll-box
    removeContent(target);

    // load content related to clicked button
    loadContent(target, contentToLoad);
}

function loadContent(target, contentToLoad) {
    const newContent = document.createElement("div");
    newContent.setAttribute("id", "contentContainer");
    newContent.innerHTML = contentToLoad;
    scrollBox.append(newContent);

}

function removeContent(contentToRemove) {
    contentToRemove.remove();
}


// // function appendElements(element, innerHTML) {
// function appendElements(contentToAdd) {
//     // element must be a string when provided!
//     // creating container as a dump element, which will be deleted every time the removeChild function is called
//     content.innerHTML = '<div id="content-container"></div>';
//     const contentContainer = document.querySelector("#content-container");

//     // new element to be added to the DOM
//     contentContainer.innerHTML = contentToAdd;
// }

// function removeElements(target) {
//     // content.removeChild(document.querySelector("#content-container"));
//     target.removeChild(document.querySelector("#content-container"));
// }

// function changeContent(contentToAdd) {
//     // remove all elements from content section
//     removeElements(target);

//     // append new elements to content section
//     appendElements(contentToAdd);
// }

