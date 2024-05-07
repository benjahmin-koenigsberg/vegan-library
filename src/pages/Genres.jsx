/** @format */

import { useState } from "react";
import { Link } from "react-router-dom";
import GenreBox from "../components/GenreBox.jsx";
import Categories from "./Categories.jsx";

function Genres({ categories, setCategories, data }) {
  const genres = data.map((el) => el.genre);

  return (
    <>
      <div>
        <h1 className="display-1 text-center mt-2">Vegan Library</h1>
        <div className="border border-3 rounded col-lg-10 d-flex flex-column m-auto ">
          <div className="d-flex align-items-center">
            {/* <img
              className="align-self-start my-auto "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8zxYwCAg474wm2vkpnNZsIQY0LqJRB6XZL2o-KbjhQA&s"
              style={{ width: "3rem", marginLeft: "4rem" }}
              onClick={() => setCategories(genres)}
            /> */}
            <h2 className="display-4 mx-auto">Genres</h2>
          </div>
          <hr></hr>
          <div>
            <div className="d-flex flex-wrap m-auto justify-content-center ">
              {categories.map((el, index) => (
                <>
                  <Link
                    className="text-decoration-none text-black"
                    to="/categories"
                    state={{ genre: el, index: index }}>
                    <GenreBox
                      title={el}
                      data={data}
                      setCategories={setCategories}
                      categories={categories}
                    />
                  </Link>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Genres;
