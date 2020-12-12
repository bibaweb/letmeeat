import React from 'react';

const Header = ({keyword, updateKeyword, getRecipe}) => {
  return (
    <div className="header">
      <h1 className="header__title">Recipes for today</h1>
      <form onSubmit={getRecipe} className="header__form">
        <div className="header__search">
          <input
            className="header__search-bar"
            value={keyword}
            onChange={updateKeyword}
            type="text"
          />
          <button className="header__button" type="submit">
            Search recipes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Header;
