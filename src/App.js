import React, { Component } from "react";
import RedditLogo from "./components/RedditLogo";
import "./styles/app.css";
import Post from "./components/Post";
import jsListings from "./api/mock/javascriptList.json";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="https://reddit.com">
            <RedditLogo />
            Reddit-Lite
          </a>
        </header>
        {jsListings.data.children.map(post => {
          return <Post {...post.data} />;
        })}
      </div>
    );
  }
}

export default App;
