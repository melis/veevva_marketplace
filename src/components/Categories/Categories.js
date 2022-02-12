import React, { useEffect } from "react";

import { loadCategory } from "../../store/catalogAction";
import { useDispatch, useSelector } from "react-redux";

import Category from "../Category/Category";

const Categoryes = () => {
  const dispatch = useDispatch();
  const category = useSelector(({ category }) => category.category);
  const category_1 = category.filter((c) => c.level === 1);
  useEffect(() => {
    dispatch(loadCategory());
  }, [dispatch]);

  return (
    <>
      <section className="categories">
        <div className="categories__title">
          <h2 className="categories__title--text">Explore Categories</h2>
        </div>

        <div className="categories__block">
          {category_1.map((c) => (
            <Category
              category={c}
              key={c.id}
              menu={category.filter((m) => m.param === c.id)}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Categoryes;
