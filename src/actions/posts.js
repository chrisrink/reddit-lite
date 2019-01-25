import { ACTIONS } from "../constants";
import { getPosts } from "../api/reddit";

function requestPosts() {
  return {
    type: ACTIONS.REQUEST_POSTS
  };
}

function receivePosts(subreddit, json, reload) {
  const list = json.data.children.map(child => child.data);
  const postsByOrder = list.map(item => item.name);
  const postsByName = list.reduce((posts, item) => {
    posts[item.name] = item;
    return posts;
  }, {});

  return {
    type: ACTIONS.RECIEVE_POSTS,
    payload: {
      subreddit,
      postsByOrder: postsByOrder,
      postsByName: postsByName,
      lastPost: json.data.after,
      receivedAt: Date.now(),
      reload
    }
  };
}

function fetchPosts(subreddit, reload = false) {
  return dispatch => {
    dispatch(requestPosts());
    return getPosts(subreddit)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json, reload)));
  };
}

export { requestPosts, receivePosts, fetchPosts };
