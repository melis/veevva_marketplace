import axios from "axios";

export const setSellers = (data) => {
  return { type: "SET_SELLERS", paylod: data.topsellers };
};

export const setLoad = (str) => ({
  type: "SET_LOAD_SELLERS",
  paylod: !str ? true : str === "off" ? false : true,
});

export const loadSellers = () => {
  return async (dispatch) => {
    dispatch(setLoad());
    try {
      const { data } = await axios.get("http://pro01/api/api/list/topsellers");

      dispatch(setSellers(data));
    } catch (e) {
      dispatch({ type: "SET_ERROR_SELLERS", paylod: "Some thing is wrong!" });
    }
  };
};
