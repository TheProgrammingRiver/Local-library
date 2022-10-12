function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let booksBorrowed = books.filter(
    (book) => book.borrows[0].returned === false
  );
  return booksBorrowed.length;
}

function getMostCommonGenres(books) {
  let genres = [];
  books.forEach((book) => {
    let genre = genres.find((genre) => genre.name === book.genre);
    if (genre) {
      genre.count += 1;
    } else {
      genres.push({ name: book.genre, count: 1 });
    }
  });
  return genres
    .sort((genreA, genreB) => genreB.count - genreA.count)
    .slice(0, 5);
}

function getMostPopularBooks(books) {
  let popularBooks = [];
  books.forEach((book) => {
    let popularBook = popularBooks.find(
      (popularBook) => popularBook.name === book.title
    );
    if (popularBook) {
      popularBook.count += book.borrows.length;
    } else {
      popularBooks.push({ name: book.title, count: book.borrows.length });
    }
  });
  return popularBooks
    .sort((bookA, bookB) => bookB.count - bookA.count)
    .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let popularAuthors = [];
  books.forEach((book) => {
    let author = authors.find((author) => author.id === book.authorId);
    let popularAuthor = popularAuthors.find(
      (popularAuthor) =>
        popularAuthor.name === `${author.name.first} ${author.name.last}`
    );
    if (popularAuthor) {
      popularAuthor.count += book.borrows.length;
    } else {
      popularAuthors.push({
        name: `${author.name.first} ${author.name.last}`,
        count: book.borrows.length,
      });
    }
  });
  return popularAuthors
    .sort((authorA, authorB) => authorB.count - authorA.count)
    .slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
