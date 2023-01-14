import React from "react";
import { NavLink } from "react-router-dom";

function NavItem({ item, fullScreen }) {
  const { Icon, title, path } = item;
  return (
    <>
      <NavLink
        to={path}
        className={`p-3 flex justify-center items-center font-bold hover:text-[#2ed192]`}
      >
        {fullScreen && <span className=" px-4">{title}</span>}
        {/* <ion-icon
                  name={el.icon}
                  className="mt-2 "
                  style={{ margin: "10px", fontSize: "1.6rem" }}
                /> */}
        <Icon customClass="hover:inherit" />
      </NavLink>

      {/* <NavLink
                to={el.path}
                className="p-2 flex flex-row justify-end align-center hover:text-[#2ed192]"
              >
                <span className="mt-3 px-4">{el.title}</span>
                <ion-icon
                  name={el.icon}
                  className="mt-2 "
                  style={{ margin: "10px", fontSize: "1.6rem" }}
                />
              </NavLink> */}
    </>
  );
}

export default NavItem;
