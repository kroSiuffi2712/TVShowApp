import { tvShowsType } from "../../constants/index";

const initialState = {
  loading: false,
  tvShowDetails: {},
  error: "",
};

const tvShowDetails = (state = initialState, action) => {
  switch (action.type) {
    case tvShowsType.FETCH_TVSHOW_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case tvShowsType.FETCH_TVSHOW_DETAILS_SUCCESS:
      //delete the first position in the seasons.
      const tvShow = action.payload;
      const seasons = action.payload.seasons.filter(
        (s) => s.season_number !== 0
      );
      tvShow.seasons = seasons;
      //
      return {
        loading: false,
        tvShowDetails: tvShow,
        error: "",
      };
    case tvShowsType.FETCH_TVSHOW_DETAILS_FAILURE:
      return {
        loading: false,
        tvShowDetails: {},
        error: action.payload,
      };
    case tvShowsType.RESET_TVSHOW_DETAILS:
      return initialState;
    default:
      return state;
  }
};
export default tvShowDetails;
