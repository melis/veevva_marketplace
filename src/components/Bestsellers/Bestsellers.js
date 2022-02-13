import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadBestSellers } from "../../store/bestSellersAction";
import Card from "../Card/Card";

function Bestsellers() {
  const dispatch = useDispatch();
  const { bestSellers } = useSelector(({ bestSellers }) => bestSellers);

  useEffect(() => {
    dispatch(loadBestSellers());
  }, [dispatch]);

  return (
    <section className="bestsellers">
      <div className="bestsellers__title">
        <h2 className="bestsellers__title--text">Best sellers</h2>
        <div className="bestsellers__title--link">
          <a href="#">View all</a>
        </div>
      </div>
      <div className="bestsellers__cards">
        {bestSellers.map((b) => (
          <Card product={b} key={b.id} />
        ))}
      </div>
    </section>
  );
}

export default Bestsellers;
