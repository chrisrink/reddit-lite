async function searchSubs(query) {
  return fetch(
    `https://www.reddit.com/search.json?type=sr&q=${query}&limit=10`
  );
}

async function getPosts(subreddit) {
  return fetch(`https://www.reddit.com/r/${subreddit}.json`);
}

export { getPosts, searchSubs };
