function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) =>
    accountA.name.last > accountB.name.last ? 1 : -1
  );
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  total = 0;
  books.map((book) =>
    book.borrows.forEach((borrow) => {
      if (borrow.id === account.id) {
        total += 1;
      }
    })
  );
  console.log(total);
  return total;
}

function findAuthorByAuthorID(authors, authorId) {
  let found = authors.find((author) => author.id === authorId);
  return found;
}

function getBooksPossessedByAccount(account, books, authors) {
  const possessedBooks = [];
  books.forEach((book) =>
    book.borrows.forEach((borrow) => {
      if (borrow.id === account.id && borrow.returned === false) {
        possessedBooks.push(book);
      }
    })
  );
  possessedBooks.forEach(
    (book) => (book.author = findAuthorByAuthorID(authors, book.authorId))
  );
  return possessedBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};



