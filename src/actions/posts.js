import { ACTIONS } from "../constants";
import { getPosts, getPostsAfter } from "../api/reddit";

function getLoadType(loadValue, value = true) {
  const payload = {};
  switch (loadValue) {
    case "loadNext":
      payload.loadingNext = value;
      break;
    default:
      payload.loading = value;
      break;
  }
  return payload;
}
function requestPosts(loadType) {
  return {
    type: ACTIONS.REQUEST_POSTS,
    payload: getLoadType(loadType)
  };
}

function clearPosts() {
  return {
    type: ACTIONS.CLEAR_POSTS
  };
}

function receivePosts(json, loadValue) {
  const list = json.data.children.map(child => child.data);
  const postsByOrder = list.map(item => item.name);
  const postsByName = list.reduce((posts, item) => {
    posts[item.name] = item;
    return posts;
  }, {});

  const loadType = getLoadType(loadValue, false);
  return {
    type: ACTIONS.RECIEVE_POSTS,
    payload: {
      postsByOrder: postsByOrder,
      postsByName: postsByName,
      after: json.data.after,
      ...loadType
    }
  };
}

function fetchPosts(subreddit, view, reload = false) {
  return dispatch => {
    dispatch(requestPosts("load"));
    if (reload) {
      dispatch(clearPosts());
    }
    return getPosts(subreddit, view)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json, reload)));
  };
}

function fetchNextPost(subreddit, view, after) {
  return dispatch => {
    dispatch(requestPosts("loadNext"));
    return getPostsAfter(subreddit, view, after)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json, "loadNext")));
  };
}

export { requestPosts, receivePosts, fetchPosts, fetchNextPost };
