import React from "react";

function UserCard({ user }) {
  const { name, email, company } = user;
  console.log(user, "user");
  return (
    <div className="w-full border-b p-2 hover:cursor-pointer flex justify-between items-center">
      <div className="flex align-center items-center">
        <img
          src="https://via.placeholder.com/50"
          className="rounded-full"
          alt="avator"
        />
        <span className="p-2">{name}</span>
      </div>
      <div className="text-gray-400 text-bold text-2xl px-4">{company.bs}</div>
      <div className="text-black px-4">{email}</div>
    </div>
  );
}

export default UserCard;
