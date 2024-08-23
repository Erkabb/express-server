import React, { useState } from "react";

const UserModal = ({ createEmployee, isEdit, isOpen, close }) => {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [position, setPosition] = useState();
  const handleEdit = () => {
    createEmployee({
      firstname,
      email,
      lastname,
      position,
    });
  };
  //   const saved = async () => {
  //     const res = await fetch("http://localhost:8000/users", {
  //       method: "POST",
  //       headers: { "Content-type": "application/json" },
  //       body: JSON.stringify({
  //         firstname: "Bat",
  //         lastname: "Наран",
  //         email: "batbat@gmail.com",
  //         position: "Developer",
  //         profileImg: "https://img.daisyui.com/images/profile/demo/2@94.webp",
  //       }),
  //     });
  //   };
  return (
    <div>
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
        open={isOpen}
      >
        <div className="modal-box">
          <h1 className="pb-5">
            <strong>{isEdit ? "Edit" : "New"} employee's info</strong>
          </h1>
          <label className="input input-bordered flex items-center gap-2">
            Firstname
            <input
              type="text"
              className="grow"
              placeholder="daisy"
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Lastname
            <input
              type="text"
              className="grow"
              placeholder="lastname"
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Email
            <input
              type="text"
              className="grow"
              placeholder="user.email}"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Position
            <input
              type="text"
              className="grow"
              placeholder="user.position}"
              onChange={(e) => {
                setPosition(e.target.value);
              }}
            />
          </label>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={close}>
                Close
              </button>
              <button className="btn btn-success" onClick={handleEdit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UserModal;
