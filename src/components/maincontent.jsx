import React, { useEffect, useState } from "react";
import UserRow from "./usercard";
import Subheader from "./user-head";
import UserModal from "./edit-user-modal";

const Maincontent = () => {
  const [users, setUsers] = useState();

  const [isEdit, setIsEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const show = () => {
    setIsOpen(true);
  };
  const hide = () => {
    setIsOpen(false);
  };
  const getEmployees = async () => {
    const res = await fetch("http://localhost:8000/users");
    const { users } = await res.json();
    setUsers(users);
  };

  const deleteEmp = async (userEid) => {
    const res = await fetch(`http://localhost:8000/users/${userEid}`, {
      method: "DELETE",
    });
  };

  const createEmployee = async (newEmployee) => {
    const res = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newEmployee),
    });
    const { user } = await res.json();
    setUsers([...users, user]);
  };

  const updEmployee = async (id, oldEmployee) => {
    const res = await fetch("http://localhost:8000/users/" + id, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(oldEmployee),
    });
    const { user } = await res.json();
    setUsers([...users, user]);
  };

  const handleAdd = () => {
    setIsEdit(false);
    show();
  };

  useEffect(() => {
    getEmployees();
  }, []);
  return (
    <div className="w-[1200px] m-auto">
      <button className="btn btn-info btn-outline" onClick={handleAdd}>
        Add employee
      </button>
      <table className="table">
        <thead>
          <Subheader />
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <div>
                <UserRow user={user} deleteEmp={deleteEmp} />
              </div>
            );
          })}
        </tbody>
      </table>
      <div></div>
      <UserModal
        isOpen={isOpen}
        close={hide}
        isEdit={isEdit}
        createEmployee={createEmployee}
      />
    </div>
  );
};

export default Maincontent;
