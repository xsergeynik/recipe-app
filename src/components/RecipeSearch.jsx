import React, { useState } from 'react';

function RecipeSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterResults(query, searchResults);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      setFilteredResults([]);
    } else {
      // Perform search logic
      const results = [
        { id: 1, title: 'Рецепт 1', ingredients: ['Ингредиент 1', 'Ингредиент 2', 'Ингредиент 3'] },
        { id: 2, title: 'Рецепт 2', ingredients: ['Ингредиент 4', 'Ингредиент 5', 'Ингредиент 6'] },
        { id: 3, title: 'Рецепт 3', ingredients: ['Ингредиент 7', 'Ингредиент 8', 'Ингредиент 9'] },
      ];
      setSearchResults(results);
      filterResults(searchQuery, results);
    }
  };

  const filterResults = (query, results) => {
    const filtered = results.map((result) => {
      const letters = result.title.split('');
      const highlightedLetters = letters.map((letter) =>
        query.toLowerCase().includes(letter.toLowerCase()) ? 'active' : ''
      );
      return { ...result, highlightedLetters };
    });
    setFilteredResults(filtered);
  };

  const handleInputFocus = () => {
    if (searchQuery.trim() === '') {
      setFilteredResults([]);
    } else {
      filterResults(searchQuery, searchResults);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          onFocus={handleInputFocus}
          className={searchQuery.length > 0 ? 'active' : ''}
          placeholder="Введите ключевые слова для поиска..."
        />
        <button type="submit">Найти</button>
      </form>

      <ul>
        {filteredResults.map((result) => (
          <li key={result.id}>
            <h3>
              {result.title.split('').map((letter, index) => (
                <span key={index} className={result.highlightedLetters[index]}>
                  {letter}
                </span>
              ))}
            </h3>
            <ul>
              {result.ingredients.map((ingredient) => (
                <li key={ingredient}>
																	{ingredient}
																	</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeSearch;
