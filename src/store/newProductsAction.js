import api from "../api";
export const setNewProducts = (productsnew) => {
  return { type: "SET_NEW_PROD", paylod: productsnew };
};

export const setLoad = (str) => ({
  type: "SET_LOAD_NEW_PROD",
  paylod: !str ? true : str === "off" ? false : true,
});

export const loadNewProducts = () => {
  return async (dispatch) => {
    dispatch(setLoad());
    try {
      const { productsnew } = await api.getNewProducts();
      dispatch(setNewProducts(productsnew));
    } catch (e) {
      dispatch({
        type: "SET_ERROR_NEW_PROD",
        paylod: "Some thing is wrong!",
      });
    }
  };
};
