import { Link } from "react-router-dom";

function Book({title, author, link}) {
  return (
    <div>
      <Link to={link}>
        <div className="book-box d-flex flex-column justify-content-center rounded p-3">
          <p className="lead"> {title.slice(0, 40)}</p>
          <p className="">{author}</p>
        </div>
      </Link>
    </div>
  );
}
export default Book
