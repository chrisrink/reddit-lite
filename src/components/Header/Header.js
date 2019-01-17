import React from "react";
import RedditLogo from "../RedditLogo/RedditLogo";
import "./header.css";

const Header = props => {
  return (
    <header className="app-header">
      <a href="https://reddit.com">
        <RedditLogo />
      </a>
    </header>
  );
};

export default Header;
