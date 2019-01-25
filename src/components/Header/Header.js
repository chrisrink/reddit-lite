import React from "react";
import PropTypes from "prop-types";
import { DEFAULTS } from "../../constants";
import RedditLogo from "../RedditLogo/RedditLogo";
import SubPicker from "./SubPicker";
import ViewPicker from "./ViewPicker";
import "./header.css";

const propTypes = {
  subreddit: PropTypes.shape({
    title: PropTypes.string,
    display_name: PropTypes.string
  }),
  subList: PropTypes.array,
  subredditLoading: PropTypes.bool,
  onSubredditChange: PropTypes.func,
  onSubredditSearch: PropTypes.func,

  subredditSearch: PropTypes.string,
  onViewChange: PropTypes.func,
  view: PropTypes.string
};

const defaultProps = {
  view: DEFAULTS.view,
  subreddit: DEFAULTS.subreddit,
  subredditLoading: false
};
const Header = props => {
  const {
    subreddit,
    subList,
    subredditLoading,
    subredditSearch,
    onSubredditChange,
    onSubredditSearch,
    view,
    onViewChange
  } = props;
  return (
    <header className="app-header">
      <a href="https://reddit.com">
        <RedditLogo />
      </a>
      <SubPicker
        value={subreddit}
        onChange={onSubredditChange}
        onSearchChange={onSubredditSearch}
        loading={subredditLoading}
        searchValue={subredditSearch}
        options={subList}
      />
      <div className="spacer" />
      <ViewPicker value={view} onChange={onViewChange} />
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
