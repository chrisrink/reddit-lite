import React from "react";
import PropTypes from "prop-types";
import PostActions from "./PostActions";
import "./styles/post.css";
import CreatedBy from "./CreatedBy";
import classNames from "classnames";
const propTypes = {
  /**
   * userid of the person who created the post
   */
  author: PropTypes.string,

  /**
   * body text if post is a text type
   */
  selftext: PropTypes.string,

  /**
   * Unix date value since 1970 in ms.
   */
  create: PropTypes.number,

  /**
   * Number of comments on post
   */
  num_comments: PropTypes.number,

  /**
   * Triggered when an action is invoked
   * @param {string} actionName
   */
  onAction: PropTypes.func,

  /**
   * Brief summary of article
   */
  title: PropTypes.string,

  /**
   * If the user has opened the post
   */
  hasVisited: PropTypes.boolean
};

const defaultProps = {
  clicked: false
};
const Post = props => {
  const postClass = classNames({
    post: true,
    [`post-visited`]: props.hasVisited
  });

  const href = `https:\\reddit.com${props.permalink}`;
  return (
    <article className={postClass} style={props.style}>
      <CreatedBy author={props.author} created={props.created_utc} />
      <h3 className="post-title">
        <a href={href}>{props.title}</a>
      </h3>
      {props.selftext && <p className="post-body">{props.selftext}</p>}
      {props.thumbnail && props.thumbnail !== "self" && (
        <div>
          <img
            alt="Post thumbnail"
            className="post-thumbnail"
            src={props.thumbnail}
          />
        </div>
      )}

      <PostActions
        commentCount={props.num_comments}
        onAction={props.onAction}
        href={href}
      />
    </article>
  );
};

Post.propTypes = propTypes;
Post.defaultProps = defaultProps;

export default React.memo(Post);
