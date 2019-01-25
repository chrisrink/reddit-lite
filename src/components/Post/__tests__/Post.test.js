import React from "react";
import { shallow } from "enzyme";
import { Post } from "../Post";

import jsPosts from "../../../api/mock/javascriptList.json";
import epPosts from "../../../api/mock/earthPornList.json";
import CreatedBy from "../CreatedBy";

const jsPost = jsPosts.data.children[3].data;
const epPost = epPosts.data.children[3].data;

describe("Post", () => {
  test("renders a text post", () => {
    expect(shallow(<Post {...jsPost} />).html()).toMatchSnapshot();
  });

  test("renders an image post", () => {
    expect(shallow(<Post {...epPost} />).html()).toMatchSnapshot();
  });

  test("createdBy gets passed the right data", () => {
    const post = shallow(<Post {...jsPost} />);
    expect(post.find(CreatedBy).prop("author")).toEqual("ealmansi");
    expect(post.find(CreatedBy).prop("created")).toEqual(1547493159);
  });

  test("title", () => {
    const post = shallow(<Post {...jsPost} />);
    const title = post.find(".post-title a");
    expect(title.text()).toEqual(
      "TIL: A promise can await itself, thereby creating an infinite (never-resolving) promise."
    );
    expect(title.prop("href")).toEqual(
      "https:\\reddit.com/r/javascript/comments/afz6gp/til_a_promise_can_await_itself_thereby_creating/"
    );
  });
});
