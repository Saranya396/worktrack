import { NavLink } from "react-router-dom";

export default function Sidebar({ links, title }) {
  return (
    <div className="w-64 min-h-screen bg-white/5 backdrop-blur-md border-r border-white/10 p-6">
      
      <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-10">
        WorkTrack
      </h1>

      <div className="space-y-4">
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                  : "hover:bg-white/10"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}