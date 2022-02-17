const products_state = {
  products: [],
  error: null,
  loading: null,
};

const products = (state = products_state, action) => {
  switch (action.type) {
    case "SET_PROD":
      return {
        ...state,
        error: null,
        loading: false,
        products: action.paylod ? action.paylod : [],
      };
    case "SET_LOAD_PROD":
      return { ...state, error: null, loading: action.paylod };
    case "SET_ERROR_PROD":
      return { ...state, loading: false, error: action.paylod };

    default:
      return state;
  }
};

export default products;
