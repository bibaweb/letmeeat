import React, { useEffect, useState } from 'react';
import Header from './Header';
import Recipe from './Recipe';

function App() {
  const APP_ID = '3081082d';
  const APP_KEY = '6a9b68deb5fcaf325263757bfefa0b8f';

  const [recipes, setRecipes] = useState([]);
  console.log(recipes[0])
  const [keyword, setKeyword] = useState('');
  const [query, setQuery] = useState('');
  const updateKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const getRecipe = (e) => {
    e.preventDefault();
    setQuery(keyword);
    setKeyword('');
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
      <Header
        keyword={keyword}
        updateKeyword={updateKeyword}
        getRecipe={getRecipe}
      />
      <section className="recipes">
        <ul className="recipes__list">
          {recipes.map((recipe) => (
              <Recipe recipe={recipe.recipe} key={recipe.recipe.calories}/>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
