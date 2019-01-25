import { ACTIONS } from "../constants";
import { getPostsBefore } from "../api/reddit";

function resetUpdates() {
  return {
    type: ACTIONS.RESET_BEFOREPOSTS
  };
}

function receiveBeforePosts(json) {
  const list = json.data.children.map(child => child.data);

  return {
    type: ACTIONS.RECIEVE_BEFOREPOSTS,
    payload: {
      list
    }
  };
}

function fetchUpdates(subreddit, view, before) {
  return dispatch => {
    return getPostsBefore(subreddit, view, before)
      .then(response => response.json())
      .then(json => dispatch(receiveBeforePosts(json)));
  };
}

export { fetchUpdates, resetUpdates };
