type Book = {
    id: string;
    title: string;
    author: string;
  };
  
  const books: Book[] = [
    { id: '1', title: '1984', author: 'George Orwell' },
    { id: '2', title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  ];
  
  export const booksResolver = {
    Query: {
      books: () => books,
    },
  };
  