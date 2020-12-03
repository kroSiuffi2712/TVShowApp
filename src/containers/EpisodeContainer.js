import EpisodeList from "./EpisodeListContainer";
import ToolBarButton from "../components/ToolBarButton";
import { useState } from "react";

const EpisodeContainer = (props) => {
  const { tvShowId, seasons } = props;
  const [seasonId, setSeason] = useState(1);

  const handleClick = (value) => {
    setSeason(value);
  };

  return (
    <div className="episodes-container d-flex flex-column ml-2 w-100 pl-5 pr-5 overflow-auto">
      <h2 className="card-title mb-2 align-self-center">
        <strong>SEASONS</strong>
      </h2>
      <ToolBarButton
        tvShowId={tvShowId}
        array={seasons}
        handleClick={handleClick}
      />
      <div className="">
        <EpisodeList seasonId={seasonId} />
      </div>
    </div>
  );
};
export default EpisodeContainer;
