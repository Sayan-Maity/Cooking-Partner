import React from "react";
import Meal from "./Meal";
import MealCarolies from "./MealCarolies";

export default function MealList({ mealData }) {
  const nutrients = mealData.nutrients;

  return (
    <main>
     <br></br>

      <MealCarolies nutrients={nutrients} />

      <section className="container flex w-full">
        {mealData.meals.map((meal) => {
          console.log(mealData);
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  );
}
