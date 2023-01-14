import React from "react";

function UserCard({ user }) {
  const { name, email, company } = user;
  console.log(user, "user");
  return (
    <div className="w-full border-b p-2 hover:cursor-pointer flex md:justify-between md:items-center">
      <div className="flex align-center items-center">
        <img
          src="https://via.placeholder.com/50"
          className="rounded-full"
          alt="avator"
        />
        <span className="p-2">{name}</span>
      </div>
      <div className="flex lg:flex-row sm:flex-col xs:flex-col items-center justify-between">
        <div className="text-gray-600 text-bold px-4 text-sm">{company.bs}</div>
        <div className="text-black px-4 text-sm">{email}</div>
      </div>
    </div>
  );
}

export default UserCard;
