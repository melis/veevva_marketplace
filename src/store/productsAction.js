import api from "../api";
export const setProducts = (productsall) => {
  return { type: "SET_PROD", paylod: productsall };
};

export const setLoad = (str) => ({
  type: "SET_LOAD_PROD",
  paylod: !str ? true : str === "off" ? false : true,
});

export const loadProducts = (url) => {
  return async (dispatch) => {
    dispatch(setLoad());
    try {
      const { productsall } = await api.getAllProducts(url);

      dispatch(setProducts(productsall));
    } catch (e) {
      dispatch({
        type: "SET_ERROR_PROD",
        paylod: "Some thing is wrong!",
      });
    }
  };
};
