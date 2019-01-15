import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  /**
   * Brief summary of article
   */
  title: PropTypes.string,
  /**
   *
   */
  body: PropTypes.string
};
const Post = () => {
  return (
    <article>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
};

Post.propTypes = propTypes;
