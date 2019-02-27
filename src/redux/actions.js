import axios from 'axios';

const theBookUrl = 'https://di37ol03g7.execute-api.us-west-2.amazonaws.com/dev/';

export const fetchData = () => async (dispatch) => {
  axios.post(theBookUrl)
    .then(res => {
      dispatch({
        type: 'STORE_DATA',
        payload: { results: JSON.parse(res.request.responseText).results }
      })
    })
}

export default fetchData;
