import { CircularProgressbar } from "react-circular-progressbar";
import { buildStyles } from "react-circular-progressbar";

const CircularProgress = (props) => {
  const {
    value,
    maxValue,
    text,
    backgroundPadding,
    styles,
    title,
    divStyle,
  } = props;
  return (
    <div
      className={`${divStyle} mb-2 d-flex flex-row justify-content-center align-items-center`}
    >
      <CircularProgressbar
        value={value}
        maxValue={maxValue}
        text={text}
        background
        backgroundPadding={backgroundPadding}
        styles={buildStyles(styles)}
      />
      <small className="mr-2 ml-2">{title}</small>
    </div>
  );
};
export default CircularProgress;
