const ACTIONS = {
  REQUEST_POSTS: "REQUEST_POSTS",
  RECIEVE_POSTS: "RECEIVE_POSTS",
  RECEIVE_POSTS_FAILED: "RECEIVE_POSTS_FAILED",
  CLEAR_POSTS: "CLEAR_POSTS",
  REQUEST_SUBS: "REQUEST_SUBS",
  RECIEVE_SUBS: "RECEIVE_SUBS",
  RECEIVE_SUBS_FAILED: "RECEIVE_SUBS_FAILED",
  RESET_SUBS: "RESET_SUBS"
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

export { ACTIONS, DEFAULTS, DEFAULT_SUBS, VIEWS };
