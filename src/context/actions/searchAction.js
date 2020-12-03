import { searchType } from "../../constants/index";

export const addValue = (value) => {
  return {
    type: searchType.ADD_VALUE_TO_SEARCH,
    payload: value,
  };
};

export const resetValue = () => {
  return {
    type: searchType.RESET_SEARCH,
  };
};

export const addValueToSearch = (value) => {
  return (dispatch) => {
    dispatch(addValue(value));
  };
};
