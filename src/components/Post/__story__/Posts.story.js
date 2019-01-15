import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import Post from "../index";

import jsListings from "../../../api/mock/javascriptList.json";
import epListings from "../../../api/mock/earthPornList.json";
const stories = storiesOf("Posts", module);
stories.addDecorator(withKnobs);

const basicPost = jsListings.data.children[3].data;
const imagePost = epListings.data.children[3].data;

console.log("post", imagePost);
stories.add("Basic Post", () => (
  <Post
    {...basicPost}
    title={text("title", basicPost.title)}
    visited={boolean("visited", basicPost.visited)}
    num_comments={number("commentCount", basicPost.num_comments)}
    onAction={actionName => action(actionName)}
    body={basicPost.selftext}
  />
));

stories.add("Image Post", () => (
  <Post {...imagePost} body={imagePost.selftext} />
));
