import React from "react";
import PropTypes from "prop-types";
import { Message } from "semantic-ui-react";

import { DEFAULTS } from "../../constants";
import RedditLogo from "../RedditLogo/RedditLogo";
import SubPicker from "./SubPicker";
import ViewPicker from "./ViewPicker";
import "./header.css";

const propTypes = {
  /**
   * Subreddit to display
   */
  subreddit: PropTypes.shape({
    title: PropTypes.string,
    display_name: PropTypes.string
  }),
  /**
   * List of subs to display in SubPicker
   */
  subList: PropTypes.array,
  /**
   * Are we searching in the SubPicker
   */
  subredditLoading: PropTypes.bool,
  /**
   * Is a new subreddit picked
   */
  onSubredditChange: PropTypes.func,
  /**
   * Callback for new searchText
   */
  onSubredditSearch: PropTypes.func,

  /**
   * SearchText used to find subs
   */
  subredditSearch: PropTypes.string,
  /**
   * Callback for when a new view is sellected
   */
  onViewChange: PropTypes.func,

  /**
   * Current View to display
   */
  view: PropTypes.string,
  /**
   * Show the new posts indicator
   */
  showNew: PropTypes.bool,
  /**
   * Callback for when the new indicator is clicked.
   */
  onShowNew: PropTypes.func
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
    onViewChange,
    showNew,
    onShowNew
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
      <div className="header-message">
        <Message
          color="green"
          size="mini"
          className={showNew ? "appear" : ""}
          onClick={onShowNew}
        >
          {showNew && "Refresh"}
        </Message>
      </div>
      <ViewPicker value={view} onChange={onViewChange} />
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
