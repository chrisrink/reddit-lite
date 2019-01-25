import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { SubRoute } from "../SubRoute";
import { DEFAULT_SUBS, DEFAULTS } from "../../../constants";
import jsListings from "../../../api/mock/javascriptList.json";
import epListings from "../../../api/mock/earthPornList.json";

const stories = storiesOf("SubRoute", module);

const list = [...jsListings.data.children, ...epListings.data.children];
stories.addDecorator(withKnobs);

const postsByOrder = epListings.data.children.map(post => post.data.name);
const postByName = epListings.data.children.reduce((map, post) => {
  map[post.data.name] = post.data;
  return map;
}, {});

const defaultProps = {
  match: {
    params: { subreddit: DEFAULTS.subreddit.display_name, view: DEFAULTS.view }
  },
  actions: {
    fetchPosts: async () => action("fetchPost"),
    fetchSubs: async () => action("fetchSub")
  },
  subredditList: DEFAULT_SUBS
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
  />
));
