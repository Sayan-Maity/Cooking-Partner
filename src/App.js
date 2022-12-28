import React from "react";
import RecipeIdea from "./Components/ideaComponents/RecipeIdea";
import "./App.css";
import MealMain from "./Components/searchComponents/MealMain";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GroceryMain from "./Components/groceryListComponents/GroceryMain";

export const App = () => {
  return (
    <div>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/idea" element={<RecipeIdea />} />
            <Route path="/carolies" element={<MealMain />} />
            <Route path="/grocerylist" element={<GroceryMain />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
