import { useState } from "react";
import UserModal from "./edit-user-modal";

const UserRow = ({ user, deleteEmp }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <tr>
      <td>
        <div className="avatar">
          <div className="w-12 h-12 mask mask-squircle">
            <img src={user.profileImg} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <div>
            <div className="font-bold">{user.firstname}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-primary badge-outline badge-sm">
          {user.position}
        </span>
      </td>
      <td>{user.email}</td>
      <td className="flex gap-3 mt-4">
        {isOpenModal && <UserModal />}
        {/* <UserModal user={user} /> */}
        <button
          className="btn btn-outline btn-xs"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Edit
        </button>
        <button
          className="btn btn-outline btn-error btn-xs"
          onClick={() => deleteEmp(user.eid)}
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
