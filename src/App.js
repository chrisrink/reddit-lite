import React, { Component } from "react";
import Header from "./components/Header";
import "./styles/app.css";
import PostList from "./components/PostList";
import jsListings from "./api/mock/javascriptList.json";
import epListings from "./api/mock/earthPornList.json";
const list = [...jsListings.data.children, ...epListings.data.children];
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PostList list={list} />
      </div>
    );
  }
}

export default App;
