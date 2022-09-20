let awesomeBooks = [];

const awesomeBooksStorage = localStorage.getItem('awesomeBooks');

function updateLocalstorage() {
  const booksStorage = JSON.stringify(awesomeBooks);
  localStorage.setItem('awesomeBooks', booksStorage);
}

if (awesomeBooksStorage === null) {
  updateLocalstorage();
} else {
  awesomeBooks = JSON.parse(awesomeBooksStorage);
}

function showBooks() {
  const bookS = document.querySelector('.books');
  bookS.innerHTML = '';

  for (let i = 0; i < awesomeBooks.length; i += 1) {
    const book = document.createElement('div');
    book.classList.add('book');

    const bookH2 = document.createElement('h2');
    bookH2.classList.add('book__title');
    bookH2.textContent = awesomeBooks[i].title;

    const bookH3 = document.createElement('h3');
    bookH3.classList.add('book__author');
    bookH3.textContent = awesomeBooks[i].author;

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('book__removeBtn');
    removeBtn.textContent = 'Remove';
    removeBtn.setAttribute('onclick', `removeBook(${i})`);

    const hr = document.createElement('hr');

    book.appendChild(bookH2);
    book.appendChild(bookH3);
    book.appendChild(removeBtn);
    book.appendChild(hr);

    bookS.appendChild(book);
  }
}

const addBtn = document.getElementById('addBtn');
const alertMsg = document.getElementById('alertMsg');

function removeAlert() {
  setTimeout(() => {
    alertMsg.style.display = 'none';
    alertMsg.innerHTML = '';
  }, 3000);
}

addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const bookTitle = document.getElementById('bookTitle');
  const bookAuthor = document.getElementById('bookAuthor');

  if (bookTitle.value && bookAuthor.value) {
    const newBook = {
      title: bookTitle.value,
      author: bookAuthor.value,
    };
    awesomeBooks.push(newBook);
    bookTitle.value = '';
    bookAuthor.value = '';
    showBooks();
  } else {
    alertMsg.style.display = 'block';
    alertMsg.innerHTML = 'Missing data, add Title and Author';
    removeAlert();
  }
  updateLocalstorage();
});

/* eslint-disable */
function removeBook(i) {
  awesomeBooks.splice(i, 1);
  updateLocalstorage();
  showBooks();
}
/* eslint-enable */
