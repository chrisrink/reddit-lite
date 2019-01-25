import React from "react";
import { storiesOf } from "@storybook/react";
import { DEFAULT_SUBS, DEFAULTS } from "../../../constants";
import Header from "../SubPicker";
import SubPicker from "../SubPicker";
import subResults from "../../../api/mock/subreddits.json";
import { invalid } from "moment";

const getOptions = search => {
  return subResults.data.children
    .filter(child => child.data.display_name.includes(search))
    .map(child => {
      const { display_name, title } = child.data;
      return {
        display_name,
        title
      };
    });
};

const stories = storiesOf("Header", module);

class Wrapper extends React.Component {
  state = {
    subreddit: DEFAULTS.subreddit,
    searchText: "",
    options: DEFAULT_SUBS,
    loading: false
  };

  handleChange = (e, { value }) => {
    const { subreddit, options } = this.state;
    if (value != subreddit.display_name) {
      const newValue = options.find(item => item.display_name === value);
      this.setState({ subreddit: newValue, searchText: "" });
    }
  };

  handleSearchChange = value => {
    const searchText = value;
    if (searchText.length >= 3) {
      this.setState({ loading: true, searchText: searchText });

      setTimeout(() => {
        this.setState({
          options: getOptions(searchText),
          loading: false
        });
      }, 300);
    } else {
      this.setState({
        options: DEFAULT_SUBS,
        searchText: searchText
      });
    }
  };

  render() {
    const { subreddit, options, loading, searchText } = this.state;
    return (
      <SubPicker
        value={subreddit}
        options={options}
        onChange={this.handleChange}
        onSearchChange={this.handleSearchChange}
        searchValue={searchText}
        searching={loading}
      />
    );
  }
}

stories.add("SubPicker", () => <Wrapper />);
