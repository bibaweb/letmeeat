import React from 'react';

const Search = ({keyword, updateKeyword, getRecipe}) => {
  return (
    <div className="search">
      <h1 className="search__title">Recipes for today</h1>
      <form onSubmit={getRecipe} className="search__form">
        <div className="search__search">
          <input
            className="search__search-bar"
            value={keyword}
            onChange={updateKeyword}
            type="text"
          />
          <button className="search__button" type="submit">
            Search recipes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
