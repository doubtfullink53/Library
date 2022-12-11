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

function addBookToLibrary() {
    myLibrary.push
}
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false)
console.log(theHobbit.info())

// modal popup for input of book 

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})