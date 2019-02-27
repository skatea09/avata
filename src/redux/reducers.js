const initialState = {
  topResults: []
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "STORE_DATA":
      const { results } = payload;
      let topResults = results
        .filter(result => result.review_score > 75)
        .sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        });
      if (topResults.length > 100) topResults = topResults.slice(0, 100);
      return {
        ...state,
        topResults
      };
    default:
      return state;
  }
};

export default rootReducer;
