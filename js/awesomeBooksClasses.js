let awesomeBooks = [];

const addBtn = document.getElementById('addBtn');
const alertMsg = document.getElementById('alertMsg');
const bookS = document.querySelector('.books');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static showBooks() {
    const awesomeBooksStorage = localStorage.getItem('awesomeBooks');
    bookS.innerHTML = '';

    if (awesomeBooksStorage === null) {
      awesomeBooks = [];
    } else {
      awesomeBooks = JSON.parse(awesomeBooksStorage);
    }
    for (let i = 0; i < awesomeBooks.length; i += 1) {
      awesomeBooks[i].index = [i];
      Book.addBookToList(awesomeBooks[i]);
    }
  }

  static addBookToList(book) {
    const addbook = document.createElement('div');
    addbook.classList.add('book');
    addbook.innerHTML = `
    <div class="book">
      <div class="book__content">"${book.title}" by ${book.author}</div>
      <div class="book__remove">
        <button value='${book.index}' class="book__removeBtn" >Remove</button>
      </div>
    </div>
   `;
    bookS.appendChild(addbook);
  }

  static showAlert(message, className) {
    alertMsg.style.display = className;
    alertMsg.innerHTML = message;
    Book.removeAlert();
  }

  static removeAlert() {
    setTimeout(() => {
      alertMsg.style.display = 'none';
      alertMsg.innerHTML = '';
    }, 3000);
  }

  static addBook(book) {
    awesomeBooks.push(book);
    localStorage.setItem('awesomeBooks', JSON.stringify(awesomeBooks));
    Book.showBooks();
  }

  static removeBook(delbook) {
    awesomeBooks.splice(delbook.value, 1);
    localStorage.setItem('awesomeBooks', JSON.stringify(awesomeBooks));
    Book.showBooks();
  }
}

document.addEventListener('DOMContentLoaded', Book.showBooks);

addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const bookTitle = document.getElementById('bookTitle');
  const bookAuthor = document.getElementById('bookAuthor');

  if (bookTitle.value && bookAuthor.value) {
    const book = new Book(bookTitle.value, bookAuthor.value);
    Book.addBook(book);
    bookTitle.value = '';
    bookAuthor.value = '';
    Book.showAlert('Book added successfully!', 'block');
  } else {
    Book.showAlert('Missing data, add Title and Author', 'block');
  }
});

bookS.addEventListener('click', (e) => {
  e.preventDefault();
  Book.removeBook(e.target);
});
