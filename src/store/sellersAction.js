import api from "../api";

export const setSellers = (topsellers) => {
  return { type: "SET_SELLERS", paylod: topsellers };
};

export const setLoad = (str) => ({
  type: "SET_LOAD_SELLERS",
  paylod: !str ? true : str === "off" ? false : true,
});

export const loadSellers = () => {
  return async (dispatch) => {
    dispatch(setLoad());
    try {
      const { topsellers } = await api.getToptSellers();

      dispatch(setSellers(topsellers));
    } catch (e) {
      dispatch({ type: "SET_ERROR_SELLERS", paylod: "Some thing is wrong!" });
    }
  };
};
