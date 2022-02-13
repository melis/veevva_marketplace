import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadNewProducts } from "../../store/newProductsAction";
import Card from "../Card/Card";

function NewProducts() {
  const dispatch = useDispatch();
  const { newProducts } = useSelector(({ newProducts }) => newProducts);
  useEffect(() => {
    dispatch(loadNewProducts());
  }, [dispatch]);
  return (
    <section className="newproducts">
      <div className="bestsellers__title">
        <h2 className="bestsellers__title--text">New products</h2>
        <div className="bestsellers__title--link newproducts__title--link">
          <a href="#">View all</a>
        </div>
      </div>

      <div className="newproducts__cards">
        {newProducts.map((n) => (
          <Card key={n.id} product={n} />
        ))}
      </div>
    </section>
  );
}

export default NewProducts;
