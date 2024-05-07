/** @format */

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { data } from "../assets/data.js";
import CategoryBox from "../components/CategoryBox.jsx";

function Categories() {
  const location = useLocation();
  const { genre, index } = location.state;
  // const categoryArray = data.find((el) => el.genre === genre).categories;
  const categoryArray = data[index].categories;
  const [categories, setCategories] = useState(categoryArray);
  const [currentGenre, setCurrentGenre] = useState(data[index].genre);
  const [currentIndex, setCurrentIndex] = useState(index);
  console.log(categoryArray);
  // const genres = data.map((el) => el.genre);
  useEffect(() => {}, [currentGenre, categories]);

  return (
    <>
      <div>
        <Link to="/" className="text-decoration-none text-dark">
          <h1 className="display-1 text-center mt-2">Vegan Library</h1>
        </Link>
        <div className="border border-3 rounded col-lg-10 d-flex flex-column m-auto ">
          <div className="d-flex align-items-center justify-content-center gap-5">
            <div
              className="display-1"
              onClick={() => {
                setCurrentIndex(currentIndex - 1);
                setCurrentGenre(data[currentIndex].genre);
                setCategories(data[currentIndex].categories);
              }}>
              ⭠
            </div>
            <h2 className="display-4">Genres</h2>
            <div
              className="display-1"
              onClick={() => {
                setCurrentIndex(currentIndex + 1);
                setCurrentGenre(data[currentIndex].genre);
                setCategories(data[currentIndex].categories);
              }}>
              ⭢
            </div>
          </div>
          <hr></hr>
          <h4 className="text-center display-5">{currentGenre}</h4>
          <hr></hr>
          <div>
            <div className="d-flex flex-wrap m-auto justify-content-center ">
              {categories.map((el) => (
                <Link
                  state={{ category: el, categories: categories }}
                  to="/books">
                  <CategoryBox title={el} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
