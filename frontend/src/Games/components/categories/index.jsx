import { useEffect, useState, useContext } from "react";
import GamesContext from "../../contexts/gamesContext";
import { DOMAIN } from "../../../config";
import "./style.css";

const fetchData = async () => {
  const data = await fetch(`${DOMAIN}/categories`, {
    method: "get",
  });
  const json = await data.json();

  return json;
};

function Categories() {
  const [categories, setCategories] = useState([]);
  const { setCategoryId } = useContext(GamesContext);

  useEffect(() => {
    fetchData().then((categories) => setCategories(categories));
  }, []);

  return (
    <div className="categories">
      {categories.map((category) => (
        <div
          className="category"
          key={category.id}
          onClick={() => setCategoryId(category.id)}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
}

export default Categories;
