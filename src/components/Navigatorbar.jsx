import React from "react";
import Logo from "./../assets/Logo.png";
import {
  LayoutDashboard,
  Clock3,
  BarChart,
  ArrowLeft,
  HelpCircleIcon,
} from "lucide-react";

const navlinks = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Activity",
    icon: Clock3,
  },
  {
    name: "Analytics",
    icon: BarChart,
  },
  {
    name: "Transactions",
    icon: ArrowLeft,
  },
  {
    name: "Help Center",
    icon: HelpCircleIcon,
  },
];

function Navigatorbar() {
  return (
    <div className="px-10 py-12 flex flex-col border border-r-2 w-1/5 h-screen  ">
      <div className="logo-div flex space-x-3 items-center">
        <img src={Logo} />
        <span>Money Tracker </span>
      </div>

      <div className="mt-9 flex flex-col space-y-9">
        {navlinks.map((items, index) => (
          <div key={index}>
            <items.icon className=" flex space-x-3"/>
           
            <span>{items.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navigatorbar;
