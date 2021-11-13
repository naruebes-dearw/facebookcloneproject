import "./Body.css";
import BodyCenter from "./bodyCenter/BodyCenter";
import BodyLeft from "./bodyLeft/BodyLeft";
import BodyRight from "./bodyRight/BodyRight";

const Body = () => {
  return (
    <div className="body">
      <BodyLeft />
      <BodyCenter />
      <BodyRight />
    </div>
  )
}

export default Body
