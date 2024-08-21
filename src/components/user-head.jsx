import React from "react";

const Subheader = () => {
  return (
    <tr>
      <th>Зураг</th>
      <th>Нэр</th>
      <th>
        <select className="select max-w-xs">
          <option disabled selected>
            Албан тушаал
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
        </select>
      </th>
      <th>Имэйл</th>
      <th>Үйлдэл</th>
    </tr>
  );
};

export default Subheader;
