import React, { useContext, useState } from "react";
import { context } from "../../../context/contextProvider";
import { ROUTES } from "../../../Routes";
import List from "../../elements/List";
import Profile from "../Profile";

function Sidebar({ isMobile }) {
  // const { menuOpen, ToggleMenu } = useContext(context);
  const [fullScreen, setFullScreen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* <div className="lg:hidden lg:sidebar-expanded:block 2xl:block"> */}
      <div
        className={`w-full hidden ${
          fullScreen ? "md:w-[300px]" : "md:w-[100px]"
        } md:flex flex-col justify-around align-center items-center h-auto md:h-screen w-full  bg-[#1d212d] text-[#596072]`}
      >
        <div className="pb-4 flex flex-col justify-around w-full">
          <div className="text-center pb-16">
            {fullScreen ? (
              <button
                className="text-3xl hover:text-[#2ed192]"
                onClick={() => setFullScreen(false)}
              >
                <ion-icon name="close-outline"></ion-icon>
              </button>
            ) : (
              <button
                onClick={() => setFullScreen(true)}
                className="text-3xl hover:text-[#2ed192]"
              >
                <ion-icon name="menu-outline"></ion-icon>
              </button>
            )}
          </div>
          <List ListData={ROUTES} fullScreen={fullScreen} />
        </div>
        <div className="w-full border-t pt-9 border-[#596072]">
          <Profile fullScreen={fullScreen} />
        </div>
      </div>

      <div
        className={` md:hidden relative transition duration-1000
  
    w-full flex flex-col-reverse justify-around align-end bg-[#1d212d] text-[#596072]`}
      >
        {mobileMenuOpen ? (
          <>
            <div className=" pb-4 flex flex-col justify-around ">
              <button
                className="absolute top-6 left-11 text-3xl hover:text-[#2ed192]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ion-icon name="close-outline"></ion-icon>
              </button>

              <List
                ListData={ROUTES}
                fullScreen={fullScreen}
                mobileMenuOpen={mobileMenuOpen}
              />
            </div>
            <div className="w-full border-t pt-9 border-[#596072]">
              <Profile fullScreen={fullScreen} />
            </div>
          </>
        ) : (
          <div className=" flex flex-row p-2 justify-between transition duration-1000">
            <span className="text-3xl text-[#2ed192]">
              <ion-icon name="leaf-outline"></ion-icon>
            </span>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className=" text-3xl hover:text-[#2ed192]"
            >
              <ion-icon name="menu-outline"></ion-icon>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Sidebar;
