async function searchSubs(query) {
  return fetch(
    `https://www.reddit.com/search.json?type=sr&q=${query}&limit=10`
  );
}

async function getPosts(subreddit, view) {
  return fetch(`https://www.reddit.com/r/${subreddit}/${view}.json`);
}

async function getPostsAfter(subreddit, view, after) {
  return fetch(
    `https://www.reddit.com/r/${subreddit}/${view}.json?after=${after}`
  );
}

async function getPostsBefore(subreddit, view, before) {
  return fetch(
    `https://www.reddit.com/r/${subreddit}/${view}.json?before=${before}`
  );
}

export { getPosts, searchSubs, getPostsBefore, getPostsAfter };
