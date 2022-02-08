import { act } from "react-dom/cjs/react-dom-test-utils.production.min";

const category_state ={
 category: [],
  error: null,
  loading: null

}

const category = (state = category_state, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return { ...state, error: null, loading: false, category: action.paylod};
    case "SET_LOAD":
      return { ...state, error: null, loading: action.paylod };
    case "SET_ERROR":
      return { ...state, loading: false, error: action.paylod };

    default:
      return state;
  }
};

export default category;
