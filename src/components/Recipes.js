import React, { Fragment } from "react";
import RecipeItem from "./RecipeItem";

const Recipes = props => {
  const { recipes } = props;
  return (
   <Fragment>

   
    <div className="card-columns" style={{backgroundColor:"#CAF1DE"}}>
     
      {recipes.map(recipe => (
        <RecipeItem
          key={Math.random() * 100}
          name={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredientLines={recipe.recipe.ingredientLines}
         
        />
      ))}
      
    </div>
    
    </Fragment>
  );
};

export default Recipes;