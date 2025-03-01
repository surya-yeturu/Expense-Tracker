import React from "react";

function Dashboard() {
  return (
    <div className="py-12 px-14 flex flex-col  ">
      <h1>DashBoard</h1>
      <div className="flex space-x-8">
        <div className="  border w-2/5 h-[150px] border-gray-500 rounded justify-center p-4 mt-5">
          <span> surya_yeturu</span>
          <span className="text-gray-500"> your Balence :Rs 40000 </span>
        </div>
        <div className="  border w-2/5 h-[150px] border-gray-500 rounded justify-center p-4 mt-5">
          <span> surya_yeturu</span>
          <span className="text-gray-500"> your Expense is :Rs 40000 </span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
