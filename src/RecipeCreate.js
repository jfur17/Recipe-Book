import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
  // Initial state of empty fields
  const initialFormState = {
      name: "",
      cuisine:"",
      photo:"",
      ingredients:"",
      preparation:"",
    };

  const [recipe, setRecipe] = useState(initialFormState);
  //Updates the recipes with the inputed data
  const handleChange = ({ target }) => {
    setRecipe({
      ...recipe,
      [target.name]: target.value,
    });
  };
  //creates the new Recipe and resets the fields to the initial state
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(recipe);
    setRecipe(initialFormState);
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
        <tr>
          <td><input
              name="name"
              id="name"
              value={recipe.name}
              placeholder="Name"
              onChange={handleChange}
              required={true}
          ></input></td>
          <td><input
              name="cuisine"
              id="cuisine"
              value={recipe.cuisine}
              placeholder="Cuisine"
              onChange={handleChange}
              required={true}
          ></input></td>
          <td><input
              name="photo"
              id="photo"
              value={recipe.photo}
              placeholder="Photo URL"
              onChange={handleChange}
              required={true}
          ></input></td>
          <td><textarea
              name="ingredients"
              id="ingredients"
              value={recipe.ingredients}
              placeholder="Ingredients"
              onChange={handleChange}
              required={true}
              rows={3}
          ></textarea></td>
          <td><textarea
              name="preparation"
              id="preparation"
              value={recipe.preparation}
              placeholder="Preparation"
              onChange={handleChange}
              required={true}
              rows={3}
          ></textarea></td>
          <td>
          <button type="submit">Create</button>
          </td>
        </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
