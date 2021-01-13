import React from "react";

export default function DataTable(props) {
    console.log(props)
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((row, i) => (
            <tr key={i}>
              <td scope="row"><img src={row.picture.thumbnail}/></td>
              <td>{`${row.name.first} ${row.name.last}`}</td>
              <td>{row.cell}</td>
              <td>{row.email}</td>
              <td>{new Date(row.dob.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
