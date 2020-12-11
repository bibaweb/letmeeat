import React from 'react';
import './App.css';

function App() {
  const APP_ID = '3081082d';
  const APP_KEY = '6a9b68deb5fcaf325263757bfefa0b8f';
  const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;


  return (
    <div className="recipes">
      <h1 className="recipes__title">Рецепты на сегодня</h1>
      <form className="recipes__search-form">
        <input className="recipes__search-bar" type="text"/>
        <button className="recipes__search-buton" type="submit"></button>
      </form>
    </div>
  );
}

export default App;
