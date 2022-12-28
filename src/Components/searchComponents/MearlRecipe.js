import React from 'react'

const MearlRecipe = ({meal, imageUrl}) => {
  return (
    <div className=" bg-white rounded-xl shadow-lg  p-6 items-center  mt-10 min-h-200 mx-2">
        <h1 className="my-5 text-lg h-20 text-center items-center text-orange-500 font-bold">
          {meal.title}
        </h1>
        <img
          className="rounded-sm  my-3 items-center"
          src={imageUrl}
          alt="recipe"
        />
        <ul className="text-gray-700 w-1/2 m-auto text-md h-50">
          <li className="my-2 w-auto">
            <p className="font-bold">Preparation time</p>
            <p className="text-gray-600">{meal.readyInMinutes} minuets</p>
          </li>
          <li className="my-2 w-auto">
            <p className="font-bold">Number of servings</p>
            <p className="text-gray-600">{meal.servings} minuets</p>
          </li>
        </ul>
        <button className="bg-pink-200 hover:bg-pink-200 text-white hover:text-orange-500 font-bold py-1 px-4 rounded mt-4">
          <a className="text-center" href={meal.sourceUrl}>
            Go to recipe
          </a>
        </button>
      </div>
  )
}

export default MearlRecipe