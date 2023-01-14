import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { getItemLocalStorage } from "../../../Utilities/getItemLocalStorage";
import Search from "../Search";

function MainNav() {
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState(false);
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || ""
  );

  useEffect(() => {
    console.log(userName);
    getItemLocalStorage("userName", userNameHandler);
  }, []);
  const userNameHandler = (value) => setUserName(value);
  return (
    <>
      {modal && <Search modal={modal} setModal={() => setModal(false)} />}

      <div className="w-full flex justify-between flex-row p-4 bg-white h-16">
        <a href="/" className="hidden lg:block text-3xl text-[#2ed192]">
          <ion-icon name="leaf-outline"></ion-icon>
        </a>

        <div className="flex justify-between flex-row text-3xl text-slate-300">
          <span className="mr-2 mb-4 text-2xl text-slate-400">{userName}</span>
          <button
            onClick={() => setModal(true)}
            className="hover:text-slate-400"
          >
            <ion-icon name="search-outline"></ion-icon>
          </button>

          <button className="relative px-3 hover:text-slate-400">
            <ion-icon name="notifications-outline"></ion-icon>
            <span className="flex h-3 w-3 top-2 right-7 absolute">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
            </span>
          </button>

          <button className="hover:text-slate-400">
            <ion-icon name="exit-outline">
              {/* <Navigate to="/login" /> */}
            </ion-icon>
          </button>
        </div>
      </div>
    </>
  );
}

export default MainNav;
