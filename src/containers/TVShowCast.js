import { isEmptyObject } from "jquery";

const TVShowCast = (props) => {
  const { cast } = props;

  if (isEmptyObject(cast)) return <></>;

  const firtsCast = cast.slice(0, 3);

  return (
    <div className="d-flex flex-column justify-content-center">
      <small className="mt-2 mb-2">Cast: </small>
      <div className="d-flex flex-column justify-content-center">
        {firtsCast.map((item) => (
          <small key={item.id}>{item.name}</small>
        ))}
      </div>
    </div>
  );
};
export default TVShowCast;
