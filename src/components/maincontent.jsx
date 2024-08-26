import React, { useEffect, useState } from "react";
import UserRow from "./usercard";
import Subheader from "./user-head";
import UserModal from "./edit-user-modal";

const Maincontent = () => {
  const [users, setUsers] = useState();
  const [selectedUser, setSelectedUser] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [refetch, setRefetch] = useState();
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
  const createEmployee = async (newUser) => {
    await myFetch("http://localhost:8000/users/", "POST", newUser);
    hide();
    setRefetch(!refetch);
  };
  const deleteEmp = async (userEid) => {
    const res = await fetch(`http://localhost:8000/users/${userEid}`, {
      method: "DELETE",
    });
  };

  // const createEmployee = async (newEmployee) => {
  //   const res = await fetch("http://localhost:8000/users", {
  //     method: "POST",
  //     headers: { "Content-type": "application/json" },
  //     body: JSON.stringify(newEmployee),
  //   });
  //   const { user } = await res.json();
  //   setUsers([...users, user]);
  // };

  const updEmployee = async (id, oldEmployee) => {
    const res = await fetch(
      "http://localhost:8000/users/" + id,
      "PUT",
      oldEmployee
    );
    setRefetch(!refetch);
  };

  useEffect(() => {
    getEmployees();
  }, [refetch]);

  const handleAdd = () => {
    setIsEdit(true);
    show();
  };
  const handleEdit = (user) => {
    console.log("ed", user);
    setSelectedUser(user);
    setIsEdit(() => false);
    show();
  };
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
