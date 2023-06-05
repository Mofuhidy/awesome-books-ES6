import Book from './book.js';

const showPopWin = () => {
  const popWin = document.createElement('div');
  popWin.className = 'pop-win';
  document.querySelector('body').appendChild(popWin);

  popWin.innerHTML = `
    <div class="msg-win">
      <h4>New book successfully added</h4>
    </div>
    `;
  setTimeout(() => popWin.remove(), 2000);
};

const addNew = (e) => {
  e.preventDefault();

  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const addBooks = JSON.parse(localStorage.getItem('addBooks'));

  const mybooks = addBooks || [];

  const id = mybooks.length === 0 ? 0 : mybooks[mybooks.length - 1].id + 1;

  const book = {
    id,
    title: title.value,
    author: author.value,
  };

  mybooks.push(book);
  localStorage.setItem('addBooks', JSON.stringify(mybooks));
  Book.showBooks();
  showPopWin();
  document.querySelector('form').reset();
};

export default addNew;