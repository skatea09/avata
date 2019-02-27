import meanBy from 'lodash/meanBy';

const initialState = {
  topResults: [],
  avgScore: 0,
  input: '',
  filter: '',
};

const filterByScore = (data) => {
  let topResults = data
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
  return topResults;
}

const getAverage = (data) => meanBy(data, (result) => result.review_score);

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'STORE_DATA':
      const { results } = payload;
      let topResults = filterByScore(results);
      let avgScore = Math.round(getAverage(topResults));
      return {
        ...state,
        topResults,
        avgScore,
      };
    default:
      return state;
  }
};

export default rootReducer;
