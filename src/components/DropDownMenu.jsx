import { Link, useNavigate } from "react-router-dom";
const navigate = useNavigate()


const DropdownMenu = ({ title, data, setCategories, categories }) => {

  return (
    <div className="dropdown d-flex justify-content-center mx-4 align-items-center rounded h5 ">
      <button
        className="genre-box p-4"
        onClick={() => {
          setCategories(data.find((el) => el.genre === title).categories);
        }}>
        {title}
      </button>
      <div className="dropdown-content">
        {categories.map((el) => (
          <>
            <div className="m-auto" >
              <Link className="rounded h5 p-2 border d-flex justify-content-center bg-secondary text-white rounded" to={"/#"}>
                {el}
              </Link>
            </div>
          </>
        ))}
        {/* <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a> */}
      </div>
    </div>
  );
};

export default DropdownMenu;
