const list = document.getElementById('list');
const book = document.getElementById('newBook');
const contact = document.getElementById('contact');

document.querySelector('.newBook').style.display = 'none';
document.querySelector('.contact').style.display = 'none';

list.addEventListener('click', () => {
  document.querySelector('.allBooks').style.display = 'block';
  document.querySelector('.newBook').style.display = 'none';
  document.querySelector('.contact').style.display = 'none';
});

book.addEventListener('click', () => {
  document.querySelector('.allBooks').style.display = 'none';
  document.querySelector('.newBook').style.display = 'block';
  document.querySelector('.contact').style.display = 'none';
});

contact.addEventListener('click', () => {
  document.querySelector('.allBooks').style.display = 'none';
  document.querySelector('.newBook').style.display = 'none';
  document.querySelector('.contact').style.display = 'block';
});