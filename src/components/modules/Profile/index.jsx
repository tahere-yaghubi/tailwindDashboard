import React from "react";
import profile from "../../../assets/prof.jpg";
function Profile({ fullScreen, isMobile }) {
  return (
    <>
      <div className="md:hidden flex flex-row justify-end">
        {(fullScreen || isMobile) && (
          <button className="mt-1 p-3">
            <ion-icon name="caret-down-outline"></ion-icon>
          </button>
        )}

        <div className=" rounded-full w-12 h-12  overflow-hidden mr-14">
          <img src={profile} alt="profile-pic" className="w-full h-full" />
        </div>
        <div> </div>
      </div>

      <div className="hidden md:flex flex-row justify-center ">
        {(fullScreen || isMobile) && (
          <button className="mt-1 p-3">
            <ion-icon name="caret-down-outline"></ion-icon>
          </button>
        )}

        <div className=" rounded-full w-12 h-12  overflow-hidden">
          <img src={profile} alt="profile-pic" className="w-full h-full" />
        </div>
        <div> </div>
      </div>
    </>
  );
}

export default Profile;
