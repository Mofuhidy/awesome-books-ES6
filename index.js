import Book from './modules/book.js';
import navLinks from './modules/showNav.js';
import addNew from './modules/addBook.js';
import showTime from './modules/timeDate.js';

window.onload = () => {
  Book.showBooks();
  document.querySelector('form').addEventListener('submit', addNew);
  showTime();
  navLinks();
};
