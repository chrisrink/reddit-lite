import { ACTIONS } from "../constants";

const initialState = {
  beforeList: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.RESET_BEFOREPOSTS:
      return {
        ...state,
        beforeList: []
      };

    case ACTIONS.RECIEVE_BEFOREPOSTS:
      const { list } = action.payload;

      return {
        ...state,
        beforeList: list
      };

    default:
      return state;
  }
}
