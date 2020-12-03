import axiosInstance from "../../helpers/axios";

import { tvShowsType } from "../../constants/index";
import { mergeArrayObjectsById } from "../../helpers/arrayFunction";

export const fetchTVShowDetailsRequest = () => {
  return {
    type: tvShowsType.FETCH_TVSHOW_DETAILS_REQUEST,
  };
};

export const fetchTVShowDetailsSuccess = (tvShow) => {
  return {
    type: tvShowsType.FETCH_TVSHOW_DETAILS_SUCCESS,
    payload: tvShow,
  };
};

export const fetchTVShowDetailsFailure = (error) => {
  return {
    type: tvShowsType.FETCH_TVSHOW_DETAILS_FAILURE,
    payload: error,
  };
};

export const resetTVShow = () => {
  return {
    type: tvShowsType.RESET_TVSHOW_DETAILS,
  };
};

export const fetchTVShowsDetails = (id) => {
  return async (dispatch) => {
    dispatch(fetchTVShowDetailsRequest);
    await axiosInstance
      .get(`/tv/${id}`)
      .then((response) => {
        const data = response.data;
        const tvShow = {
          id: data.id,
          name: data.name,
          poster_path: data.poster_path,
          seasons: data.seasons,
        };
        const promises = tvShow.seasons.map(async (item) => {
          return await axiosInstance
            .get(
              `https://api.themoviedb.org/3/tv/${id}/season/${item.season_number}?api_key=b2907782d07859a652052d3bae537475`
            )
            .then((res) => res.data);
        });
        Promise.all(promises).then((episodes) => {
          const seasonsWithEpisodes = mergeArrayObjectsById(
            episodes,
            tvShow.seasons
          );
          const tvShowDetails = {
            id: tvShow.id,
            name: tvShow.name,
            poster_path: tvShow.poster_path,
            seasons: seasonsWithEpisodes,
          };
          dispatch(fetchTVShowDetailsSuccess(tvShowDetails));
        });
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchTVShowDetailsFailure(errorMsg));
      });
  };
};

export const resetTVShowDetails = () => {
  return (dispatch) => {
    dispatch(resetTVShow());
  };
};
