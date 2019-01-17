import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import Post from "../Post";

import jsListings from "../../../api/mock/javascriptList.json";
import epListings from "../../../api/mock/earthPornList.json";
const stories = storiesOf("Posts", module);
stories.addDecorator(withKnobs);

const basicPost = jsListings.data.children[3].data;
const imagePost = epListings.data.children[3].data;

stories.add("Basic Post", () => (
  <div style={{ width: 400 }}>
    <Post
      {...basicPost}
      title={text("title", basicPost.title)}
      visited={boolean("visited", basicPost.visited)}
      num_comments={number("commentCount", basicPost.num_comments)}
      onAction={actionName => action(actionName)}
      selftext={basicPost.selftext}
    />
  </div>
));

stories.add("Image Post", () => (
  <div style={{ width: 400 }}>
    <Post {...imagePost} body={imagePost.selftext} />
  </div>
));
