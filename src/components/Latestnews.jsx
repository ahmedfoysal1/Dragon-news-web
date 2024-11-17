import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Latestnews = () => {
    return (
        <div className="flex gap-3 items-center justify-center bg-base-200 p-2">
            <p className="bg-[#D72050] text-gray-200 px-3 py-1">latest</p>       
            <Marquee pauseOnHover={true} speed={100} className="space-x-10">
                <Link to={'/news'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, obcaecati</Link>
                <Link to={'/news'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, obcaecati</Link>
                <Link to={'/news'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, obcaecati</Link>
            </Marquee>    
        </div>
    );
};

export default Latestnews;