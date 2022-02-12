import axios from "axios";

export const setBestSellers = (data) => {
  return { type: "SET_BEST_SELLERS", paylod: data.bestsellers };
};

export const setLoad = (str) => ({
  type: "SET_LOAD_BEST_SELLERS",
  paylod: !str ? true : str === "off" ? false : true,
});

export const loadBestSellers = () => {
  return async (dispatch) => {
    dispatch(setLoad());
    try {
      const { data } = await axios.get("http://pro01/api/api/list/bestsellers");

      dispatch(setBestSellers(data));
    } catch (e) {
      dispatch({
        type: "SET_ERROR_BEST_SELLERS",
        paylod: "Some thing is wrong!",
      });
    }
  };
};
