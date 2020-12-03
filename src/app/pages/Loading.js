import { useEffect, useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";

const Loading = () => {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setShowLoading(null), 5000);

    // clean up Timeout when component unmount.
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <PulseLoader color={"#363430"} loading={true} />
    </div>
  );
};
export default Loading;
