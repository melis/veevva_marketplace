import api from "../api";

export const setBestSellers = (bestsellers) => {
  return { type: "SET_BEST_SELLERS", paylod: bestsellers };
};

export const setLoad = (str) => ({
  type: "SET_LOAD_BEST_SELLERS",
  paylod: !str ? true : str === "off" ? false : true,
});

export const loadBestSellers = () => {
  return async (dispatch) => {
    dispatch(setLoad());
    try {
      const { bestsellers } = await api.getBestSellers();

      dispatch(setBestSellers(bestsellers));
    } catch (e) {
      dispatch({
        type: "SET_ERROR_BEST_SELLERS",
        paylod: e.massega ? e.massega : "Some thing is wrong!",
      });
    }
  };
};
