import { tvShowsType } from "../../constants/index";
import axiosInstance from "../../helpers/axios";

import { mergeArrayObjectsById } from "../../helpers/arrayFunction";

export const fetchTVShowsRequest = () => {
  return {
    type: tvShowsType.FETCH_TVSHOWS_REQUEST,
  };
};

export const fetchTVShowsSuccess = (tvShows) => {
  return {
    type: tvShowsType.FETCH_TVSHOWS_SUCCESS,
    payload: tvShows,
  };
};

export const fetchTVShowsFailure = (error) => {
  return {
    type: tvShowsType.FETCH_TVSHOWS_FAILURE,
    payload: error,
  };
};

export const resetTVShowL = () => {
  return {
    type: tvShowsType.RESET_TVSHOWS_LIST,
  };
};

export const fetchTVShows = (value) => {
  return async (dispatch) => {
    dispatch(fetchTVShowsRequest());
    const path = "/search/tv?query=" + value;
    await axiosInstance
      .get(path)
      .then((response) => {
        const data = response.data;
        const promises = data.results.map(async (item) => {
          return await axiosInstance
            .get(`/tv/${item.id}/credits`)
            .then((res) => res.data);
        });
        Promise.all(promises).then((credits) => {
          const mergeArrays = mergeArrayObjectsById(credits, data.results);
          dispatch(fetchTVShowsSuccess(mergeArrays));
        });
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchTVShowsFailure(errorMsg));
      });
  };
};

export const resetTVShowList = () => {
  return (dispatch) => {
    dispatch(resetTVShowL());
  };
};
