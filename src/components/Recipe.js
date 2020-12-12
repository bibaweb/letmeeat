import React from 'react';

const Recipe = ({ recipe }) => {
  return (
    <li className="recipe">
      {recipe.dietLabels.length === 0 ? <p className="recipe__label recipe__label_hidden"></p> : <p className="recipe__label">{recipe.dietLabels[0]}</p>}
      <img src={recipe.image} alt={recipe.label} className="recipe__img" />
      <h2 className="recipe__title">{recipe.label}</h2>
      <p className="recipe__calories">{Math.floor(recipe.calories)} calories</p>
      <ul className="recipe__ingredient-list">Ingredients
        {recipe.ingredients.map(ingredient => (
          <li className="recipe__ingredient">{ingredient.text}</li>
        ))}
      </ul>
      <a href={recipe.url} className="recipe__link" target="_blank">
        Source
      </a>
    </li>
  );
};

export default Recipe;

// title = label, время приготовления = totalTime
// ingredients[]
//calories image
