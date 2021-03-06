import { useSelector } from "react-redux";
import { isEmptyObject } from "jquery";

import ImageContainer from "./ImageSeasonContainer";
import EpisodeContainer from "./EpisodeContainer";
import LinkButton from "../components/LinkButton";
import Loading from "../app/pages/Loading";

const { REACT_APP_IMAGE_PATH } = process.env;

const SeasonContainer = () => {
  const tvShow = useSelector((state) => state.tvShowDetails);

  if (isEmptyObject(tvShow.tvShowDetails)) return <Loading />;

  return (
    <div>
      <LinkButton path="/" title="Back" />
      <div className="card">
        <div className="card-body d-flex flex-row w-100">
          <ImageContainer
            path={
              isEmptyObject(tvShow.tvShowDetails.poster_path)
                ? ""
                : `${REACT_APP_IMAGE_PATH}${tvShow.tvShowDetails.poster_path}`
            }
            name={tvShow.tvShowDetails.name}
          />
          <EpisodeContainer
            tvShowId={tvShow.tvShowDetails.id}
            seasons={tvShow.tvShowDetails.seasons}
          />
        </div>
      </div>
    </div>
  );
};
export default SeasonContainer;
