import { ACTIONS, DEFAULT_SUBS } from "../constants";
import { searchSubs } from "../api/reddit";

function requestSubs(query) {
  return {
    type: ACTIONS.REQUEST_SUBS,
    payload: query
  };
}

function recieveSubs(query, json) {
  const list = json.data.children.map(child => child.data);

  return {
    type: ACTIONS.RECIEVE_SUBS,
    payload: list
  };
}

function fetchSubreddits(query = "") {
  return dispatch => {
    if (query) {
      dispatch(requestSubs(query));
      return searchSubs(query)
        .then(response => response.clone().json())
        .then(json => dispatch(recieveSubs(query, json)));
    } else {
      dispatch(recieveSubs(query, DEFAULT_SUBS));
    }
  };
}

function resetSubreddits(searchText = "") {
  return {
    type: ACTIONS.RESET_SUBS,
    payload: {
      options: DEFAULT_SUBS,
      searchText: searchText
    }
  };
}

export { fetchSubreddits, recieveSubs, requestSubs, resetSubreddits };
