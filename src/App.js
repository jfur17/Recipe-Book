import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  // Creates a new recipe and adds it to bottom of list
  const createRecipe = (newRecipe) =>
      setRecipes((currentRecipes) => [
          ...currentRecipes,
          newRecipe
      ]);
  //Deletes the recipe associated with the correct delete button
  const deleteRecipe = (indexToDelete) =>
        setRecipes((currentRecipes) =>
            currentRecipes.filter((recipe, index) => index !== indexToDelete)
        );

    return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList  recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate createRecipe={createRecipe}/>
    </div>
  );
}

export default App;
