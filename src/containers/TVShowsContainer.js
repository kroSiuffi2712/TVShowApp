import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchTVShows } from "../context/actions/tvShowsAction";

import TVShowsCard from "./TVShowsCard";

const TVShowsContainer = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);

  useEffect(() => {
    (async () => {
      await dispatch(fetchTVShows(search.value));
    })();
  }, [dispatch, search.value]);

  return <TVShowsCard />;
};

export default TVShowsContainer;
