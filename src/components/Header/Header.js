import React from "react";
import PropTypes from "prop-types";
import { DEFAULT_SEARCH } from "../../constants";
import RedditLogo from "../RedditLogo/RedditLogo";
import SubPicker from "./SubPicker";
import ViewPicker from "./ViewPicker";
import "./header.css";

const propTypes = {
  view: PropTypes.string,
  subreddit: PropTypes.string,
  subredditLoading: PropTypes.bool
};

const defaultProps = {
  view: DEFAULT_SEARCH.view,
  subreddit: DEFAULT_SEARCH.subreddit,
  subredditLoading: false
};
const Header = props => {
  return (
    <header className="app-header">
      <a href="https://reddit.com">
        <RedditLogo />
      </a>
      <SubPicker value="all" />
      <div className="spacer" />
      <ViewPicker value="hot" />
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
