import { ACTIONS, DEFAULT_SUBS } from "../constants";

const initialState = {
  list: DEFAULT_SUBS,
  loading: true,
  failed: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.REQUEST_SUBS:
      return {
        ...state,
        loading: true,
        failed: false
      };

    case ACTIONS.RECEIVE_SUBS_FAILED:
      return {
        ...state,
        loading: false,
        failed: true
      };

    case ACTIONS.RECIEVE_SUBS:
      const list = action.payload;

      return {
        ...state,
        loading: false,
        failed: false,
        list
      };

    default:
      return state;
  }
}
