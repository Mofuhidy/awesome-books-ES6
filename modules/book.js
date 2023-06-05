export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static showBooks = () => {
    const container = document.querySelector('.container');
    const addBooks = JSON.parse(localStorage.getItem('addBooks'));
    const mybooks = addBooks || [];

    container.innerHTML = '';

    mybooks.forEach((b, index) => {
      container.innerHTML += `
      <ul class="book-ul">
        <li class="book-li">
          <h3>"${b.title}"
          by
          ${b.author}</h3>
          <button class='rmBtn btn' id='${index}'>Remove</button>
        </li>
      </ul>
    `;
    });

    const remove = document.querySelectorAll('.rmBtn');
    remove.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        Book.removeBook(index);
      });
    });

    if (mybooks.length === 0) {
      container.style.background = 'none';
      container.innerHTML = `<p>There is no books yet</p>
      <p>
      go to Add new tab and add a book !
      </p>
      
      `;
    } else {
      container.style.background = '#f8f1f1';
    }
  }

  static removeBook = (id) => {
    const addBooks = JSON.parse(localStorage.getItem('addBooks'));
    addBooks.splice(id, 1);
    localStorage.setItem('addBooks', JSON.stringify(addBooks));
    Book.showBooks();
  }
}