import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="relative flex font-mono">
          <div className="h-screen w-[20%] bg-blue-400 relative overflow-hidden">
            <h3 className="text-4xl text-black pt-10 pl-10 space-y-3">Tharindu</h3>
            <ul className="text-2xl text-gray-950 pt-20 pl-10 space-y-3">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full bg-slate-700 h-screen">
            <Outlet />
          </div>
      </div>
    );
};

export default Dashboard;