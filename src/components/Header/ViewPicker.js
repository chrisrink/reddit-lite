import React from "react";
import PropTypes from "prop-types";
import { Dropdown } from "semantic-ui-react";

const options = [
  {
    text: "Hot",
    value: "hot",
    icon: "hotjar"
  },
  {
    text: "New",
    value: "new",
    icon: "asterisk"
  },
  {
    text: "Controversial",
    value: "controversial",
    icon: "bolt"
  },
  {
    text: "Top",
    value: "top",
    icon: "trophy"
  },
  {
    text: "Rising",
    value: "rising",
    icon: "chart line"
  }
];

const propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.string
    })
  ),
  value: PropTypes.string
};
const ViewFilter = props => {
  const selection = options.find(item => item.value === props.value);
  return (
    <div className="viewpicker">
      <span className="viewpicker-label">Sort by:</span>
      <Dropdown
        text={selection.text}
        icon={selection.icon}
        options={options}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};
ViewFilter.propTypes = propTypes;

export default ViewFilter;
