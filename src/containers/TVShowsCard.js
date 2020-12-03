import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { isEmptyObject } from "jquery";
import { useSelector } from "react-redux";

import CircularProgress from "../components/CircularProgress";
import NoResultFound from "../app/pages/NoResultFound";
import BadRequest from "../app/pages/BadRequest";
import Loading from "../app/pages/Loading";
import TVShowCast from "./TVShowCast";
import { useWindowEvent } from "../helpers/useWindowEvent";

const { REACT_APP_IMAGE_PATH } = process.env;

const TVShowsCard = () => {
  const tv = useSelector((state) => state.tvShows);
  const itemsPerPage = 9;
  const [offset, setOffset] = useState(itemsPerPage);
  //const dispatch = useDispatch();

  const handleOnScroll = () => {
    if (!isEmptyObject(tv.tvShows)) {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if (offset < tv.tvShows.length) {
          setOffset(offset + itemsPerPage);
        }
      }
    }
  };

  //Register a window listener
  useWindowEvent("scroll", handleOnScroll);

  useEffect(() => {
    if (!isEmptyObject(tv.tvShows)) {
      resetValues();
    }
  }, [tv.tvShows]);

  const resetValues = () => {
    setOffset(itemsPerPage);
  };

  //No result found
  if (!isEmptyObject(tv.error)) return <BadRequest message={tv.error} />;

  //checking if the movies object is empty.
  if (isEmptyObject(tv.tvShows)) return <Loading />;

  //No result found
  if (tv.tvShows.total_results === 0) return <NoResultFound />;

  //Current tvShows
  const tvShows = tv.tvShows.slice(0, offset);
  return (
    <div className="d-flex flex-column">
      <div className="container-card d-flex flex-wrap justify-content-center m-auto">
        {tvShows.map((item) => (
          <div key={`flip-card-${item.id}`} className="flip-card">
            <div key={`flip-card-inner-${item.id}`} className="flip-card-inner">
              <div
                key={`flip-card-front-${item.id}`}
                className="d-flex flip-card-front m-0"
              >
                <img
                  className="img-flip-card"
                  src={
                    isEmptyObject(item.poster_path)
                      ? ""
                      : `${REACT_APP_IMAGE_PATH}${item.poster_path}`
                  }
                  alt=""
                />
              </div>
              <div className="flip-card-back d-flex flex-column justify-content-center align-items-center">
                <CircularProgress
                  divStyle="average"
                  value={item.vote_average}
                  maxValue={10}
                  text={`${item.vote_average * 10}%`}
                  backgroundPadding={6}
                  styles={{
                    backgroundColor: "#3e98c7",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                  }}
                  title="Vote Average"
                />
                <TVShowCast cast={item.cast} />
              </div>
            </div>
            <Link to={`/tvShow/${item.id}`}>
              <div className="title d-flex justify-content-center align-items-center">
                <h6 className="m-0">{item.name}</h6>
                <i className="fa fa-external-link ml-2" aria-hidden="true"></i>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {offset < tv.tvShows.length ? (
        <div className="data-loading">
          <i className="fa fa-refresh fa-spin"></i>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default TVShowsCard;
