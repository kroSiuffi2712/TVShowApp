import { searchType } from "../../constants/searchType";

const initalState = {
  value: "",
  active: false,
};

const searchReducer = (state = initalState, action) => {
  switch (action.type) {
    case searchType.ADD_VALUE_TO_SEARCH:
      return {
        value: action.payload,
      };
    case searchType.RESET_SEARCH:
      return initalState;
    default:
      return state;
  }
};

export default searchReducer;
