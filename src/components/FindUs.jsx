import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold py-4">Login With</h2>
      <div className="join flex join-vertical">
        <button className="btn join-item bg-white border-gray-200 justify-start">
        <FaFacebook></FaFacebook> FaceBook
        </button>
        <button className="btn join-item bg-white border-gray-200 justify-start">
        <BsTwitter></BsTwitter> Twitter
        </button>
        <button className="btn join-item bg-white border-gray-200 justify-start">
        <BsInstagram></BsInstagram> Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
