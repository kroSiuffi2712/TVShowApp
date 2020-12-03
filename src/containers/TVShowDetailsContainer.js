import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
  fetchTVShowsDetails,
  resetTVShowDetails,
} from "../context/actions/tvShowDetailsAction";
import Season from "./SeasonContainer";

const TVShowsDetailsContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTVShowsDetails(id));

    //Clean up
    return dispatch(resetTVShowDetails());
  }, [dispatch, id]);

  return <Season id={id} />;
};
export default TVShowsDetailsContainer;
