import swim from "../assets/swimming.png";
import classs from "../assets/class.png";
import playground from "../assets/playground.png";
import bgg from "../assets/bg.png";

const Qzone = () => {
  return (
    <div>
      <div className="bg-gray-100 p-2">
        <p className="font-bold">Q-zone</p>
        <div className="space-y-5 p-3">
          <div>
            <img src={swim} alt="" />
          </div>
          <div>
            <img src={classs} alt="" />
          </div>
          <div>
            <img src={playground} alt="" />
          </div>
        </div>
      </div>
      <div className="py-3">
        <img src={bgg} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
