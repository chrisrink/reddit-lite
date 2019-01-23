import React, { PureComponent } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import Header from "./components/Header";
import "./styles/app.css";
import PostList from "./components/PostList";
import jsListings from "./api/mock/javascriptList.json";
import epListings from "./api/mock/earthPornList.json";
const list = [...jsListings.data.children, ...epListings.data.children];
class App extends PureComponent {
  renderSub = ({ match }) => {
    return (
      <div className="App">
        <Header subbreddit={match.params.subbreddit} view={match.params.view} />
        <PostList
          list={list}
          subbreddit={match.params.subbreddit}
          view={match.params.view}
        />
      </div>
    );
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/:subreddit" render={this.renderSub} />
          <Redirect from="/" to="/all" exact={true} />
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
