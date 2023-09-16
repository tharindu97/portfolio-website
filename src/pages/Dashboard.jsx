import { Link, Outlet } from "react-router-dom";
import { IoPersonCircleSharp, IoSchoolSharp, IoBriefcaseSharp, IoGridSharp, IoRocketSharp } from "react-icons/io5";

const Dashboard = () => {
    return (
        <div className="relative flex font-mono">
          <div className="h-screen w-[20%] bg-neutral-900 relative overflow-hidden">
            <h3 className="text-3xl text-gray-200 pt-10 pl-10 space-y-3"><Link to="/">Tharindu</Link></h3>
            <ul className="text-1xl text-gray-200 pt-20 pl-10 space-y-3">
                <li className="hover:text-gray-500"><Link to="/" className="inline-flex items-center w-full"><IoPersonCircleSharp className="h-5 w-5 mr-2 text-blue-600"/>Profile</Link></li>
                <li className="hover:text-gray-500"><Link to="/education" className="inline-flex items-center w-full"><IoSchoolSharp className="h-5 w-5 mr-2 text-green-600"/>Education</Link></li>
                <li className="hover:text-gray-500"><Link to="/experience" className="inline-flex items-center w-full"><IoBriefcaseSharp className="h-5 w-5 mr-2 text-orange-600"/>Experience</Link></li>
                <li className="hover:text-gray-500"><Link to="/portfolio" className="inline-flex items-center w-full"><IoGridSharp className="h-5 w-5 mr-2 text-pink-600"/>Portfolio</Link></li>
                <li className="hover:text-gray-500"><Link to="/contact" className="inline-flex items-center w-full"><IoRocketSharp className="h-5 w-5 mr-2 text-yellow-500"/>Contact</Link></li>
            </ul>
          </div>
          <div className="w-full  bg-stone-900 h-screen">
            <Outlet />
          </div>
      </div>
    );
};

export default Dashboard;