import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_BOOKS = gql`
  query {
    books {
      id
      title
      author
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error.message}</p>;

  return (
    <div>
      <h1>My GraphQL Books</h1>
      {data.books.map((book) => (
        <div key={book.id}>
          <strong>{book.title}</strong> by {book.author}
        </div>
      ))}
    </div>
  );
}

export default App;
