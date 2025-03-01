import React, { useState } from "react";
import Logo from "./../assets/Logo.png";
import arrow from "./../assets/arrow.png";
// import {motion } from "motion";
import {
  LayoutDashboard,
  Clock3,
  BarChart,
  ArrowLeft,
  HelpCircleIcon,
} from "lucide-react";

// const varients={
//   expanded:{width:"20%"},
//   nonExpanded:{widtg:"5%"}


// }

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
  const [NavActive, SetNavActive] = useState(0);
  // const [isExpanded,setexpanded]=useState(false);
  return (
    <div 
    // animate={
    //   isExpanded?"expanded": "nonExpanded"
    // }
    // varients={varients}
    className="px-10 py-12 flex flex-col border border-r-2 w-1/5 h-screen relative  ">
      <div className="logo-div flex space-x-3 items-center">
        <img src={Logo} />
        <span>Money Tracker </span>
      </div>

      {/* <div  className="bg-[#FF8c8c] w-5 h-5 rounded-full absolute -right-3">
        <img src={arrow} />
      </div> */}
      <div className="mt-9 flex flex-col space-y-9">
        {navlinks.map((items, index) => (
          <div
            key={index}
            className={
              "flex space-x-3 p-2 rounded" +
              (NavActive === index
                ? "text-white font-semibold bg-[#FF8c8c] rounded-xl"
                : "")
            }
            onClick={() => SetNavActive(index)}
          >
            <items.icon />

            <span>{items.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navigatorbar;
