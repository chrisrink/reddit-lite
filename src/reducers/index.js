import { combineReducers } from "redux";
import posts from "./posts";
import views from "./views";
import subreddits from "./subreddits";

export default combineReducers({ posts, views, subreddits });
export { posts, views, subreddits };
