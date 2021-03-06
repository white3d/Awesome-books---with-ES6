export default class BookList {
  constructor() {
    this.bookArr = [];

    // check if books are already stored in the localStorage
    if (localStorage.getItem('books') !== null) {
      // collect array of books from local storage
      this.bookArr = JSON.parse(localStorage.getItem('books'));

      // loop through books to display them to browser
      for (let i = 0; i < this.bookArr.length; i += 1) {
        this.displayBook(this.bookArr[i].isbn);
      }
    }
  }

  addNewBook(bookAuthor, bookTitle, bookIsbn) {
    const book = {
      title: bookTitle,
      author: bookAuthor,
      isbn: bookIsbn,
    };

    this.bookArr.push(book);

    this.displayBook(book.isbn);

    localStorage.setItem('books', JSON.stringify(this.bookArr));
  }

  displayBook(isbn) {
    let book;

    // loop through books to display them to browser
    for (let i = 0; i < this.bookArr.length; i += 1) {
      if (this.bookArr[i].isbn === isbn) {
        book = this.bookArr[i];
      }
    }

    const tr = document.createElement('tr');
    tr.setAttribute('data-isbn', book.isbn);
    tr.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><td class = ""><a href="#" class = "btn btn-sm btn-danger delete">X</a></td>`;

    document.querySelector('#book-list').appendChild(tr);
  }

  removeNewBook(isbn) {
    this.bookArr = this.bookArr.filter((book) => book.isbn !== isbn);

    localStorage.setItem('books', JSON.stringify(this.bookArr));
  }
}
