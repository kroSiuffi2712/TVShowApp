import { tvShowsType } from "../../constants/index";

const initialState = {
  loading: false,
  tvShows: {},
  error: "",
};

const tvShowsReducer = (state = initialState, action) => {
  switch (action.type) {
    case tvShowsType.FETCH_TVSHOWS_REQUEST:
      return {
        loading: true,
      };
    case tvShowsType.FETCH_TVSHOWS_SUCCESS:
      return {
        loading: false,
        tvShows: action.payload,
        error: "",
      };
    case tvShowsType.FETCH_TVSHOWS_FAILURE:
      return {
        loading: false,
        tvShows: {},
        error: action.payload,
      };
    case tvShowsType.RESET_TVSHOWS_LIST:
      return initialState;
    default:
      return state;
  }
};

export default tvShowsReducer;
