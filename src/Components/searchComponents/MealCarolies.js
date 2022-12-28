import React from "react";

const MealCarolies = ({ nutrients }) => {
  return (
    <>
      <ul className="text-gray-700 flex justify-around bg-pink-200 text-sm p-5 rounded-md m-auto w-2/4">
        <li>
          <p className="font-semibold">Calories</p>
          <p>{nutrients.calories}</p>
        </li>
        <li>
          <p className="font-semibold">Carbohydrates</p>
          <p>{nutrients.carbohydrates}</p>
        </li>
        <li>
          <p className="font-semibold">Fat</p>
          <p>{nutrients.fat}</p>
        </li>
        <li>
          <p className="font-semibold">Protein</p>
          <p>{nutrients.protein}</p>
        </li>
      </ul>
    </>
  );
};

export default MealCarolies;
