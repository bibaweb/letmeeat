import React, { useEffect, useState } from 'react';
import '../App.css';
import Recipe from './Recipe';

function App() {
  const APP_ID = '3081082d';
  const APP_KEY = '6a9b68deb5fcaf325263757bfefa0b8f';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
  };
  
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };






  return (
    <div className="page">
      <section className="recipes">
        <h1 className="recipes__title">Recipes for today</h1>
        <form onSubmit={getSearch} className="recipes__form">
          <div className="recipes__search">
            <input
              className="recipes__search-bar"
              value={search}
              onChange={updateSearch}
              type="text"
            />
            <button className="recipes__button" type="submit">
              Search recipes
            </button>
          </div>
        </form>
        <ul className="recipes__list">
          {recipes.map((recipe, i) => (
            <Recipe recipe={recipe.recipe} key={i} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
