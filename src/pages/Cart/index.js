import React from "react";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-zinc-500 text-xl">صفحه مورد نظر تکمیل نشده </h1>
      <Link to={"/"}>
        <span className="text-[#2ed192]">صفحه اصلی </span>
      </Link>
    </div>
  );
}

export default Cart;
