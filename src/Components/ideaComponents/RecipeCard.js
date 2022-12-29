import React from "react";

const RecipeCard = ({ result }) => {
  return (
    <>
      <div
        className="content p-6 m-5 bg-gray-100 border-1 border-gray-300 drop-shadow-xl rounded-md"
        key={result.id}
      >
        <h3 className="text-orange-500 text-md mb-3 text-center h-10">
          {result.title}
        </h3>
        <div className="items-center">
          <img className="rounded m-auto" src={result.image} alt={result.id}></img>
        </div>
      </div>
    </>
  );
};

export default RecipeCard;
