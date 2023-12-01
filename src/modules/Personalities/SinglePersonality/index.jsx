import { useParams } from "react-router-dom";
import "./index.scss";

const SinglePersonality = () => {
  const { personality } = useParams();
  return <div>SinglePersonality</div>;
};

export default SinglePersonality;
