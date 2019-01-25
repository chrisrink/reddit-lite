import { combineReducers } from "redux";
import posts from "./posts";
import subreddits from "./subreddits";
import updates from "./updates";

export default combineReducers({ posts, subreddits, updates });
export { posts, subreddits, updates };
