import { ACTIONS } from "../constants";

const initialState = {
  loading: true,
  failed: false,
  postsByOrder: [],
  postsbyName: {},
  topPost: undefined,
  lastPost: undefined,
  listFailed: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.REQUEST_POSTS:
      return {
        ...state,
        loading: action.payload.loadCenter,
        postsByOrder: [],

        failed: false
      };

    case ACTIONS.RECIEVE_POSTS_FAILED:
      return {
        ...state,
        loading: false,
        failed: true
      };

    case ACTIONS.RECIEVE_POSTS:
      const { postsByName, postsByOrder, nextPost, reload } = action.payload;

      return {
        ...state,
        loading: false,
        failed: false,

        postsByOrder: reload
          ? postsByOrder
          : [...state.postsByOrder, ...postsByOrder],

        postsByName: reload
          ? postsByName
          : { ...state.postsByName, ...postsByName },
        lastPost: nextPost
      };

    default:
      return state;
  }
}
