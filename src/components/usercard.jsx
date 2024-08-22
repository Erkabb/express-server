const UserRow = ({ user, deleteEmp, editEmp }) => {
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
        {/* <button
          className="btn btn-outline btn-info btn-xs "
          onClick={() => editEmp(user.firstname)}
        >
          Edit
        </button> */}
        <button
          className="btn btn-outline btn-xs"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          Edit
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <label className="input input-bordered flex items-center gap-2">
              Firstname
              <input type="text" className="grow" placeholder="Daisy" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Email
              <input
                type="text"
                className="grow"
                placeholder="daisy@site.com"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Position
              <input type="text" className="grow" placeholder="Developer" />
            </label>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
                <button className="btn btn-success">Submit</button>
              </form>
            </div>
          </div>
        </dialog>
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
