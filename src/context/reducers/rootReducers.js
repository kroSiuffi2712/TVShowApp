import { combineReducers } from "redux";

import tvShows from "./tvShowsReducer";
import search from "./searchReducer";
import tvShowDetails from "./tvShowDetailsReducer";

const rootReducers = combineReducers({
  tvShows,
  search,
  tvShowDetails,
});

export default rootReducers;
