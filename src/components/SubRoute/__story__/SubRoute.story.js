import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { SubRoute } from "../SubRoute";
import { DEFAULT_SUBS, DEFAULTS } from "../../../constants";
import jsListings from "../../../api/mock/javascriptList.json";
import epListings from "../../../api/mock/earthPornList.json";
import { fetchNextPost } from "../../../actions/posts";

const stories = storiesOf("SubRoute", module);

const list = [...jsListings.data.children, ...epListings.data.children];

const postsByOrder = epListings.data.children.map(post => post.data.name);
const postByName = epListings.data.children.reduce((map, post) => {
  map[post.data.name] = post.data;
  return map;
}, {});

const defaultProps = {
  match: {
    params: { subreddit: DEFAULTS.subreddit.display_name, view: DEFAULTS.view }
  },
  history: {
    push: action("push history")
  },
  actions: {
    fetchPosts: action("fetchpost"),
    fetchSubs: action("fetch sub"),
    fetchNextPost: action("fetch next post"),
    addNewPost: action("add new posts"),
    fetchSubreddits: action("fetch subs"),
    resetSubreddits: action("reset sub"),
    fetchUpdates: action("fetch new posts"),
    resetUpdates: action("clear reset")
  },
  subredditList: DEFAULT_SUBS,
  watchForNew: true
};
stories.add("Loading", () => <SubRoute {...defaultProps} loading={true} />);

stories.add("No Results", () => (
  <SubRoute {...defaultProps} postsByOrder={[]} />
));

stories.add("List", () => (
  <SubRoute
    {...defaultProps}
    postsByOrder={postsByOrder}
    postsByName={postByName}
    newPosts={[{}]}
  />
));
