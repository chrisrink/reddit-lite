import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header";
import PostList from "../PostList";
import { DEFAULTS } from "../../constants";
import { fetchPosts } from "../../actions/posts";
import { fetchSubreddits, resetSubreddits } from "../../actions/subreddit";

import "./styles/subroute.css";

class SubRoute extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object,
    history: PropTypes.object,
    loading: PropTypes.bool,
    actions: PropTypes.shape({
      fetchPosts: PropTypes.func
    }),
    postsByOrder: PropTypes.array,
    postsByName: PropTypes.object,
    subredditList: PropTypes.array
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
  }

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

      return <PostList list={list} subreddit={subreddit} view={view} />;
    }

    return this.renderNoResults();
  }

  render() {
    const { subreddit, subredditLoading, subredditSearch, view } = this.state;
    const { postsByOrder, postsByName, subredditList, loading } = this.props;
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
        />
        {this.renderList(postsByOrder, postsByName, subreddit, view, loading)}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { postsByOrder, postsByName, loading } = state.posts;
  const { list } = state.subreddits;
  return {
    postsByOrder,
    postsByName,
    subredditList: list,
    loading
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { fetchPosts, fetchSubreddits, resetSubreddits },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubRoute);

export { SubRoute };
