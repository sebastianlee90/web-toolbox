"use client";

import { Table as ImportTable } from "@/components/form/tanstackTable/import/table";
import { Table } from "@/components/form/tanstackTable/table";
import { Suspense } from "react";
// import {
//   useReactTable,
//   ColumnDef,
//   getCoreRowModel,
// } from "@tanstack/react-table";

type Row = {
  id: number;
  column1: string;
  column2: string;
  column3: string;
};

// export default function Page() {
//   const columns: ColumnDef<Row>[] = [
//     { accessorKey: "id", header: "ID" },
//     { accessorKey: "column1", header: "Column 1" },
//     { accessorKey: "column2", header: "Column 2" },
//     { accessorKey: "column3", header: "Column 3" },
//   ];
//   const data: Row[] = [
//     { id: 1, column1: "A", column2: "B", column3: "C" },
//     { id: 2, column1: "D", column2: "E", column3: "F" },
//   ];
//   const table = useReactTable({
//     columns,
//     data,
//     getCoreRowModel: getCoreRowModel(),
//   });

//   return (
//     <table>
//       <thead>
//         <tr>
//           {table
//             .getHeaderGroups()
//             .map((headerGroup) =>
//               headerGroup.headers.map((header) => (
//                 <th key={header.id}>
//                   {header.isPlaceholder ? null : header.column.id}
//                 </th>
//               ))
//             )}
//         </tr>
//       </thead>
//       <tbody>
//         {table.getRowModel().rows.map((row) => (
//           <tr key={row.id}>
//             {row.getVisibleCells().map((cell) => (
//               <td key={cell.id}>{cell.renderValue() as React.ReactNode}</td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

export default function Page() {
  const data = [
    { id: 1, column1: "A", column2: "B", column3: "C" },
    { id: 2, column1: "D", column2: "E", column3: "F" },
    { id: 3, column1: "G", column2: "H", column3: "I" },
    { id: 4, column1: "J", column2: "K", column3: "L" },
    { id: 5, column1: "M", column2: "N", column3: "O" },
    { id: 6, column1: "P", column2: "Q", column3: "R" },
  ];
  const emptyData: Row[] = [];

  return (
    <Suspense>
      <div className="flex flex-col gap-4 mt-4">
        <h1 className="text-2xl">PhIS Table</h1>
        <ImportTable
          data={data}
          columns={[
            { accessorKey: "id", header: "ID", enableSorting: false },
            {
              accessorKey: "column1",
              header: "Column 1",
              enableSorting: false,
            },
            {
              accessorKey: "column2",
              header: "Column 2",
              enableSorting: false,
            },
            {
              accessorKey: "column3",
              header: "Column 3",
              enableSorting: false,
            },
          ]}
        />
        <h1 className="text-2xl">Self Made Table</h1>
        <Table
          data={emptyData}
          // columns={[
          //   { accessorKey: "id", header: "ID" },
          //   { accessorKey: "column1", header: "Column 1" },
          //   { accessorKey: "column2", header: "Column 2" },
          //   { accessorKey: "column3", header: "Column 3" },
          // ]}
        />
      </div>
    </Suspense>
  );
}
