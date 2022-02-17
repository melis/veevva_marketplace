import React, { useState, useEffect } from "react";
import "./App.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import Filter from "./components/Filter/Filter";
import Products from "./components/Products/Products";
import { useDispatch } from "react-redux";
import { loadProducts } from "./store/productsAction";

function App() {
  const [searchParams] = useSearchParams();
  const [url, setUrl] = useState("");
  const navigate = useNavigate();
  const [page, setPage] = useState(
    searchParams.get("page") ? Number(searchParams.get("page")) : 1
  );

  const [c, setC] = useState(
    searchParams.get("category_id")
      ? Number(searchParams.get("category_id"))
      : null
  );
  const [b, setB] = useState(
    searchParams.get("brand_id") ? Number(searchParams.get("brand_id")) : null
  );
  const [price, setPrice] = useState({
    min: searchParams.get("minPrice") ? searchParams.get("minPrice") : 0,
    max: searchParams.get("maxPrice") ? searchParams.get("maxPrice") : 0,
    sort: searchParams.get("sort") ? searchParams.get("sort") : null,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    let cc = c ? "category_id=" + c : "";
    let bb = b ? "brand_id=" + b : "";
    let min = price?.min ? "minPrice=" + price.min : "";
    let max =
      price?.max && price?.max > price?.min ? "maxPrice=" + price.max : "";
    let sort = price?.sort ? "sort=" + price.sort : "";
    let pp = page ? "page=" + page : "";

    setUrl(
      `${c || b || price || pp ? "?" : ""}${cc}${
        cc && (bb || min || max || sort || pp) ? "&" : ""
      }${bb}${bb && (min || max || sort || pp) ? "&" : ""}${min}${
        min && (max || sort || pp) ? "&" : ""
      }${max}${max && (sort || pp) ? "&" : ""}${sort}${
        sort && pp ? "&" : ""
      }${pp}`
    );
  }, [c, b, price, page, setUrl]);

  useEffect(() => {
    dispatch(loadProducts(url));
    navigate(url);
  }, [url, navigate, dispatch]);

  return (
    <div className="main__inners">
      <Filter
        c={c}
        setC={setC}
        b={b}
        setB={setB}
        setPrice={setPrice}
        price={price}
      />
      <Products setPage={setPage} page={page} />
    </div>
  );
}

export default App;
