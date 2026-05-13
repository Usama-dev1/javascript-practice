const books = [
  {
    title: "The Pragmatic Programmer",
    authorName: "David Thomas and Andrew Hunt",
    releaseYear: 1999,
  },
  {
    title: "You Don't Know JS: Scope & Closures",
    authorName: "Kyle Simpson",
    releaseYear: 2014,
  },
  {
    title: "Clean Code",
    authorName: "Robert C. Martin",
    releaseYear: 2008,
  },
  {
    title: "Military Inc",
    authorName: "Munir Asim",
    releaseYear: 2008,
  },
];

function sortByYear(b1, b2) {
  let res = 0;
  const book1 = b1.releaseYear;
  const book2 = b2.releaseYear;
  const year = book1 - book2;
  if (year > 0) {
    return (res = 1);
  }
  if (year < 0) {
    return (res = -1);
  }
  if (year === 0) {
    return res;
  }
  return res;
}

const filteredBooks = books.filter((book) => book.releaseYear <= 2005);

filteredBooks.sort(sortByYear);
console.log(filteredBooks);
