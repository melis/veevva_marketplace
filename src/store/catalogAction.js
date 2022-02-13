import axios from "axios";
import api from "../api";

export const setCategory = (category) => {
  return { type: "SET_CATEGORY", paylod: category };
};

export const setLoad = (str) => ({
  type: "SET_LOAD_CATEGORY",
  paylod: !str ? true : str === "off" ? false : true,
});

export const loadCategory = () => {
  return async (dispatch) => {
    dispatch(setLoad());
    try {
      const { category } = await api.getCategories();

      dispatch(setCategory(category));
    } catch (e) {
      dispatch({ type: "SET_ERROR_CATEGORY", paylod: "Some thing is wrong!" });
    }
  };
};
