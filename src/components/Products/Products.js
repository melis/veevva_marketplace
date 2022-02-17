import React from "react";
import Pagination from "@mui/material/Pagination";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

function Products({ setPage, page }) {
  const { products, loading, error } = useSelector((a) => a.products);
  console.log(products, loading, error);

  return (
    <section className="product__block">
      {loading ? (
        "loading..."
      ) : (
        <>
          <div className="product">
            {products.map((p) => (
              <Card product={p} key={p.id} />
            ))}
          </div>
          <Pagination
            count={10}
            page={page}
            onChange={(e, p) => {
              setPage(p);
            }}
          />
        </>
      )}
    </section>
  );
}

export default Products;
