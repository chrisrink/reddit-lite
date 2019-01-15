import React from "react";
import PropTypes from "prop-types";
import "./styles/createdby.css";
import moment from "moment";

const humanizeDate = value => moment.unix(value).fromNow();

const propTypes = {
  author: PropTypes.string,
  created: PropTypes.number
};
const CreatedBy = props => {
  return (
    <div className="post-createdby">
      <span>Posted by</span>
      <a
        className="post-author"
        href={`https://reddit.com/user/${props.author}`}
      >
        {`u/${props.author}`}
      </a>
      <span className="post-created">{humanizeDate(props.created)}</span>
    </div>
  );
};

CreatedBy.propTypes = propTypes;

export default CreatedBy;
