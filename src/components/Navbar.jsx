import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div className=""></div>
            <div className="nav space-x-2">
                <Link to={'/'}>Home</Link>
                <Link to={'/career'}>Career</Link>
                <Link to={'/about'}>About</Link>
            </div> 
            <div className="login flex items-center gap-3">
           <div className="text-2xl"> <FaUserAlt /></div>    
            <button className="btn btn-neutral">Login</button>
            </div>           
        </div>
    );
};

export default Navbar;