import ACTIONS from "../constants";

const initialState = {
  subreddit: "all",
  subredditLoading: false,
  subredditFailed: false,
  view: "popular"
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
