import CategoryBox from "./CategoryBox";

function GenreBox({ title, data, setCategories, categories }) {
  return (
    <>
      <div>
        <div className="genre-box d-flex justify-content-center align-items-center rounded h5 p-3">
          {title}
        </div>
      </div>
    </>
  );
}
export default GenreBox;
