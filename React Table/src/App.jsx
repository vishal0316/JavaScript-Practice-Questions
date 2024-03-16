import React from "react";
import { useTable } from "react-table";

const data = [
  {
    id: 1,
    name: "John",
    age: 30,
    gender: "male",
    salary: 60000,
  },
  {
    id: 2,
    name: "Jane",
    age: 25,
    gender: "female",
    salary: 50000,
  },
  {
    id: 3,
    name: "Mike",
    age: 35,
    gender: "male",
    salary: 40000,
  },
  {
    id: 4,
    name: "Emily",
    age: 28,
    gender: "female",
    salary: 30000,
  },
  {
    id: 5,
    name: "Alex",
    age: 32,
    gender: "male",
    salary: 20000,
  },
];

const columns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Age",
    accessor: "age",
  },
  {
    Header: "Salary",
    accessor: "salary",
  },
];

const App = () => {
  const { getTableBodyProps, getTableProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div className="container mx-auto px-4">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Age</th>
            <th className="px-4 py-2">Gender</th>
            <th className="px-4 py-2">Salary</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.age}</td>
              <td className="border px-4 py-2">{item.gender}</td>
              <td className="border px-4 py-2">{item.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
