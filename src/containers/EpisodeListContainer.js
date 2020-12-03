import { useSelector } from "react-redux";
import { isEmptyObject } from "jquery";

import { customDateformatted } from "../helpers/dateFormat";

const EpisodeListContainer = (props) => {
  const { seasonId } = props;
  const tvShow = useSelector((state) => state.tvShowDetails);

  if (isEmptyObject(tvShow.tvShowDetails)) return <div>Loading...</div>;
  const index = tvShow.tvShowDetails.seasons.findIndex(
    (item) => item.season_number === seasonId
  );

  const episodes = tvShow.tvShowDetails.seasons[index].episodes;

  return (
    <div id="accordion" className="">
      {episodes.map((item, index) => (
        <div key={`card-${index}`} className="card">
          <div className="card-header p-0" id={`heading-${index}`}>
            <h5 className="mb-0">
              <button
                className={`btn btn-link ${index === 0 ? "" : "collapsed"}`}
                data-toggle="collapse"
                data-target={`#collapse-${index}`}
                aria-expanded="false"
                aria-controls={`collapse-${index}`}
              >
                {`${index + 1}. ${item.name}`}
              </button>
            </h5>
          </div>

          <div
            id={`collapse-${index}`}
            className="collapse"
            aria-labelledby={`heading-${index}`}
            data-parent="#accordion"
          >
            <div className="card-body">
              Aired on <strong>{customDateformatted(item.air_date)}</strong>
              <br className="mt-2" />
              {item.overview}
              <br className="mb-2" />
              <i className="fa fa-heart mr-1" aria-hidden="true"></i>
              {`${item.vote_average * 10}%`}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default EpisodeListContainer;
