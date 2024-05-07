/** @format */

import { useState, useEffect } from "react";
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import { data } from "./assets/data.js";
import Genres from "./pages/Genres.jsx";
import Categories from "./pages/Categories.jsx";
import Books from "./pages/Books.jsx";

function App() {
  const genres = data.map((el) => el.genre);
  console.log(genres);
  const [dropDownMenu, setDropDownMenu] = useState(true);
  const [categories, setCategories] = useState(genres);

  useEffect(() => {}, [categories]);



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Genres categories={categories} setCategories={setCategories} data={data}/>} />
        <Route path="/categories" element={<Categories />} />
        <Route path="books" element={<Books />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
