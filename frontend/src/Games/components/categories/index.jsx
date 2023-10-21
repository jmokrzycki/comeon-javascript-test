import { useEffect, useState, useContext } from "react";
import GamesContext from "../../contexts/gamesContext";
import "./style.css";

const fetchData = async () => {
  const data = await fetch("http://localhost:3001/categories", {
    method: "get",
  });
  const json = await data.json();
  console.log(json);
  return json;
};

function Categories() {
  const [categories, setCategories] = useState([]);
  const { setCategoryId } = useContext(GamesContext);

  useEffect(() => {
    fetchData().then((categories) => setCategories(categories));
    console.log(categories);
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
