import React from "react";
import PropTypes from "prop-types";
import { Dropdown } from "semantic-ui-react";
import { VIEWS } from "../../constants";

const propTypes = {
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.string,
      icon: PropTypes.string
    })
  ),
  value: PropTypes.string
};

const defaultProps = {
  options: VIEWS
};
const ViewFilter = props => {
  const selection = props.options.find(option => option.value === props.value);

  return (
    <div className="viewpicker">
      <span className="viewpicker-label">Sort by:</span>
      <Dropdown
        text={(selection && selection.value) || ""}
        icon={(selection && selection.icon) || ""}
        options={props.options}
        onChange={props.onChange}
        value={props.value}
        direction={"left"}
      />
    </div>
  );
};
ViewFilter.propTypes = propTypes;
ViewFilter.defaultProps = defaultProps;

export default ViewFilter;
