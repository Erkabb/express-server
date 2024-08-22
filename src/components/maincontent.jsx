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

  const createEmployee = async () => {
    const res = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        firstname: "Бат",
        lastname: "Наран",
        email: "batbat@gmail.com",
        position: "Developer",
        profileImg: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      }),
    });
  };

  const deleteEmp = async (userEid) => {
    const res = await fetch(`http://localhost:8000/users/${userEid}`, {
      method: "DELETE",
    });
  };

  const editEmp = async (employee) => {
    const res = await fetch(`http://localhost:8000/users/${employee}`);
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
            return (
              <UserRow user={user} deleteEmp={deleteEmp} editEmp={editEmp} />
            );
          })}
        </tbody>
      </table>
      <div>
        <button className="btn btn-info btn-outline" onClick={createEmployee}>
          Add employee
        </button>
      </div>
    </div>
  );
};

export default Maincontent;
