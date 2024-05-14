import React from "react";

function RecipeList({recipes, deleteRecipe}) {
  //Individual recipe structure
  function Recipe({ recipe, index }) {
    return (
        <tr className="recipe">
          <td>{recipe.name}</td>
          <td>{recipe.cuisine}</td>
          <td><img src={recipe.photo} alt="Food"/></td>
          <td><p>{recipe.ingredients}</p></td>
          <td><p>{recipe.preparation}</p></td>
          <td>
            <button name="delete" onClick={() => deleteRecipe(index)}>Delete</button>
          </td>
        </tr>
    );
  }

//returns the recipe list that displays all recipes in the recipes object
  return (
      <div className="recipe-list">
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Cuisine</th>
          <th>Photo</th>
          <th>Ingredients</th>
          <th>Preparation</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {recipes.map((recipe, index) => (
            <Recipe
                key={index}
                recipe={recipe}
                index={index}
            />
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
