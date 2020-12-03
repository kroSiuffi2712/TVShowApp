import { Link } from "react-router-dom";
const LinkButton = (props) => {
  const { divStyle, title, path } = props;
  return (
    <div className={divStyle}>
      <Link className="btn link-button mt-2 mb-2" to={path}>
        {title}
      </Link>
    </div>
  );
};
export default LinkButton;
