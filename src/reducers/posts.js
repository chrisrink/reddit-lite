import { ACTIONS } from "../constants";

const initialState = {
  loading: true,
  loadingNext: false,
  failed: false,
  postsByOrder: [],
  postsbyName: {},
  before: undefined,
  after: undefined,
  listFailed: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.REQUEST_POSTS:
      return {
        ...state,
        loading: action.payload.loading,
        loadingNext: action.payload.loadingNext,
        failed: false
      };

    case ACTIONS.CLEAR_POSTS:
      return {
        ...state,
        postsByOrder: []
      };

    case ACTIONS.RECIEVE_POSTS_FAILED:
      return {
        ...state,
        loading: false,
        failed: true
      };

    case ACTIONS.RECIEVE_POSTS:
      const {
        postsByName,
        postsByOrder,
        after,
        loading,
        loadingNext
      } = action.payload;

      return {
        ...state,
        loading,
        loadingNext,
        failed: false,
        postsByOrder: [...state.postsByOrder, ...postsByOrder],
        postsByName: { ...state.postsByName, ...postsByName },
        after
      };

    case ACTIONS.ADD_NEW_POSTS:
      return {
        ...state,
        postsByOrder: [...action.payload.postsByOrder, ...state.postsByOrder],
        postsByName: { ...action.payload.postsByName, ...state.postsByName }
      };

    default:
      return state;
  }
}
