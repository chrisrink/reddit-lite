import React from "react";
import { storiesOf } from "@storybook/react";

import PostList from "../PostList";

import jsListings from "../../../api/mock/javascriptList.json";
import epListings from "../../../api/mock/earthPornList.json";
const stories = storiesOf("PostList", module);

const list = [...jsListings.data.children, ...epListings.data.children];

stories.add("Basic", () => <PostList list={list} />);
