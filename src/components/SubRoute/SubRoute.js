import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header";
import PostList from "../PostList";
import { DEFAULTS, POLL_INTERVAL } from "../../constants";
import { fetchPosts, fetchNextPost, addNewPost } from "../../actions/posts";
import { fetchSubreddits, resetSubreddits } from "../../actions/subreddit";
import { fetchUpdates, resetUpdates } from "../../actions/updates";

import "./styles/subroute.css";

/**
 * SubRoute is the primary container. For testing, used the named export.
 */
class SubRoute extends PureComponent {
  static propTypes = {
    /**
     * Url parameters and query strings provided by react-router
     */
    match: PropTypes.object.isRequired,
    /**
     * History api for pushing navigation
     */
    history: PropTypes.object,
    /**
     * Show the loading indicator
     */
    loading: PropTypes.bool,
    /**
     * Show the bottom loading indicator (not implemented yet)
     */
    loadingNext: PropTypes.bool,
    /**
     * Callback actions thatt can be triggered
     */
    actions: PropTypes.shape({
      fetchPosts: PropTypes.func,
      fetchNextPost: PropTypes.func,
      addNewPost: PropTypes.func,
      fetchSubreddits: PropTypes.func,
      resetSubreddits: PropTypes.func,
      fetchUpdates: PropTypes.func,
      resetUpdates: PropTypes.func
    }),
    /**
     * Ordered list of posts to display
     */
    postsByOrder: PropTypes.array,
    /**
     * Hashed map for looking up posts
     */
    postsByName: PropTypes.object,
    /**
     * List of subreddits to display when viewing and searching in the SubPicker
     */
    subredditList: PropTypes.array,
    /**
     * Id of the last post that was retrieved
     */
    after: PropTypes.string,
    /**
     * Toggle for turning off polling
     */
    watchForNew: PropTypes.bool,
    /**
     * A list of new posts that have not been viewed
     */
    newPosts: PropTypes.array
  };

  static getDerivedStateFromProps(props, state) {
    const {
      view = DEFAULTS.view,
      subreddit = DEFAULTS.subreddit
    } = props.match.params;

    return {
      subreddit,
      view
    };
  }

  state = {
    postsByOrder: [],
    postsbyName: {},
    subreddit: DEFAULTS.subreddit,
    subredditLoading: false,
    subredditSearch: "",
    view: DEFAULTS.view
  };

  constructor(props) {
    super(props);
    this.handleSubRedditSearch = this.handleSubRedditSearch.bind(this);
  }

  componentDidMount() {
    const { fetchPosts } = this.props.actions;
    const { subreddit, view } = this.state;
    fetchPosts(subreddit, view);
  }

  componentDidUpdate(prevProps, prevState) {
    const { fetchPosts } = this.props.actions;

    const { subreddit, view } = this.state;

    if (prevState.subreddit !== subreddit || prevState.view !== view) {
      fetchPosts(subreddit, view, true);
    }

    this.watchForUpdates();
  }

  watchForUpdates() {
    //toggle not configured yet
    if (true || this.props.watchForNew) {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = undefined;
      }
      this.timer = setInterval(this.checkUpdates, POLL_INTERVAL);
    }
  }

  checkUpdates = () => {
    const { view, subreddit } = this.state;
    const { postsByOrder, actions } = this.props;

    if (postsByOrder.length > 0) {
      actions.fetchUpdates(subreddit, view, postsByOrder[0]);
    }
  };

  handleSubRedditChange = (e, { value }) => {
    const { view } = this.state;
    this.props.history.push(`/${value}/${view}`);
  };

  handleViewChange = (e, { value }) => {
    const { subreddit } = this.state;
    this.props.history.push(`/${subreddit}/${value}`);
  };

  handleSubRedditSearch(value) {
    const searchText = value;
    if (searchText.length >= 3) {
      this.props.actions.fetchSubreddits(value);
    } else {
      this.props.actions.resetSubreddits();
    }

    if (value.length >= 3) {
      this.props.actions.fetchSubreddits(value);
    }
    this.setState({ subredditSearch: value });
  }

  handleLoadMore = ({ startIndex, stopIndex }) => {
    const { after, loadingNext } = this.props;
    const { subreddit, view } = this.state;

    if (!loadingNext) {
      this.props.actions.fetchNextPost(subreddit, view, after);
    }
  };

  handleShowNew = () => {
    const { newPosts, actions } = this.props;

    actions.addNewPost(newPosts);
    actions.resetUpdates();
    window.scrollTo(0, 0);
  };

  renderLoading() {
    return (
      <div className="no-results">
        <FontAwesomeIcon icon={faCompass} spin />
      </div>
    );
  }

  renderNoResults() {
    return <div className="no-results">No Results Found</div>;
  }

  renderList(postsByOrder, postsByName, view, subreddit, loading) {
    if (loading) {
      return this.renderLoading();
    }

    if (postsByOrder && postsByOrder.length > 0) {
      const list = postsByOrder.map(name => postsByName[name]);

      return (
        <PostList
          list={list}
          subreddit={subreddit}
          view={view}
          loadMore={this.handleLoadMore}
        />
      );
    }

    return this.renderNoResults();
  }

  render() {
    const { subreddit, subredditLoading, subredditSearch, view } = this.state;
    const {
      postsByOrder,
      postsByName,
      subredditList,
      loading,
      newPosts
    } = this.props;
    return (
      <Fragment>
        <Header
          onSubredditChange={this.handleSubRedditChange}
          onSubredditSearch={this.handleSubRedditSearch}
          subreddit={{ display_name: subreddit, title: subreddit }}
          subList={subredditList}
          subredditLoading={subredditLoading}
          subredditSearch={subredditSearch}
          view={view}
          onViewChange={this.handleViewChange}
          showNew={newPosts && newPosts.length > 0}
          onShowNew={this.handleShowNew}
        />
        {this.renderList(postsByOrder, postsByName, subreddit, view, loading)}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const {
    postsByOrder,
    postsByName,
    loading,
    loadingNext,
    after
  } = state.posts;
  const { list } = state.subreddits;
  const { beforeList } = state.updates;
  return {
    postsByOrder,
    postsByName,
    subredditList: list,
    loading,
    loadingNext,
    after,
    newPosts: beforeList
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      fetchPosts,
      fetchNextPost,
      fetchSubreddits,
      resetSubreddits,
      fetchUpdates,
      resetUpdates,
      addNewPost
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubRoute);

export { SubRoute };
