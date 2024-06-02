import React from "react";

const Table = () => {
  return (
    <div className="overflow-x-auto text-black">
      <table className="table bg-white ">
        {/* head */}
        <thead>
          <tr className="text-black">
            <th></th>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="bg-white-200">
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
