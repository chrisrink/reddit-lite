const ACTIONS = {
  REQUEST_POSTS: "REQUEST_POSTS",
  RECIEVE_POSTS: "RECEIVE_POSTS",
  RECEIVE_POSTS_FAILED: "RECEIVE_POSTS_FAILED",
  CLEAR_POSTS: "CLEAR_POSTS",
  ADD_NEW_POSTS: "ADD_NEW_POSTS",
  REQUEST_SUBS: "REQUEST_SUBS",
  RECIEVE_SUBS: "RECEIVE_SUBS",
  RECEIVE_SUBS_FAILED: "RECEIVE_SUBS_FAILED",
  RESET_SUBS: "RESET_SUBS",
  RESET_BEFOREPOSTS: "RESET_BEFOREPOSTS",
  RECIEVE_BEFOREPOSTS: "RECEIVE_BEFOREPOSTS"
};

const DEFAULTS = {
  subreddit: {
    title: "All",
    display_name: "all"
  },
  view: "hot",
  searchText: ""
};

const DEFAULT_SUBS = [
  {
    title: "All",
    display_name: "all"
  },
  { title: "ReactJS", display_name: "reactjs" },
  {
    title: "JavaScript",
    display_name: "javascript"
  }
];

const VIEWS = [
  {
    text: "Hot",
    value: "hot",
    icon: "hotjar"
  },
  {
    text: "New",
    value: "new",
    icon: "asterisk"
  },
  {
    text: "Controversial",
    value: "controversial",
    icon: "bolt"
  },
  {
    text: "Top",
    value: "top",
    icon: "trophy"
  },
  {
    text: "Rising",
    value: "rising",
    icon: "chart line"
  }
];

const POLL_INTERVAL = 50000; //50 x1000ms = 50s

export { ACTIONS, DEFAULTS, DEFAULT_SUBS, VIEWS, POLL_INTERVAL };
