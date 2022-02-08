import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import st from "./Categories.module.css";
import { loadCategory } from "../../store/catalogAction";
import { useDispatch, useSelector } from "react-redux";
import CatalogButton from "../CatalogButton/CatalogButton";
import Category from "../Category/Category";

const Categoryes = () => {
  const [hCatatalog, setHCatalog] = useState(false);
  const dispatch = useDispatch();
  const category = useSelector(({ category }) =>
    category.category.filter((c) => c.level === 1)
  );

  useEffect(() => {
    dispatch(loadCategory());
  }, [dispatch]);

  return (
    <>
      {ReactDOM.createPortal(
        <CatalogButton
          setHCatalog={setHCatalog}
          hCatatalog={hCatatalog}
          st={st}
          category={category}
        />,
        document.getElementById("header__categories")
      )}
      <section className="categories">
        <div className="categories__title">
          <h2 className="categories__title--text">Explore Categories</h2>
        </div>

        <div className="categories__block">
          {category.map((c) => (
            <Category category={c} key={c.id} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Categoryes;
