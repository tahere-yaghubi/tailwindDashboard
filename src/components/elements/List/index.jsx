import React from "react";
import { NavLink } from "react-router-dom";
import NavItem from "../NavItem";

function List({ ListData, fullScreen }) {
  return (
    <>
      <ul className="hidden md:block w-full">
        {ListData.map((item) => {
          return (
            <li
              key={item.id}
              className={`w-full flex ${
                fullScreen ? "justify-end" : "justify-center"
              } flex-row  align-center  border-r-4 hover:border-r-4 border-[#1d212d] hover:border-[#2ed192] px-10`}
            >
              <NavItem item={item} fullScreen={fullScreen}/>
            </li>
          );
        })}
      </ul>

      <ul className="md:hidden w-full">
        {ListData.map((el) => {
          return (
            <li
              key={el.id}
              className="w-full border-r-4 hover:border-r-4 border-[#1d212d] hover:border-[#2ed192]  px-10"
            >
              <NavLink
                to={el.path}
                className="p-2 flex flex-row justify-end align-center hover:text-[#2ed192]"
              >
                <span className="mt-3 px-4">{el.title}</span>
                <ion-icon
                  name={el.icon}
                  className="mt-2 "
                  style={{ margin: "10px", fontSize: "1.6rem" }}
                />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default List;
