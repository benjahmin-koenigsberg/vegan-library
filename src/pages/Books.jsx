/** @format */

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { books, data } from "../assets/data.js";
import Book from "../components/Book.jsx";

function Books() {
  const location = useLocation();
  const { category, categories } = location.state;
  console.log(category);

  const [currentBooks, setCurrentBooks] = useState(
    [...books.find((el) => el.category === category).books]
  );


  return (
    <>
      <div>
        <Link to="/" className="text-decoration-none text-dark">
          <h1 className="display-1 text-center mt-2">Vegan Library</h1>
        </Link>
        <div className="border border-3 rounded col-lg-10 d-flex flex-column m-auto ">
          <h4 className="text-center display-5">{category}</h4>
          <hr></hr>
          <div>
            <div className="d-flex flex-wrap m-auto justify-content-center ">
              {currentBooks.map(book=>(<Book title={book.title} author={book.author} link={book.link} />))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Books;
