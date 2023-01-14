import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "../../components/elements/UserCard";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUser();
  }, []);
  function getUser() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
    });
  }
  return (
    <div className="border-top h-36 w-full p-4 relative top-10 ">
      <div className="flex flex-col mx-auto ">
        <h1
          style={{ width: "calc(100% - 6rem)", margin: "0 auto" }}
          className="bg-[#2ed192] text-white py-6 px-3 font-bold text-xl w-full shadow-lg  border mx-auto sm:-mx-6 lg:-mx-8 rounded-md absolute -top-4 left-12"
        >
          My TeamMates
        </h1>
        <div
          style={{ margin: "0rem auto", width: "calc(100% - 2rem)" }}
          className="w-full  bg-white px-10 py-10  m-2 shadow-lg  border mx-auto sm:-mx-6 lg:-mx-8 rounded-md"
        >
          <div className="py-4 h-auto">
            {users
              .map((user) => {
                return <UserCard user={user} />;
              })
              .splice(1, 5)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
