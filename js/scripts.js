
let myLibrary = [
  {
    id: 0,
    title: "A Game of Thrones ",
    author: "George R. R. Martin",
    pages: "694",
    read: true,
  },
];
  // myLibrary = JSON.parse(localStorage.getItem("myLibrary") || "[]");

function Book(id = myLibrary[0].id , title, author, pages, read ) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title) {
  myLibrary.push(title);
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function displayBooks() {
  var books = "";
  myLibrary.forEach(function (book) {
    books += `<div class="m-2 card " id="${book.id}" >
     
      <span>${book.title} </span>
      <span>${book.author} </span>
      <span>${book.pages} pages</span>
      <span><input type="checkbox" id="read" name="read" class="read" ${
        book.read == true ? "checked" : "" 
      } onclick="OnChangeCheckbox (this, ${book.id})"> Read  </span>
      <button type="button" class="btn mb-2 btn-secondary" onclick="removeCard(${book.id})">Remove</button>
    </div> `;
  });

  document.getElementById("container").innerHTML = books;
}

displayBooks();

// counter for id property in Array
function makeCounter(i) {
  var i = 1;
  return function () {
    return i++;
  };
  
}
var id = makeCounter();



function removeCard(id){
  
  myLibrary = myLibrary.filter(x => {
    return x.id != id ;
  })
  console.log(myLibrary);
  displayBooks();
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function logSubmit(event) {
  
  console.log(myLibrary);
  // if no items in array do not check for read check mark

  if (myLibrary === undefined || myLibrary.length == 0) {
    var readMark = false;
    
  }else{
    readMark = read[0].checked;
  }
  
  let newBook = new Book(
    id(0),
    title.value,
    author.value,
    pages.value,
    readMark,
  );
  
  addBookToLibrary(newBook);
  displayBooks();
  
  event.preventDefault();
}

function removeBook(id) {
  myLibrary = myLibrary.filter((x) => {
    return x.id != id;
  });
  console.log(myLibrary);
  
  
}

function OnChangeCheckbox (checkbox, id) {
  objIndex = myLibrary.findIndex((obj => obj.id == id));
  if (checkbox.checked) {
      // alert ("The check box is checked.");
      
      console.log("Before update: ", myLibrary[objIndex])
      myLibrary[objIndex].read = true
      console.log("After update: ", myLibrary[objIndex])
  }
  else {
      // alert ("The check box is not checked.");
      // objIndex = myLibrary.findIndex((obj => obj.id == id));
      console.log("Before update: ", myLibrary[objIndex])
      myLibrary[objIndex].read = false
      console.log("After update: ", myLibrary[objIndex])
  }
}







const form = document.getElementById("form");
const log = document.getElementById("log");
form.addEventListener("submit", logSubmit);




