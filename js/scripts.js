
// let myLibrary = [
//   {
//     id: 0,
//     title: "A Game of Thrones ",
//     author: "George R. R. Martin",
//     pages: "694",
//     read: true,
//   },
// ];


myLibrary = JSON.parse(localStorage.getItem("myLibrary") || "[]");
// console.log(myLibrary)

function Book(id, title, author, pages, read) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title) {
  myLibrary.push(title);

  // localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function displayBooks() {
  var books = "";

  myLibrary.forEach(function (book) {
    books += `<div class="m-2 card " id="${book.id}" >
     
      <span>${book.title} </span>
      <span>${book.author} </span>
      <span>${book.pages} pages</span>
      <span><div class="form-check form-switch"><input type="checkbox"  class="form-check-input big-checkbox"  id="read" name="read" class="read" ${
        book.read == "true" ? "checked" : ""
      } onclick="OnChangeCheckbox (this, ${book.id})"> Read  </span></div>
      <button type="button" class="btn mb-2 btn-secondary" onclick="removeCard(${
        book.id
      })">Remove</button>
    </div> `;
   
  });

 
  document.getElementById("container").innerHTML = books;
}

displayBooks();

// counter for id property in Array
function makeCounter() {
  var i = Math.floor(Math.random() * 100);
  return function () {
    return i++;
  };
}
var id = makeCounter();

function removeCard(id) {
  myLibrary = myLibrary.filter((x) => {
    return x.id != id;
  });
  // console.log(myLibrary);
  displayBooks();
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function logSubmit(event) {
  // console.log(myLibrary);
  console.log(readform.value);
  let newBook = new Book(
    id(),
    title.value,
    author.value,
    pages.value,
    readform.value,
  );
  console.log(myLibrary);
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

// on change of read checkbox change value of read in array
function OnChangeCheckbox(checkbox, id) {
  objIndex = myLibrary.findIndex((obj) => obj.id == id);
  if (checkbox.checked) {
    // alert ("The check box is checked.");
    // console.log("Before update: ", myLibrary[objIndex])
    myLibrary[objIndex].read = "true";
    // console.log("After update: ", myLibrary[objIndex])
  } else {
    // alert("The check box is not checked.");
    // objIndex = myLibrary.findIndex((obj => obj.id == id));
    // console.log("Before update: ", myLibrary[objIndex])
    myLibrary[objIndex].read = "false";
    // console.log("After update: ", myLibrary[objIndex])
  }
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}







const form = document.getElementById("form");
const log = document.getElementById("log");
form.addEventListener("submit", logSubmit);
