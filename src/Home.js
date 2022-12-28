import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://source.unsplash.com/random/?food")`,
      }}
      className="h-screen bg-cover relative backdrop-blur-lg"
    >
      <main className="font-fancy w-3/5  mx-auto justify-center block  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  rounded-md ">
        <div className="justify-center items-center bg-slate-100/80 rounded-md p-24">
          <h1 className="text-5xl mx-auto mb-7 text-center text-rose-500">
            Your Cooking Partner
          </h1>
          <ul className="w-auto text-center text-stone-700 text-2xl">
            <li className="my-3 cursor-pointer hover:text-stone-500">
              <Link to="/idea">Get some inspirations</Link>
            </li>
            <li className="my-3 cursor-pointer hover:text-stone-500">
              <Link to="/carolies">Search healthy meals</Link>
            </li>
            <li className="cursor-pointer hover:text-stone-500">
              <Link to="/grocerylist">Grocery List</Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;
