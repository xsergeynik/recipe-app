import React from 'react';

function SearchResult({ results }) {
  return (
    <div>
      <h2>Результаты поиска:</h2>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResult;