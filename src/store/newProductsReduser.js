const newProducts_state = {
  newProducts: [],
  error: null,
  loading: null,
};

const newProducts = (state = newProducts_state, action) => {
  switch (action.type) {
    case "SET_NEW_PROD":
      return {
        ...state,
        error: null,
        loading: false,
        newProducts: action.paylod,
      };
    case "SET_LOAD_NEW_PROD":
      return { ...state, error: null, loading: action.paylod };
    case "SET_ERROR_NEW_PROD":
      return { ...state, loading: false, error: action.paylod };

    default:
      return state;
  }
};

export default newProducts;
