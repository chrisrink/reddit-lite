import React from "react";
import PropTypes from "prop-types";
import { Input, Dropdown } from "semantic-ui-react";

const options = [
  {
    text: "All",
    value: "all"
  },
  {
    text: "JavaScript",
    value: "javascript"
  }
];

const propTypes = {
  /**
   * Callback fired when a new subreddit is selectect.
   * @param {Synthetic Event}
   */
  onChange: PropTypes.func,

  options: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      text: PropTypes.string,
      value: PropTypes.string
    })
  ),

  /**
   * The key of the select subreddit
   */
  value: PropTypes.string
};

const SubPicker = props => {
  const selection = options.find(item => item.value === props.value);
  return (
    <Dropdown
      text={selection.text}
      icon={selection.icon}
      className="subpicker"
      options={options}
      onChange={props.onChange}
      value={props.value}
    >
      <Dropdown.Menu>
        <Input icon="search" iconPosition="left" className="search" />
        <Dropdown.Divider />
        <Dropdown.Menu scrolling>
          {options.map(option => (
            <Dropdown.Item key={option.value} text={option.text} />
          ))}
        </Dropdown.Menu>
      </Dropdown.Menu>
    </Dropdown>
  );
};
SubPicker.propTypes = propTypes;

export default SubPicker;
