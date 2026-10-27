import { NavLink } from "react-router-dom";
import {House,Archive,BookOpen,History,Ellipsis,Settings,Sparkles } from "lucide-react";

function Sidebar() {
  const links = [
      { name: "Home", path: "/", icon: House },
      { name: "Archived", path: "/archived", icon: Archive },
      { name: "Library", path: "/library", icon: BookOpen },
      { name: "History", path: "/history", icon: History },
      { name: "Explore", path: "/explore", icon: Ellipsis },
  ];

  const Other = [
      { name: "Setting", path: "/setting", icon: Settings },
      { name: "Upgrade", path: "/upgrade", icon: Sparkles},
  ];

  return (
      <>
              {/* MAIN TAB */} 

 
 <div className="h-screen"> 
  
  <div className="w-[30%] font-orbitron text-xs font-semibold text-[#EEEBD9] opacity-40">General </div>

    <div className="ml-5 mt-4 flex w-[80%] flex-col gap-2 font-orbitron text-xs text-[#E3E3E3]">
      {links.map((link) => {
        const Icon = link.icon;

        return (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-3 cursor-pointer rounded-lg px-3 py-2 border border-white/20 transition-all duration-200 ${
                isActive
                  ? "bg-black/40"
                  : " hover:bg-black/40 transition-all duration-200 cursor-pointer text-[#E3E3E3]"
              }`
            }
          >
            <Icon size={20} />
            {link.name}
          </NavLink>
        );
      })}
    </div>

    {/* OTHER TAB */}
    
    <div className="absolute bottom-0 mb-3 w-53">
      <div className="w-[30%] font-orbitron text-xs text-[#EEEBD9] opacity-40">
        Others
      </div>

      <div className="ml-5 mt-2 flex w-[81%] flex-col gap-2.5 font-orbitron text-xs text-white">
        {Other.map((link) => {
          const Icon = link.icon;

          return (

            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-3 cursor-pointer rounded-lg px-3 py-2 border border-white/20 transition-all duration-200 ${
                  isActive
                    ? "bg-black/40"
                    : " hover:bg-black/40 transition-all duration-200 cursor-pointer text-[#E3E3E3]"
                }`
              }
            >
              <Icon size={20} className={link.color || ""} />

              <span className={link.color || ""}>
                {link.name}
              </span>
            </NavLink>
          );
        })}
      </div>
    </div>
  </div>
</>
);
}

export default Sidebar;

