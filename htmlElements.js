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
// const libraryList = "<ul class='bookList'><li class='bookCard'>book1</li><li class='bookCard'>book2</li><li class='bookCard'>book3</li></ul>";
const homeScreen = "<div class='welcome-note'><div class='banner'></div><span>hello,</span><span>username</span><div class='horizontalDivider'></div></div>";
const scrollBox = document.querySelector(".scroll-box");
// const contentContainer = document.querySelector("#contentContainer");



// book card btns
const bookBtns = document.querySelectorAll(".read-btn");


// Event Listeners
homeBtn.addEventListener("click", () => {
    const contentContainer = document.querySelector("#contentContainer");
    // loadPage(contentContainer, homeScreen);
    createContentContainer(homeScreen);
    navbar.classList.add("homeNavbar");
})

libraryBtn.addEventListener("click", () => {
    const contentContainer = document.querySelector("#contentContainer");
    // loadPage(contentContainer, createLibrary());
    createContentContainer(createLibrary());
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






// ======================================================
// ======================================================
// new functions 
// ======================================================
// ======================================================
// on page load, load starting screen aka home screen
window.onload = () => {
    createContentContainer(homeScreen);
    navbar.classList.add("homeNavbar");
}

// create contentContainer div
function createContentContainer(contentToLoad){
    clearContent(contentContainer);
    const newContent = document.createElement("div");
    newContent.setAttribute("id", "contentContainer");
    newContent.innerHTML = appendContent(contentToLoad);
    scrollBox.append(newContent);
};
// append custom content to div
function appendContent(screenToLoad) {
    return screenToLoad;
};

function clearContent(contentToRemove){
    contentToRemove.remove();
};


function createLibrary(){
    let liElements = "";

    for(i=0; i<library.length; i++) {
        if(library.read === true){
            let liElem = '<li class="bookCard"><div><img class="bookCover" src='+library[i].cover+' alt="book cover"></div><div class="bookInfo"><div class="author-and-title"><h2>'+library[i].title+'</h2><h3>'+library[i].author+'</h3></div><div class="book-pages"><span>'+library[i].pages+'</span><span>pages</span></div><div><button class="delete-btn book-btn"><span class="material-symbols-outlined">delete</span></button><button class="read-btn book-btn"><span class="material-symbols-outlined">done</span></button></div></div></li>';
            liElements += liElem;
        }else {
            let liElem = '<li class="bookCard"><div><img class="bookCover" src='+library[i].cover+' alt="book cover"></div><div class="bookInfo"><div class="author-and-title"><h2>'+library[i].title+'</h2><h3>'+library[i].author+'</h3></div><div class="book-pages"><span>'+library[i].pages+'</span><span>pages</span></div><div><button class="delete-btn book-btn"><span class="material-symbols-outlined">delete</span></button><button class="read-btn book-btn"><span class="material-symbols-outlined">auto_stories</span></button></div></div></li>';
            liElements += liElem;
        }
    }

    return '<ul class="bookList">' + liElements + '</ul>';
}