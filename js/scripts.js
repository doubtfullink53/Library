let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function (){
   
       return `${title} by ${author} , ${pages} pages ${read == true ? "read" : "not read yet"}`
    }
}

function addBookToLibrary(title) {
    myLibrary.push(title)
    
}
// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)
// console.log(addBookToLibrary(theHobbit))



function logSubmit(event) {
  log.textContent = `complete`;
  
  let newBook = new Book(title.value , author.value, pages.value, read[0].checked)
  addBookToLibrary(newBook)
  // console.log(newBook)
  console.log(myLibrary[0])
  event.preventDefault();
}

console.log(myLibrary)

const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementsByClassName('read');


// console.log(read)
const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('submit', logSubmit);
