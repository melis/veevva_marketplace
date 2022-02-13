const bestSellers_state = {
  bestSellers: [],
  error: null,
  loading: null,
};

const bestSellers = (state = bestSellers_state, action) => {
  switch (action.type) {
    case "SET_BEST_SELLERS":
      return {
        ...state,
        error: null,
        loading: false,
        bestSellers: action.paylod,
      };
    case "SET_LOAD_BEST_SELLERS":
      return { ...state, error: null, loading: action.paylod };
    case "SET_ERROR_BEST_SELLERS":
      return { ...state, loading: false, error: action.paylod };

    default:
      return state;
  }
};

export default bestSellers;
