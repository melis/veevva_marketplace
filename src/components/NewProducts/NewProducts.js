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
    <section class="newproducts">
      <div class="bestsellers__title">
        <h2 class="bestsellers__title--text">New products</h2>
        <div class="bestsellers__title--link newproducts__title--link">
          <a href="#">View all</a>
        </div>
      </div>

      <div class="newproducts__cards">
        {newProducts.map((n) => (
          <Card key={n.id} product={n} />
        ))}
      </div>
    </section>
  );
}

export default NewProducts;
