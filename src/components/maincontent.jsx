import React, { useEffect, useState } from "react";
import UserRow from "./usercard";
import Subheader from "./user-head";

const Maincontent = () => {
  const [users, setUsers] = useState();
  const getEmployees = async () => {
    const res = await fetch("http://localhost:8000/users");
    const { users } = await res.json();
    setUsers(users);
  };
  useEffect(() => {
    getEmployees();
  }, []);
  return (
    <div className="w-[1200px] m-auto">
      <table className="table">
        <thead>
          <Subheader />
        </thead>
        <tbody>
          {users?.map((user) => {
            return <UserRow user={user} />;
          })}
          <UserRow />
        </tbody>
      </table>
    </div>
  );
};

export default Maincontent;
