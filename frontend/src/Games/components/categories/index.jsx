import { useEffect, useState, useContext } from "react";
import GamesContext from "../../contexts/gamesContext";
import { DOMAIN } from "../../../config";
import "./styles.scss";

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

  const handleCategoryClick = (categoryId) => {
    setCategoryId(categoryId);
  };

  return (
    <nav className="categories" aria-label="Categories">
      <h2 className="categories__title">Categories</h2>
      <ul className="categories__list">
        {categories.map((category) => (
          <li className="categories__category" key={category.id} onClick={() => handleCategoryClick(category.id)} role="button" tabIndex={0}>
            {category.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Categories;
