import axios from "axios";

export const setNewProducts = (data) => {
  return { type: "SET_NEW_PROD", paylod: data.productsnew };
};

export const setLoad = (str) => ({
  type: "SET_LOAD_NEW_PROD",
  paylod: !str ? true : str === "off" ? false : true,
});

export const loadNewProducts = () => {
  return async (dispatch) => {
    dispatch(setLoad());
    try {
      const { data } = await axios.get("http://pro01/api/api/list/productsnew");

      dispatch(setNewProducts(data));
    } catch (e) {
      dispatch({
        type: "SET_ERROR_NEW_PROD",
        paylod: "Some thing is wrong!",
      });
    }
  };
};
