import React, { useState, useEffect } from "react";
import MearlRecipe from "./MearlRecipe"

export default function Meal({ meal }) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${API_KEY}&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("err");
      });
  });

  return (
    <article>
      <MearlRecipe meal={meal} imageUrl={imageUrl}/>
    </article>
  );
}
