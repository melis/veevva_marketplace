const category_state = {
  category: [],
  error: null,
  loading: null,
};

const category = (state = category_state, action) => {
  console.log("catalog_reduse", action);
  switch (action.type) {
    case "SET_CATEGORY":
      return { ...state, error: null, loading: false, category: action.paylod };
    case "SET_LOAD_CATEGORY":
      return { ...state, error: null, loading: action.paylod };
    case "SET_ERROR_CATEGORY":
      return { ...state, loading: false, error: action.paylod };

    default:
      return state;
  }
};

export default category;
