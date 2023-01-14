import React from "react";
import { Link } from "react-router-dom";

function Reports() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-zinc-500 text-xl">صفحه مورد نظر یافت نشد</h1>
      <Link to={"/"}>
        <span className="text-[#2ed192]">صفحه اصلی </span>
      </Link>
    </div>
  );
}

export default Reports;
