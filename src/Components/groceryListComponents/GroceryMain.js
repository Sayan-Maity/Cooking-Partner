import React, { useState } from "react";
import Header from "./Header";
import InputForm from "./InputForm";
import ToBuyList from "./ToBuyList";
import { Link } from "react-router-dom";

function GroceryMain() {
  const [text, setText] = useState("");

  return (
    <div>
      <div className="font-fancy  px-16 py-6 font-body  bg-gray-200 min-h-screen">
        <main className="roundedpx-16 py-16 px-10 bg-white container text-center mx-auto w-4/5">
          <Header />
          <InputForm setText={setText} />
          <ToBuyList text={text} setText={setText} />
          <div className="bottom flex justify-center mt-5">
            <Link to="/">
              <button
                className="bg-transparent hover:bg-pink-200 text-pink-300 font-semibold hover:text-white py-1 px-4 border border-pink-400 hover:border-transparent rounded mt-10
              "
              >
                Back
              </button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

export default GroceryMain;
