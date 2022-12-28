import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";

const API_KEY = process.env.REACT_APP_API_KEY;

const RecipeIdea = () => {
  const [results, setResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const ref = useRef();

  const handleRef = () => {
    setSearchQuery(
      results.filter((result) =>
        result.title.toLowerCase().includes(ref.current.value)
      )
    );
  };

  useEffect(() => {
    const fetchDatas = async () => {
      if (results.length === 0) {
        const datas = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`,
          {
            params: {
              cuisine:
                "Japanese, Italian, Korean, Mexican, American, French, Chinese, Greek, German, British,Thai, Vietnamese",
              number: 30,
            },
          }
        );

        setResult(datas.data.results);
      }
    };
    fetchDatas();
  }, [results]);

  return (
    <div className="font-fancy  px-16 py-6 font-body  bg-gray-200 min-h-screen">
      <main className="roundedpx-16 py-16 px-10 bg-white">
        <div className="search flex justify-center">
          <form>
            <label className="text-gray-800 text-3xl ">
              Get some ideas of today's dinner!
            </label>
            <input
              className="block shadow-md rounded px-2 pt-2 pb-2 mb-6 mt-6 container mx-auto"
              type="text"
              ref={ref}
              onChange={handleRef}
              placeholder="Type your favorite meal"
            />
          </form>
        </div>
        <div className="container mx-auto ">
          <div className=" grid grid-cols-2 gap-6">
            {searchQuery.map((result) => (
              <>
                <RecipeCard result={result} />
              </>
            ))}
          </div>
        </div>
        <div className="bottom flex justify-center mt-5">
          <Link to="/">
            <button className="bg-transparent hover:bg-pink-200 text-pink-300 font-semibold hover:text-white py-1 px-4 border border-pink-400 hover:border-transparent rounded ">
              Back
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default RecipeIdea;
