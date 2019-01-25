import React from "react";
import { shallow } from "enzyme";
import PostActions from "../PostActions";

describe("PostActions", () => {
  test("without a comment", () => {
    expect(shallow(<PostActions />).html()).toMatchSnapshot();
  });

  test("with a comment", () => {
    expect(shallow(<PostActions />).html()).toMatchSnapshot();
  });

  test("click handler", () => {
    const handleClick = jest.fn();
    const postAction = shallow(<PostActions onAction={handleClick} />);
    const actions = postAction.find(".post-action");

    expect(actions.length).toEqual(3);
    actions.first().simulate("click");
    expect(handleClick).toHaveBeenCalledWith("comment");
  });
});
