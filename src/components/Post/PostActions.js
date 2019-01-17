import React from "react";
import PropTypes from "prop-types";
import "./styles/postactions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faShare,
  faBookmark
} from "@fortawesome/free-solid-svg-icons";

const propTypes = {
  /**
   * The amount of comments on a post
   */
  commentCount: PropTypes.number,

  /**
   * Triggered when an action is invoked
   * @param {string} actionName
   */
  onAction: PropTypes.func
};

const defaultProps = {
  onAction: () => {},
  commentCount: 0
};
const PostActions = props => {
  const createAction = actionName => () => {
    props.onAction(actionName);

    if (actionName === "comment") {
      window.location.href = props.href;
    }
  };
  const commentText =
    props.commentCount === 0 ? "Comment" : `${props.commentCount} Comments`;

  const handleClick = () => (window.location.href = props.href);

  return (
    <div className="post-actionbar">
      <button className="post-action" onClick={createAction("comment")}>
        <FontAwesomeIcon className="action-icon" icon={faComment} />
        {commentText}
      </button>
      <button className="post-action" onClick={createAction("share")}>
        <FontAwesomeIcon className="action-icon" icon={faShare} />
        Share
      </button>
      <button className="post-action" onClick={createAction("save")}>
        <FontAwesomeIcon className="action-icon" icon={faBookmark} />
        Save
      </button>
    </div>
  );
};

PostActions.propTypes = propTypes;
PostActions.defaultProps = defaultProps;

export default PostActions;
