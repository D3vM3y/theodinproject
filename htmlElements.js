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
const addBookBtn = document.querySelector(".addBookBtn");

// provided html element structure for the content section
const homeScreen = "<div class='welcome-note'><div class='banner'></div><span>hello,</span><span>username</span><div class='horizontalDivider'></div></div>";
const scrollBox = document.querySelector(".scroll-box");
const addBookForm = '<form><input type="text"></input></form>';

const bookBtns = document.querySelectorAll(".read-btn");



// Event Listeners
homeBtn.addEventListener("click", () => {
    // const contentContainer = document.querySelector("#contentContainer");
    createContentContainer(homeScreen);
    navbar.classList.add("homeNavbar");
})

libraryBtn.addEventListener("click", () => {
    // const contentContainer = document.querySelector("#contentContainer");
    createContentContainer(createLibrary());
    navbar.classList.remove("homeNavbar");
})



addBookBtn.addEventListener("click", () => {
    createContentContainer(addBookForm);
    navbar.classList.remove("homeNavbar");
})








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

    if(contentToLoad === createLibrary()){
        console.log("loading library");
        createBookCardBtnEventListeners();
    }else {
        console.log("loading other screen");
    }
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


function createBookCardBtnEventListeners(){
    // book card btns
    const bookBtns = document.querySelectorAll(".read-btn");

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
}