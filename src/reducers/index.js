import { combineReducers } from "redux";
import posts from "./posts";
import subreddits from "./subreddits";

export default combineReducers({ posts, subreddits });
export { posts, subreddits };
