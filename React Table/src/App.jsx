import React from "react";
import { useTable } from "react-table";
import { data } from "./assets/data.json";

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
      <table {...getTableProps()} className="table-auto w-full">
        <thead>
          {headerGroups.map((hg) => (
            <tr {...hg.getHeaderGroupProps()}>
              {hg.headers.map((header) => (
                <th {...header.getHeaderProps()}>{header.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps}>

          
          {/* {data.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.age}</td>
              <td className="border px-4 py-2">{item.gender}</td>
              <td className="border px-4 py-2">{item.salary}</td>
            </tr>
          ))} */}
          {
            rows.map((row)=> {
prepareRow (row) ;

  return <tr{ ...row.getRowProps()} > </tr>
}
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default App;
