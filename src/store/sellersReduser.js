const sellers_state = {
  sellers: [],
  error: null,
  loading: null,
};

const sellers = (state = sellers_state, action) => {
  console.log("seller_reduse", action);
  switch (action.type) {
    case "SET_SELLERS":
      return {
        ...state,
        error: null,
        loading: false,
        sellers: action.paylod,
      };
    case "SET_LOAD":
      return { ...state, error: null, loading: action.paylod };
    case "SET_ERROR":
      return { ...state, loading: false, error: action.paylod };

    default:
      return state;
  }
};

export default sellers;
