import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadSellers } from "../../store/sellersAction";
import SellerCard from "../SellerCard/SellerCard";

function Topsellers() {
  const { sellers } = useSelector(({ sellers }) => sellers);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadSellers());
  }, [dispatch]);
  return (
    <section className="topsellers">
      <div className="bestsellers__title">
        <h2 className="bestsellers__title--text">Top sellers</h2>
        <div className="bestsellers__title--link topsellers__title--link">
          <a href="#">View all</a>
        </div>
      </div>
      <div className="topsellers__cards">
        {sellers.map((s) => (
          <SellerCard key={s.id} seller={s} />
        ))}
      </div>
    </section>
  );
}

export default Topsellers;
