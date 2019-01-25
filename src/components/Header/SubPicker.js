import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Input, Dropdown } from "semantic-ui-react";
import { DEFAULT_SUBS } from "../../constants";

class SubPicker extends PureComponent {
  static propTypes = {
    /**
     * Callback fired when a new subreddit is selectect.
     * @param {Synthetic Event}
     */
    onChange: PropTypes.func,
    onSearchChange: PropTypes.func,
    searchValue: PropTypes.string,
    searching: PropTypes.bool,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        display_name: PropTypes.string
      })
    ),

    /**
     * The key of the select subreddit
     */
    value: PropTypes.shape({
      title: PropTypes.string,
      display_name: PropTypes.string
    })
  };

  static defaultProps = {
    options: [DEFAULT_SUBS]
  };

  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  handleOpen = () => {
    setTimeout(() => {
      if (this.input.current) {
        this.input.current.focus();
      }
    }, 10);
  };

  render() {
    const {
      options,
      value,
      onSearchChange,
      onChange,
      searchValue,
      searching
    } = this.props;

    const handleSearchChange = (e, { value }) => {
      if (onSearchChange) {
        onSearchChange(value);
      }
    };

    return (
      <Dropdown
        text={value.title}
        className="subpicker"
        onOpen={this.handleOpen}
        closeOnBlur={false}
      >
        <Dropdown.Menu key="sub-input">
          <Input
            icon="search"
            iconPosition="left"
            className="search"
            placeholder="Search for a Subreddit"
            onChange={handleSearchChange}
            value={searchValue}
            loading={searching}
            ref={this.input}
          />
          <Dropdown.Menu scrolling key="sub-list">
            {options.map(option => (
              <Dropdown.Item
                key={option.display_name}
                text={option.title}
                value={option.display_name}
                onClick={onChange}
              />
            ))}
          </Dropdown.Menu>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default SubPicker;
